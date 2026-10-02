import express from 'express';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function startServer() {
  const app = express();
  const port = Number(process.env.PORT) || 3000;

  app.use(express.json());

  // Initialize server-side Gemini client with User-Agent telemetry
  const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });

  // Health check endpoint
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', service: 'ITIAR Conference Portal API' });
  });

  // POST /api/conferences/search-grounded
  // Searches and verifies past and upcoming conferences of Idara-e-Tahqeeqat-e-Imam Ahmed Raza
  // using Gemini 3.8 Flash with real-time Google Search Grounding.
  app.post('/api/conferences/search-grounded', async (req, res) => {
    try {
      const { query } = req.body;

      if (!query || typeof query !== 'string' || !query.trim()) {
        res.status(400).json({ error: 'Search query is required' });
        return;
      }

      if (!process.env.GEMINI_API_KEY) {
        res.status(500).json({
          error: 'GEMINI_API_KEY is not configured on the server. Please configure it in Settings > Secrets.',
        });
        return;
      }

      const prompt = `You are the lead academic archivist for Idara-e-Tahqeeqat-e-Imam Ahmed Raza (ITIAR), Karachi, Pakistan.
Using Google Search, find accurate and verified information regarding conferences, seminars, or symposia organized by or affiliated with Idara-e-Tahqeeqat-e-Imam Ahmed Raza, its President Prof. Dr. Majeedullah Qadri, Secretary General Mufti Syed Zahid Siraj Qadri, or past founder Syed Riyasat Ali Qadri.

User Query: "${query.trim()}"

Focus specifically on:
1. Conference Edition number (e.g., 45th in 2025, 44th in 2024, 43rd in 2023, 40th in 2020, 39th in 2019, 37th in 2017 with Karachi University, 30th in 2010, 25th Silver Jubilee in 2005, 1st in 1981, or pre-conference seminars).
2. Exact or approximate Date and Hijri year.
3. Host Venue & City (e.g., Pearl Continental Karachi, Arts Council, Beach Luxury, Sheikh Zayed Islamic Centre at University of Karachi, Federal Urdu University, Theosophical Hall).
4. Central Theme and Keynote topics (e.g., Halal Economy, Interest-Free Finance & Banking, Social Sciences, Kanzul Iman, Acoustics, Khatm-e-Nubuwwat, Epistemology).
5. Prominent keynote speakers, scholars, dignitaries, university deans, or vice-chancellors.
6. Key resolutions passed or research papers presented.

Please provide a clear, comprehensive factual narrative answer citing findings.

At the very end of your response, output a structured JSON block delimited strictly with:
---STRUCTURED_CONFERENCE_START---
{
  "number": 45,
  "year": 2025,
  "hijriYear": "1447 AH",
  "dateStr": "3 December 2025",
  "venue": "Pearl Continental Hotel",
  "city": "Karachi, Pakistan",
  "theme": "Theme title",
  "significance": "Summary of historical significance and focus",
  "attendeesCount": "Approximate attendees or delegates (e.g. '1,000+ Delegates')",
  "speakersCount": "Approximate speakers (e.g. '30 Keynote Speakers')",
  "papersCount": "Approximate papers (e.g. '24 Research Papers')",
  "keySpeakers": ["Speaker 1", "Speaker 2"],
  "resolutions": ["Resolution 1", "Resolution 2"]
}
---STRUCTURED_CONFERENCE_END---

If the query is general or does not point to a specific conference edition, output reasonable estimated values or null in the JSON block while ensuring the text provides complete historical context.`;

      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: prompt,
        config: {
          tools: [{ googleSearch: {} }],
        },
      });

      const responseText = response.text || '';
      
      // Extract Google Grounding sources
      const rawChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
      const sources: { title: string; url: string }[] = [];
      const seenUrls = new Set<string>();

      for (const chunk of rawChunks as any[]) {
        if (chunk.web?.uri) {
          const url = chunk.web.uri;
          if (!seenUrls.has(url)) {
            seenUrls.add(url);
            sources.push({
              title: chunk.web.title || new URL(url).hostname.replace('www.', ''),
              url: url,
            });
          }
        }
      }

      const searchQueries = response.candidates?.[0]?.groundingMetadata?.webSearchQueries || [];

      // Extract structured conference if available
      let structuredConference: any = null;
      let cleanText = responseText;

      const startTag = '---STRUCTURED_CONFERENCE_START---';
      const endTag = '---STRUCTURED_CONFERENCE_END---';
      const startIndex = responseText.indexOf(startTag);
      const endIndex = responseText.indexOf(endTag);

      if (startIndex !== -1 && endIndex !== -1 && endIndex > startIndex) {
        const jsonStr = responseText.substring(startIndex + startTag.length, endIndex).trim();
        try {
          structuredConference = JSON.parse(jsonStr);
          cleanText = (responseText.substring(0, startIndex) + responseText.substring(endIndex + endTag.length)).trim();
        } catch {
          // If JSON parse fails, keep responseText intact
        }
      }

      res.json({
        query: query.trim(),
        text: cleanText,
        sources,
        searchQueries,
        suggestedConference: structuredConference,
      });
    } catch (err: any) {
      console.error('Error during Google Search Grounding:', err);
      res.status(500).json({
        error: err.message || 'Failed to perform grounded conference search',
      });
    }
  });

  // Setup Vite in development or static serving in production
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  } else {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(port, '0.0.0.0', () => {
    console.log(`Server running at http://0.0.0.0:${port}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
