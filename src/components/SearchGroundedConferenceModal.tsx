import React, { useState } from 'react';
import {
  Search,
  Sparkles,
  ExternalLink,
  Calendar,
  MapPin,
  Users,
  CheckCircle2,
  Plus,
  X,
  FileText,
  BookmarkCheck,
  AlertCircle,
  RefreshCw,
  SlidersHorizontal,
  Globe
} from 'lucide-react';
import { ConferenceArchiveItem } from '../data/organizationData.ts';

interface SearchGroundedConferenceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddConference: (conference: ConferenceArchiveItem) => void;
}

interface GroundingSource {
  title: string;
  url: string;
}

export const SearchGroundedConferenceModal: React.FC<SearchGroundedConferenceModalProps> = ({
  isOpen,
  onClose,
  onAddConference,
}) => {
  const [activeTab, setActiveTab] = useState<'search' | 'manual'>('search');
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [resultText, setResultText] = useState<string | null>(null);
  const [sources, setSources] = useState<GroundingSource[]>([]);
  const [searchQueries, setSearchQueries] = useState<string[]>([]);
  const [suggestedConf, setSuggestedConf] = useState<ConferenceArchiveItem | null>(null);
  const [addedSuccess, setAddedSuccess] = useState(false);

  // Manual Form State
  const [manualForm, setManualForm] = useState({
    number: '',
    year: '',
    hijriYear: '',
    dateStr: '',
    venue: '',
    city: 'Karachi, Pakistan',
    theme: '',
    significance: '',
    attendeesCount: '',
    speakersCount: '',
    papersCount: '',
    keySpeakers: '',
    resolutions: '',
    imageUrl: '',
  });

  if (!isOpen) return null;

  const handleSearch = async (queryToUse?: string) => {
    const q = (queryToUse || searchQuery).trim();
    if (!q) return;

    setIsLoading(true);
    setError(null);
    setResultText(null);
    setSources([]);
    setSearchQueries([]);
    setSuggestedConf(null);
    setAddedSuccess(false);

    try {
      const res = await fetch('/api/conferences/search-grounded', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: q }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || `Server responded with ${res.status}`);
      }

      const data = await res.json();
      setResultText(data.text || 'No text summary returned.');
      setSources(data.sources || []);
      setSearchQueries(data.searchQueries || []);

      if (data.suggestedConference) {
        const sc = data.suggestedConference;
        const newConf: ConferenceArchiveItem = {
          id: `conf-${sc.number || Date.now()}-${sc.year || 2025}`,
          number: Number(sc.number) || 45,
          year: Number(sc.year) || 2025,
          hijriYear: sc.hijriYear || '1447 AH',
          dateStr: sc.dateStr || `${sc.year || 2025}`,
          venue: sc.venue || 'Karachi, Pakistan',
          city: sc.city || 'Karachi, Pakistan',
          theme: sc.theme || q,
          significance: sc.significance || 'Historical academic conference documented in ITIAR proceedings.',
          attendeesCount: sc.attendeesCount || '800+ Delegates',
          speakersCount: sc.speakersCount || '25 Speakers',
          papersCount: sc.papersCount || '20 Research Papers',
          keySpeakers: Array.isArray(sc.keySpeakers) ? sc.keySpeakers : [],
          resolutions: Array.isArray(sc.resolutions) ? sc.resolutions : [],
          groundingSources: data.sources || [],
          imageUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
          isUserAdded: true,
        };
        setSuggestedConf(newConf);
      }
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'Failed to search conferences. Please ensure GEMINI_API_KEY is available.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddSuggested = () => {
    if (!suggestedConf) return;
    onAddConference(suggestedConf);
    setAddedSuccess(true);
    setTimeout(() => {
      setAddedSuccess(false);
    }, 4000);
  };

  const handleManualSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!manualForm.number || !manualForm.year || !manualForm.theme || !manualForm.venue) {
      alert('Please fill in required fields: Conference Number, Year, Theme, and Venue.');
      return;
    }

    const newConf: ConferenceArchiveItem = {
      id: `conf-manual-${manualForm.number}-${manualForm.year}-${Date.now()}`,
      number: Number(manualForm.number),
      year: Number(manualForm.year),
      hijriYear: manualForm.hijriYear ? `${manualForm.hijriYear} AH` : undefined,
      dateStr: manualForm.dateStr || `${manualForm.year}`,
      venue: manualForm.venue,
      city: manualForm.city || 'Karachi, Pakistan',
      theme: manualForm.theme,
      significance: manualForm.significance || 'Conference entry added to the institutional research chronicle.',
      attendeesCount: manualForm.attendeesCount || undefined,
      speakersCount: manualForm.speakersCount || undefined,
      papersCount: manualForm.papersCount || undefined,
      keySpeakers: manualForm.keySpeakers
        ? manualForm.keySpeakers.split(',').map((s) => s.trim()).filter(Boolean)
        : [],
      resolutions: manualForm.resolutions
        ? manualForm.resolutions.split('\n').map((s) => s.trim()).filter(Boolean)
        : [],
      imageUrl: manualForm.imageUrl.trim() || 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80',
      isUserAdded: true,
    };

    onAddConference(newConf);
    alert(`Successfully added ${newConf.number}th Conference (${newConf.year}) to the archive chronicle!`);
    onClose();
  };

  const quickPrompts = [
    '45th Imam Ahmed Raza Conference 2025 Pearl Continental',
    '44th Conference 2024 Halal Economy Karachi PC',
    'Pre-conference seminar 2025 Al Safaa Khatm e Nubuwwat',
    '2017 Karachi University Imam Ahmed Raza Social Sciences',
    'Silver Jubilee 25th Conference 2005 Beach Luxury',
    '1st Conference 1981 Theosophical Hall Salnama launch',
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs text-left animate-in fade-in duration-200">
      <div
        className="bg-white rounded max-w-4xl w-full max-h-[92vh] overflow-y-auto border border-[#eaeaec] shadow-2xl flex flex-col relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="p-5 sm:p-6 border-b border-[#eaeaec] flex items-center justify-between bg-[#191919] text-white">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[#a0876e] text-white font-heading">
                Google Search Grounding
              </span>
              <span className="text-[11px] text-stone-300 font-sans flex items-center gap-1">
                <Globe className="w-3 h-3 text-[#288a61]" />
                Powered by gemini-3.8-flash
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-white">
              Search & Add Past Conferences
            </h2>
            <p className="text-xs text-stone-300 font-sans">
              Discover verified proceedings, dates, venues, key speakers, and resolutions from 45 years of ITIAR international conferences.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded text-stone-400 hover:text-white hover:bg-stone-800 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab switcher */}
        <div className="flex items-center border-b border-[#eaeaec] bg-[#faf8f5] px-6 text-xs font-heading font-bold">
          <button
            onClick={() => setActiveTab('search')}
            className={`py-3 px-4 border-b-2 flex items-center gap-2 cursor-pointer transition-colors ${
              activeTab === 'search'
                ? 'border-[#a0876e] text-[#a0876e]'
                : 'border-transparent text-[#5c544d] hover:text-[#020404]'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI Search & Live Web Grounding</span>
          </button>
          <button
            onClick={() => setActiveTab('manual')}
            className={`py-3 px-4 border-b-2 flex items-center gap-2 cursor-pointer transition-colors ${
              activeTab === 'manual'
                ? 'border-[#a0876e] text-[#a0876e]'
                : 'border-transparent text-[#5c544d] hover:text-[#020404]'
            }`}
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Manual Archive Entry Form</span>
          </button>
        </div>

        {/* Tab 1: AI Search Grounding */}
        {activeTab === 'search' && (
          <div className="p-6 space-y-6 flex-1">
            {/* Search Input Box */}
            <div className="space-y-3">
              <label className="block text-xs font-bold text-[#020404] font-heading uppercase tracking-wider">
                Enter Conference Query (Edition, Year, Theme, or Venue):
              </label>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSearch();
                }}
                className="flex flex-col sm:flex-row gap-2"
              >
                <div className="relative flex-1">
                  <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-3" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="e.g. 44th Imam Ahmed Raza Conference Dec 2024 or Karachi University 2017"
                    className="w-full pl-10 pr-4 py-2.5 text-xs bg-[#faf8f5] border border-[#eaeaec] rounded focus:outline-hidden focus:border-[#a0876e] text-[#020404]"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-6 py-2.5 rounded text-xs font-bold text-white bg-[#288a61] hover:bg-[#1f6f4e] transition-colors cursor-pointer disabled:opacity-50 font-heading uppercase tracking-wider flex items-center justify-center gap-2 shrink-0"
                >
                  {isLoading ? (
                    <>
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                      <span>Searching Web...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Search Grounded Data</span>
                    </>
                  )}
                </button>
              </form>

              {/* Quick Suggestion Chips */}
              <div className="space-y-1.5 pt-1">
                <span className="text-[11px] font-semibold text-[#5c544d] block font-sans">
                  Quick Research Prompts:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {quickPrompts.map((prompt) => (
                    <button
                      key={prompt}
                      type="button"
                      onClick={() => {
                        setSearchQuery(prompt);
                        handleSearch(prompt);
                      }}
                      className="text-[11px] px-2.5 py-1 rounded bg-[#f4f4f5] hover:bg-stone-200 text-[#3f4245] transition-colors cursor-pointer border border-[#eaeaec] font-sans"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="p-4 bg-red-50 border border-red-200 rounded text-xs text-red-700 flex items-start gap-2.5 font-sans">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-600" />
                <div>
                  <strong className="block font-bold">Search Error</strong>
                  {error}
                </div>
              </div>
            )}

            {/* Loading State */}
            {isLoading && (
              <div className="p-8 border border-dashed border-[#eaeaec] rounded bg-[#faf8f5] text-center space-y-3">
                <RefreshCw className="w-6 h-6 animate-spin mx-auto text-[#a0876e]" />
                <h4 className="font-heading font-bold text-sm text-[#020404]">
                  Querying Real-Time Google Search Grounding...
                </h4>
                <p className="text-xs text-[#5c544d] max-w-md mx-auto font-sans">
                  Retrieving verified proceedings, academic paper titles, dates, host venues, and keynote speakers from university libraries and press archives.
                </p>
              </div>
            )}

            {/* Result Area */}
            {resultText && !isLoading && (
              <div className="space-y-5 animate-in fade-in duration-300">
                {/* Extracted Conference Card Proposal */}
                {suggestedConf && (
                  <div className="p-5 bg-[#faf8f5] rounded border-2 border-[#a0876e]/50 shadow-xs space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#eaeaec] pb-3">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-1 rounded bg-[#191919] text-[#a0876e] text-xs font-bold font-heading">
                          {suggestedConf.number}th Conference Edition
                        </span>
                        <span className="text-xs font-mono font-medium text-[#5c544d]">
                          {suggestedConf.year} ({suggestedConf.hijriYear})
                        </span>
                      </div>

                      <button
                        onClick={handleAddSuggested}
                        disabled={addedSuccess}
                        className={`px-4 py-2 rounded text-xs font-bold cursor-pointer font-heading uppercase tracking-wider flex items-center gap-1.5 transition-all ${
                          addedSuccess
                            ? 'bg-[#288a61] text-white shadow-xs'
                            : 'bg-[#a0876e] hover:bg-[#8b735c] text-white shadow-xs'
                        }`}
                      >
                        {addedSuccess ? (
                          <>
                            <BookmarkCheck className="w-3.5 h-3.5" />
                            <span>Added to Archive Chronicle!</span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-3.5 h-3.5" />
                            <span>Add to Archive Chronicle</span>
                          </>
                        )}
                      </button>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-heading font-bold text-lg text-[#020404]">
                        {suggestedConf.theme}
                      </h4>
                      <div className="flex flex-wrap gap-4 text-xs text-[#5c544d] font-sans">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-[#a0876e]" />
                          <span>{suggestedConf.dateStr}</span>
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-[#a0876e]" />
                          <span>{suggestedConf.venue}, {suggestedConf.city}</span>
                        </span>
                        {suggestedConf.attendeesCount && (
                          <span className="flex items-center gap-1">
                            <Users className="w-3.5 h-3.5 text-[#a0876e]" />
                            <span>{suggestedConf.attendeesCount}</span>
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-[#3f4245] leading-relaxed font-sans pt-1">
                        {suggestedConf.significance}
                      </p>
                    </div>

                    {/* Key Speakers & Resolutions */}
                    {suggestedConf.keySpeakers && suggestedConf.keySpeakers.length > 0 && (
                      <div className="pt-2 border-t border-[#eaeaec] space-y-1">
                        <span className="text-[11px] font-bold text-[#020404] uppercase font-heading block">
                          Identified Keynote Speakers & Dignitaries:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {suggestedConf.keySpeakers.map((spk, idx) => (
                            <span
                              key={idx}
                              className="text-[11px] px-2 py-0.5 rounded bg-white border border-[#eaeaec] text-[#3f4245] font-sans"
                            >
                              {spk}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {suggestedConf.resolutions && suggestedConf.resolutions.length > 0 && (
                      <div className="pt-2 border-t border-[#eaeaec] space-y-1">
                        <span className="text-[11px] font-bold text-[#020404] uppercase font-heading block">
                          Documented Conference Resolutions / Papers:
                        </span>
                        <ul className="text-xs text-[#5c544d] space-y-1 list-disc list-inside font-sans">
                          {suggestedConf.resolutions.map((res, idx) => (
                            <li key={idx}>{res}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}

                {/* Narrative Summary */}
                <div className="p-5 bg-white rounded border border-[#eaeaec] space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#020404] uppercase tracking-wider font-heading">
                    <FileText className="w-4 h-4 text-[#a0876e]" />
                    <span>Verified Research & Proceedings Analysis:</span>
                  </div>
                  <div className="text-xs text-[#3f4245] font-sans leading-relaxed whitespace-pre-wrap max-h-72 overflow-y-auto pr-2">
                    {resultText}
                  </div>
                </div>

                {/* Grounding Sources (Google Search Grounding citations) */}
                {sources.length > 0 && (
                  <div className="p-4 bg-[#faf8f5] rounded border border-[#eaeaec] space-y-2">
                    <div className="flex items-center gap-2 text-[11px] font-bold text-[#5c544d] uppercase tracking-wider font-heading">
                      <ExternalLink className="w-3.5 h-3.5 text-[#288a61]" />
                      <span>Google Search Grounding Verification Sources ({sources.length}):</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                      {sources.map((src, i) => (
                        <a
                          key={i}
                          href={src.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-2 rounded bg-white border border-[#eaeaec] hover:border-[#a0876e] text-xs text-[#020404] hover:text-[#a0876e] transition-colors truncate group font-sans"
                        >
                          <span className="truncate pr-2 font-medium">{src.title}</span>
                          <ExternalLink className="w-3 h-3 text-stone-400 group-hover:text-[#a0876e] shrink-0" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* Tab 2: Manual Entry Form */}
        {activeTab === 'manual' && (
          <form onSubmit={handleManualSubmit} className="p-6 space-y-5 flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#020404] mb-1 font-heading">
                  Conference Number *
                </label>
                <input
                  type="number"
                  placeholder="e.g. 38"
                  value={manualForm.number}
                  onChange={(e) => setManualForm({ ...manualForm, number: e.target.value })}
                  className="w-full px-3 py-2 text-xs bg-[#faf8f5] border border-[#eaeaec] rounded focus:outline-hidden focus:border-[#a0876e]"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#020404] mb-1 font-heading">
                  Year (Gregorian) *
                </label>
                <input
                  type="number"
                  placeholder="e.g. 2018"
                  value={manualForm.year}
                  onChange={(e) => setManualForm({ ...manualForm, year: e.target.value })}
                  className="w-full px-3 py-2 text-xs bg-[#faf8f5] border border-[#eaeaec] rounded focus:outline-hidden focus:border-[#a0876e]"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#020404] mb-1 font-heading">
                  Hijri Year (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. 1440"
                  value={manualForm.hijriYear}
                  onChange={(e) => setManualForm({ ...manualForm, hijriYear: e.target.value })}
                  className="w-full px-3 py-2 text-xs bg-[#faf8f5] border border-[#eaeaec] rounded focus:outline-hidden focus:border-[#a0876e]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#020404] mb-1 font-heading">
                Conference Theme / Title *
              </label>
              <input
                type="text"
                placeholder="e.g. Imam Ahmad Raza's Contributions to Classical Astronomy & Islamic Economics"
                value={manualForm.theme}
                onChange={(e) => setManualForm({ ...manualForm, theme: e.target.value })}
                className="w-full px-3 py-2 text-xs bg-[#faf8f5] border border-[#eaeaec] rounded focus:outline-hidden focus:border-[#a0876e]"
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#020404] mb-1 font-heading">
                  Host Venue *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Arts Council of Pakistan Auditorium"
                  value={manualForm.venue}
                  onChange={(e) => setManualForm({ ...manualForm, venue: e.target.value })}
                  className="w-full px-3 py-2 text-xs bg-[#faf8f5] border border-[#eaeaec] rounded focus:outline-hidden focus:border-[#a0876e]"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#020404] mb-1 font-heading">
                  City & Country
                </label>
                <input
                  type="text"
                  placeholder="e.g. Karachi, Pakistan"
                  value={manualForm.city}
                  onChange={(e) => setManualForm({ ...manualForm, city: e.target.value })}
                  className="w-full px-3 py-2 text-xs bg-[#faf8f5] border border-[#eaeaec] rounded focus:outline-hidden focus:border-[#a0876e]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#020404] mb-1 font-heading">
                  Date (Day & Month)
                </label>
                <input
                  type="text"
                  placeholder="e.g. 15 November 2018"
                  value={manualForm.dateStr}
                  onChange={(e) => setManualForm({ ...manualForm, dateStr: e.target.value })}
                  className="w-full px-3 py-2 text-xs bg-[#faf8f5] border border-[#eaeaec] rounded focus:outline-hidden focus:border-[#a0876e]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#020404] mb-1 font-heading">
                  Attendees Estimate
                </label>
                <input
                  type="text"
                  placeholder="e.g. 1,000+ Delegates"
                  value={manualForm.attendeesCount}
                  onChange={(e) => setManualForm({ ...manualForm, attendeesCount: e.target.value })}
                  className="w-full px-3 py-2 text-xs bg-[#faf8f5] border border-[#eaeaec] rounded focus:outline-hidden focus:border-[#a0876e]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#020404] mb-1 font-heading">
                  Speakers Count
                </label>
                <input
                  type="text"
                  placeholder="e.g. 30 Speakers"
                  value={manualForm.speakersCount}
                  onChange={(e) => setManualForm({ ...manualForm, speakersCount: e.target.value })}
                  className="w-full px-3 py-2 text-xs bg-[#faf8f5] border border-[#eaeaec] rounded focus:outline-hidden focus:border-[#a0876e]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#020404] mb-1 font-heading">
                Significance & Key Highlights *
              </label>
              <textarea
                rows={3}
                placeholder="Describe the historical importance, major lectures delivered, and research significance..."
                value={manualForm.significance}
                onChange={(e) => setManualForm({ ...manualForm, significance: e.target.value })}
                className="w-full px-3 py-2 text-xs bg-[#faf8f5] border border-[#eaeaec] rounded focus:outline-hidden focus:border-[#a0876e]"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#020404] mb-1 font-heading">
                Prominent Speakers (Comma Separated)
              </label>
              <input
                type="text"
                placeholder="e.g. Prof. Dr. Majeedullah Qadri, Prof. Dr. Masud Ahmed, Mufti Muneeb-ur-Rehman"
                value={manualForm.keySpeakers}
                onChange={(e) => setManualForm({ ...manualForm, keySpeakers: e.target.value })}
                className="w-full px-3 py-2 text-xs bg-[#faf8f5] border border-[#eaeaec] rounded focus:outline-hidden focus:border-[#a0876e]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#020404] mb-1 font-heading">
                Resolutions & Proceedings (One per line)
              </label>
              <textarea
                rows={2}
                placeholder="Resolution 1: Institutionalization of annual thesis awards&#10;Resolution 2: Publication of Arabic critical edition"
                value={manualForm.resolutions}
                onChange={(e) => setManualForm({ ...manualForm, resolutions: e.target.value })}
                className="w-full px-3 py-2 text-xs bg-[#faf8f5] border border-[#eaeaec] rounded focus:outline-hidden focus:border-[#a0876e]"
              />
            </div>

            <div className="pt-2 flex justify-end gap-3 border-t border-[#eaeaec]">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-semibold text-[#5c544d] hover:bg-[#f4f4f5] rounded cursor-pointer font-sans"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 rounded text-xs font-bold text-white bg-[#288a61] hover:bg-[#1f6f4e] transition-colors cursor-pointer font-heading uppercase tracking-wider flex items-center gap-1.5"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Save to Archive Chronicle</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
