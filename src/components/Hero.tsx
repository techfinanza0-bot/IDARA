import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  MapPin, 
  Globe, 
  CheckCircle2, 
  ChevronRight,
  BookOpen,
  Calendar,
  Award,
  Pause,
  Play,
  FileText,
  Sparkles,
  Search,
  ExternalLink
} from 'lucide-react';
import { motion } from 'motion/react';
import { RazaEmblem } from './RazaEmblem.tsx';

interface HeroProps {
  onExploreConference: () => void;
  onExploreHistory: () => void;
  onExplorePublications: () => void;
  onOpenRegister: () => void;
  onOpenSearch?: () => void;
}

interface HeroSlide {
  id: string;
  theme: string;
  location: string;
  imageUrl: string;
  alt: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'academic-summit',
    theme: 'Annual International Conferences & Symposia',
    location: 'Flagship Academic Assemblies (1981–2025)',
    imageUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=2200&q=85',
    alt: 'International Academic Conference Assembly and Delegations'
  },
  {
    id: 'islamic-heritage',
    theme: 'Classical Islamic Heritage & Intellectual Rigor',
    location: 'Global Raza Studies & Jurisprudential Research',
    imageUrl: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=2200&q=85',
    alt: 'Islamic Monumental Architecture and Scholarly Sanctuary'
  },
  {
    id: 'classical-archives',
    theme: 'Monumental Archival Vaults & Research Collections',
    location: 'Preserving 164+ Treatises & Doctoral Repositories',
    imageUrl: 'https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&w=2200&q=85',
    alt: 'Grand Classical Research Library and Archival Vaults'
  },
  {
    id: 'treatises-manuscripts',
    theme: 'Manuscript Studies & Hanafi Jurisprudential Exegesis',
    location: 'Mahnama Ma\'arif-e-Raza Research Bureau',
    imageUrl: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=2200&q=85',
    alt: 'Classical Research Manuscripts and Academic Treatises'
  }
];

