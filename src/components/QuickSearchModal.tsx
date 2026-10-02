import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  X, 
  BookOpen, 
  Calendar, 
  Users, 
  ArrowRight, 
  ExternalLink,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { 
  FEATURED_BOOKS, 
  CONFERENCE_CHRONICLE, 
  LEADERSHIP_MEMBERS,
  PublishedWork,
  ConferenceArchiveItem,
  ScholarLeader 
} from '../data/organizationData.ts';

interface QuickSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectBook: (book: PublishedWork) => void;
  onSelectConference: (conf: ConferenceArchiveItem) => void;
  onNavigate: (tab: string) => void;
}

export const QuickSearchModal: React.FC<QuickSearchModalProps> = ({
  isOpen,
  onClose,
  onSelectBook,
  onSelectConference,
  onNavigate,
}) => {
  const [query, setQuery] = useState('');
  const [filterType, setFilterType] = useState<'all' | 'books' | 'conferences' | 'scholars'>('all');

  // Filtered Results
  const filteredBooks = useMemo(() => {
    if (!query.trim()) return FEATURED_BOOKS.slice(0, 4);
    const q = query.toLowerCase();
    return FEATURED_BOOKS.filter(
      (b) =>
        b.titleEnglish.toLowerCase().includes(q) ||
        b.titleUrdu.toLowerCase().includes(q) ||
        b.author.toLowerCase().includes(q) ||
        b.category.toLowerCase().includes(q) ||
        b.description.toLowerCase().includes(q)
    ).slice(0, 5);
  }, [query]);

  const filteredConferences = useMemo(() => {
    if (!query.trim()) return CONFERENCE_CHRONICLE.slice(0, 3);
    const q = query.toLowerCase();
    return CONFERENCE_CHRONICLE.filter(
      (c) =>
        (c.theme && c.theme.toLowerCase().includes(q)) ||
        c.city.toLowerCase().includes(q) ||
        c.venue.toLowerCase().includes(q) ||
        c.significance.toLowerCase().includes(q) ||
        c.year.toString().includes(q) ||
        c.number.toString().includes(q)
    ).slice(0, 4);
  }, [query]);

  const filteredScholars = useMemo(() => {
    if (!query.trim()) return LEADERSHIP_MEMBERS;
    const q = query.toLowerCase();
    return LEADERSHIP_MEMBERS.filter(
      (s) =>
        s.name.toLowerCase().includes(q) ||
        s.role.toLowerCase().includes(q) ||
        s.summary.toLowerCase().includes(q) ||
        (s.designationHighlight && s.designationHighlight.toLowerCase().includes(q))
    );
  }, [query]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Modal Dialog */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: -10 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="relative w-full max-w-2xl bg-white rounded-[20px] shadow-2xl border border-neutral-200/80 overflow-hidden z-10 text-left"
        >
          {/* Search Header Input */}
          <div className="flex items-center gap-3 px-5 py-4 border-b border-neutral-200/80 bg-[#faf8f5]/60">
            <Search className="w-5 h-5 text-[#a0876e] shrink-0" />
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search 164+ treatises, 45 symposia, scholars, or topics..."
              className="w-full bg-transparent text-sm sm:text-base text-neutral-900 placeholder:text-neutral-400 focus:outline-hidden font-sans"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="p-1 rounded-full text-neutral-400 hover:text-neutral-600 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            )}
            <button
              onClick={onClose}
              className="px-2 py-1 rounded text-xs font-mono text-neutral-400 hover:text-neutral-700 bg-neutral-100 hover:bg-neutral-200 cursor-pointer"
            >
              ESC
            </button>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 px-5 py-2.5 border-b border-neutral-100 bg-white text-xs">
            <span className="text-neutral-400 font-medium">Filter:</span>
            {(['all', 'books', 'conferences', 'scholars'] as const).map((t) => (
              <button
                key={t}
                onClick={() => setFilterType(t)}
                className={`px-3 py-1 rounded-full capitalize font-medium transition-colors cursor-pointer ${
                  filterType === t
                    ? 'bg-[#288a61] text-white shadow-2xs'
                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                }`}
              >
                {t === 'all' ? 'All Records' : t}
              </button>
            ))}
          </div>

          {/* Results List */}
          <div className="max-h-[60vh] overflow-y-auto p-5 space-y-6">
            {/* Books Section */}
            {(filterType === 'all' || filterType === 'books') && filteredBooks.length > 0 && (
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-xs font-semibold text-[#a0876e] uppercase tracking-wider font-heading">
                  <span className="flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Publications & Monograph Catalog</span>
                  </span>
                  <span className="text-[11px] text-neutral-400 font-sans font-normal lowercase first-letter:uppercase">
                    {filteredBooks.length} results
                  </span>
                </div>
                <div className="space-y-1.5">
                  {filteredBooks.map((book) => (
                    <button
                      key={book.id}
                      onClick={() => {
                        onSelectBook(book);
                        onClose();
                      }}
                      className="w-full p-3 rounded-xl hover:bg-[#faf8f5] border border-transparent hover:border-neutral-200/80 transition-all flex items-start justify-between gap-3 text-left group cursor-pointer"
                    >
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold text-neutral-900 group-hover:text-[#288a61] transition-colors font-serif">
                            {book.titleEnglish}
                          </span>
                          <span className="text-[11px] text-neutral-500 font-sans">
                            ({book.year})
                          </span>
                        </div>
                        <p className="text-xs text-neutral-500 line-clamp-1 font-sans">
                          {book.titleUrdu} · {book.category}
                        </p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-neutral-400 group-hover:text-[#288a61] group-hover:translate-x-0.5 transition-all shrink-0 mt-1" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Conferences Section */}
            {(filterType === 'all' || filterType === 'conferences') && filteredConferences.length > 0 && (
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-xs font-semibold text-[#a0876e] uppercase tracking-wider font-heading">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Annual International Symposia</span>
                  </span>
                  <span className="text-[11px] text-neutral-400 font-sans font-normal lowercase first-letter:uppercase">
                    {filteredConferences.length} results
                  </span>
                </div>
                <div className="space-y-1.5">
                  {filteredConferences.map((conf) => (
                    <button
                      key={conf.id || `${conf.number}-${conf.year}`}
                      onClick={() => {
                        onSelectConference(conf);
                        onClose();
                      }}
                      className="w-full p-3 rounded-xl hover:bg-[#faf8f5] border border-transparent hover:border-neutral-200/80 transition-all flex items-start justify-between gap-3 text-left group cursor-pointer"
                    >
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded bg-neutral-100 text-[10px] font-bold uppercase tracking-wider text-neutral-700 font-heading">
                            {conf.number}th Assembly
                          </span>
                          <span className="text-sm font-semibold text-neutral-900 group-hover:text-[#288a61] transition-colors font-serif">
                            {conf.theme || `Conference ${conf.year}`}
                          </span>
                        </div>
                        <p className="text-xs text-neutral-500 line-clamp-1 font-sans">
                          {conf.year} · {conf.venue} · {conf.city}
                        </p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-neutral-400 group-hover:text-[#288a61] group-hover:translate-x-0.5 transition-all shrink-0 mt-1" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Scholars Section */}
            {(filterType === 'all' || filterType === 'scholars') && filteredScholars.length > 0 && (
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-xs font-semibold text-[#a0876e] uppercase tracking-wider font-heading">
                  <span className="flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5" />
                    <span>Executive Council & Scholars</span>
                  </span>
                  <span className="text-[11px] text-neutral-400 font-sans font-normal lowercase first-letter:uppercase">
                    {filteredScholars.length} results
                  </span>
                </div>
                <div className="space-y-1.5">
                  {filteredScholars.map((scholar) => (
                    <button
                      key={scholar.id}
                      onClick={() => {
                        onNavigate('about');
                        onClose();
                      }}
                      className="w-full p-3 rounded-xl hover:bg-[#faf8f5] border border-transparent hover:border-neutral-200/80 transition-all flex items-start justify-between gap-3 text-left group cursor-pointer"
                    >
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold text-neutral-900 group-hover:text-[#288a61] transition-colors font-serif">
                            {scholar.name}
                          </span>
                          <span className="text-xs text-[#a0876e] font-medium font-heading">
                            {scholar.role}
                          </span>
                        </div>
                        <p className="text-xs text-neutral-500 line-clamp-1 font-sans">
                          {scholar.designationHighlight || scholar.summary}
                        </p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-neutral-400 group-hover:text-[#288a61] group-hover:translate-x-0.5 transition-all shrink-0 mt-1" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {filteredBooks.length === 0 && filteredConferences.length === 0 && filteredScholars.length === 0 && (
              <div className="text-center py-10 space-y-2">
                <Search className="w-8 h-8 text-neutral-300 mx-auto" />
                <p className="text-sm font-semibold text-neutral-800">No archival records matching "{query}"</p>
                <p className="text-xs text-neutral-500">Try searching for "Kanzul Iman", "Karachi", "Fatawa", or "1981"</p>
              </div>
            )}
          </div>

          {/* Quick Footer Action */}
          <div className="px-5 py-3 border-t border-neutral-100 bg-[#faf8f5] flex items-center justify-between text-xs text-neutral-500">
            <span className="flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-[#a0876e]" />
              <span>Full Repository Catalog: 164+ Treatises & 45 Symposia</span>
            </span>
            <button
              onClick={() => {
                onNavigate('publications');
                onClose();
              }}
              className="text-[#288a61] hover:underline font-semibold flex items-center gap-1 cursor-pointer"
            >
              <span>Explore All Publications</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