export const Hero: React.FC<HeroProps> = ({
  onExploreConference,
  onExploreHistory,
  onExplorePublications,
  onOpenRegister,
  onOpenSearch,
}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Auto-advance slides with subtle Ken Burns duration
  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [isPlaying]);

  const activeSlide = HERO_SLIDES[currentSlideIndex];

  return (
    <section className="relative overflow-hidden bg-[#0a120e] text-white pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-neutral-900">
      {/* Background Photography with Subtle Ken Burns Effect & Warm Dark Scrim */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        {HERO_SLIDES.map((slide, idx) => {
          const isActive = idx === currentSlideIndex;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-25 z-1' : 'opacity-0 z-0'
              }`}
            >
              <img
                src={slide.imageUrl}
                alt={slide.alt}
                className={`w-full h-full object-cover scale-105 ${
                  isActive ? (idx % 2 === 0 ? 'animate-ken-burns' : 'animate-ken-burns-reverse') : ''
                }`}
                loading={idx === 0 ? 'eager' : 'lazy'}
                referrerPolicy="no-referrer"
              />
            </div>
          );
        })}
      </div>
      
      {/* Editorial Scrim for Perfect WCAG AAA Text Contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#070e0a]/95 via-[#08120c]/90 to-[#0c1611]/85 pointer-events-none" />
      <div className="absolute inset-0 bg-radial-at-t from-emerald-950/20 via-transparent to-black/60 pointer-events-none" />

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        
        {/* Institutional Top Announcement Ribbon */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-between gap-3 border-b border-emerald-900/30 pb-4 text-xs"
        >
          <div className="flex items-center gap-3">
            <span className="bg-[#a0876e]/20 border border-[#a0876e]/40 text-[#e6ca98] px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider font-heading flex items-center gap-1.5 shadow-2xs">
              <Sparkles className="w-3 h-3 text-[#e6ca98]" />
              Official Academic Dispatch
            </span>
            <span className="text-neutral-300 font-medium font-sans truncate max-w-xl text-xs sm:text-[13px]">
              45th Annual International Conference Proceedings &amp; Salnama Vol. 45 Released
            </span>
          </div>

          <div className="flex items-center gap-4 text-neutral-400 text-xs hidden sm:flex">
            <span className="flex items-center gap-1.5 text-neutral-300">
              <MapPin className="w-3.5 h-3.5 text-[#a0876e]" />
              <span>Karachi Central Secretariat</span>
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5 text-neutral-300">
              <Globe className="w-3.5 h-3.5 text-[#a0876e]" />
              <span>Islamabad Liaison Bureau</span>
            </span>
          </div>
        </motion.div>

        {/* Hero Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-center">
          
          {/* Left Column: Prestigious Academic Editorial Copy */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            <div className="flex items-center gap-3">
              <RazaEmblem size={34} inverted={true} withBadge={true} />
              <div className="text-[11px] font-semibold text-[#e6ca98] uppercase tracking-widest font-heading">
                Established 1400 AH / 1980 CE · Regd. Societies Act XXI of 1860
              </div>
            </div>

            {/* Large Typography */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]">
              Advancing Global Islamic Research &amp; <br />
              <span className="text-[#e6ca98] italic">Raza Studies Worldwide</span>
            </h1>

            {/* Short High-Readability Description */}
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-sans max-w-2xl font-normal">
              A chartered research academy founded in 1980, convening 45 annual international symposia, 
              cataloging 164+ critical monographs, and publishing the peer-reviewed journal <em>Ma'arif-e-Raza</em>.
            </p>

            {/* Two Premium CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onExplorePublications}
                className="px-7 py-3.5 rounded-full text-xs font-bold text-white bg-[#288a61] hover:bg-[#1f6f4e] hover:shadow-lg hover:shadow-emerald-950/40 hover:-translate-y-0.5 transition-all cursor-pointer flex items-center gap-2 uppercase tracking-wider font-heading group"
              >
                <span>Explore 164+ Publications</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onExploreConference}
                className="px-6 py-3.5 rounded-full text-xs font-semibold text-neutral-200 bg-white/10 hover:bg-white/15 border border-white/20 hover:border-[#a0876e] hover:-translate-y-0.5 transition-all cursor-pointer flex items-center gap-2 uppercase tracking-wider font-heading group"
              >
                <span>Conferences Archive</span>
                <ChevronRight className="w-3.5 h-3.5 text-[#e6ca98] group-hover:translate-x-0.5 transition-transform" />
              </button>

              {onOpenSearch && (
                <button
                  onClick={onOpenSearch}
                  className="px-4 py-3.5 text-xs font-medium text-[#e6ca98] hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <Search className="w-3.5 h-3.5" />
                  <span>Search Archive</span>
                </button>
              )}
            </div>

            {/* Slideshow Control Rail */}
            <div className="pt-2 flex items-center gap-3 text-xs text-neutral-400">
              <span className="text-neutral-300 font-medium font-sans">
                Active Theme: <span className="text-[#e6ca98] font-heading">{activeSlide.theme}</span>
              </span>
              <div className="flex items-center gap-1.5 ml-2">
                {HERO_SLIDES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlideIndex(i)}
                    className={`h-1.5 rounded-full transition-all cursor-pointer ${
                      i === currentSlideIndex 
                        ? 'w-6 bg-[#e6ca98]' 
                        : 'w-2 bg-neutral-700 hover:bg-neutral-500'
                    }`}
                    aria-label={`Slide ${i + 1}`}
                  />
                ))}
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="ml-1 text-neutral-400 hover:text-white p-0.5 rounded cursor-pointer"
                  title={isPlaying ? 'Pause' : 'Play'}
                >
                  {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                </button>
              </div>
            </div>

            {/* Quick Interactive Statistics Strip */}
            <div className="pt-6 border-t border-emerald-950/60 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
              <div>
                <span className="font-serif text-2xl sm:text-3xl font-bold text-white block">
                  45<span className="text-[#e6ca98]">+</span>
                </span>
                <span className="text-[11px] text-neutral-400 uppercase tracking-wider font-heading">
                  Annual Symposia
                </span>
              </div>
              <div>
                <span className="font-serif text-2xl sm:text-3xl font-bold text-white block">
                  164<span className="text-[#e6ca98]">+</span>
                </span>
                <span className="text-[11px] text-neutral-400 uppercase tracking-wider font-heading">
                  Monographs
                </span>
              </div>
              <div>
                <span className="font-serif text-2xl sm:text-3xl font-bold text-white block">
                  50<span className="text-[#e6ca98]">+</span>
                </span>
                <span className="text-[11px] text-neutral-400 uppercase tracking-wider font-heading">
                  Ph.D. Fellowships
                </span>
              </div>
              <div>
                <span className="font-serif text-2xl sm:text-3xl font-bold text-white block">
                  25<span className="text-[#e6ca98]">+</span>
                </span>
                <span className="text-[11px] text-neutral-400 uppercase tracking-wider font-heading">
                  Years of Journal
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Modern Glass Information Panel */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="backdrop-blur-xl bg-white/[0.06] rounded-[20px] border border-white/[0.14] shadow-2xl p-6 sm:p-7 space-y-5 text-left">
              
              {/* Archival Photo Banner */}
              <div className="relative h-44 rounded-2xl overflow-hidden border border-white/10 bg-neutral-900 group">
                <img
                  src="https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&w=900&q=85"
                  alt="Academy Central Archives and Library"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                
                <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between text-xs text-white">
                  <span className="backdrop-blur-md bg-black/60 px-2.5 py-1 rounded-full font-bold font-heading text-[#e6ca98] border border-[#a0876e]/30 text-[11px]">
                    Central Research Vaults
                  </span>
                  <span className="font-medium text-neutral-300 text-[11px] font-sans">
                    Karachi Headquarters
                  </span>
                </div>
              </div>

              {/* Scope & Numbers */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs border-b border-white/10 pb-2">
                  <span className="font-bold uppercase tracking-wider font-heading text-[#e6ca98]">
                    Academic Scope &amp; Registry
                  </span>
                  <span className="text-[11px] text-neutral-400 font-mono">Societies Act XXI</span>
                </div>

                <div className="space-y-2.5 text-xs text-neutral-300">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#288a61] shrink-0 mt-0.5" />
                    <span><strong>45 Concluded Assemblies:</strong> Annual symposia organized uninterrupted since 1981.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#288a61] shrink-0 mt-0.5" />
                    <span><strong>Mahnama Ma'arif-e-Raza:</strong> Peer-reviewed monthly journal published for 25+ years.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#288a61] shrink-0 mt-0.5" />
                    <span><strong>Over 50 Doctoral Dissertations:</strong> International Ph.D. and M.Phil academic prizes awarded.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#288a61] shrink-0 mt-0.5" />
                    <span><strong>164+ Cataloged Monographs:</strong> Available to universities and research institutions globally.</span>
                  </div>
                </div>
              </div>

              {/* Glass Card Footer Action */}
              <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                <button
                  onClick={onExploreHistory}
                  className="text-xs font-semibold text-[#e6ca98] hover:text-white transition-colors cursor-pointer flex items-center gap-1 group/btn"
                >
                  <span>45-Year Scholarly Retrospective</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
                <span className="text-[11px] font-medium text-neutral-400 bg-white/5 border border-white/10 px-2.5 py-0.5 rounded-full font-sans">
                  Charitable Trust
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
