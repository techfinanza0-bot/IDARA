import React, { useState } from 'react';
import { BookOpen, Award, FileText, Search, Download, ExternalLink, Filter, GraduationCap, CheckCircle2, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FEATURED_BOOKS, DOCTORAL_SCHOLARS_REGISTRY, PublishedWork } from '../data/organizationData.ts';

interface PublicationsSectionProps {
  onSelectBook: (book: PublishedWork) => void;
  onOpenRegister: () => void;
}

export const PublicationsSection: React.FC<PublicationsSectionProps> = ({
  onSelectBook,
  onOpenRegister
}) => {
  const [activeSubTab, setActiveSubTab] = useState<'journals' | 'books' | 'dissertations'>('journals');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [bookSearch, setBookSearch] = useState('');

  const categories = [
    'All',
    'Economics & Society',
    'Quranic Studies',
    'Modern Sciences & Astronomy',
    'Jurisprudence & Fatawa',
    'Biography & History',
    'Poetry & Hadaiq'
  ];

  const filteredBooks = FEATURED_BOOKS.filter((book) => {
    const matchesCat = selectedCategory === 'All' || book.category === selectedCategory;
    const matchesSearch = 
      book.titleEnglish.toLowerCase().includes(bookSearch.toLowerCase()) ||
      book.titleUrdu.includes(bookSearch) ||
      book.author.toLowerCase().includes(bookSearch.toLowerCase()) ||
      book.description.toLowerCase().includes(bookSearch.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="bg-[#fafbf9] text-stone-900 min-h-screen pb-24 text-left">
      
      {/* Corporate Page Banner with Imagery */}
      <section className="bg-[#161816] text-white relative overflow-hidden py-12 px-4 sm:px-6 border-b border-[#2d332e]">
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1800&q=80"
            alt="Publications Repository"
            className="w-full h-full object-cover"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#191919] via-[#191919]/95 to-[#242424]/90" />

        <div className="max-w-7xl mx-auto relative z-10 space-y-3">
          <span className="text-[11px] font-bold text-[#a0876e] uppercase tracking-wider font-heading block">
            Research & University Publishing Division
          </span>

          <h1 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Publications & Doctoral Repository
          </h1>
          <p className="text-stone-300 text-base sm:text-lg max-w-3xl font-sans">
            Access monthly journals, annual peer-reviewed conference compendiums, 164+ published monographs, and international doctoral dissertations.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-10 space-y-10">
        
        {/* Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 bg-white p-2 rounded border border-[#eaeaec] shadow-xs">
          <button
            onClick={() => setActiveSubTab('journals')}
            className={`px-4 py-2.5 rounded text-xs font-bold transition-all cursor-pointer uppercase tracking-wider font-heading ${
              activeSubTab === 'journals'
                ? 'bg-[#191919] text-[#a0876e] shadow-2xs'
                : 'text-[#5c544d] hover:text-[#020404] hover:bg-[#f4f4f5]'
            }`}
          >
            Monthly & Annual Journals (Ma'arif-e-Raza)
          </button>
          <button
            onClick={() => setActiveSubTab('books')}
            className={`px-4 py-2.5 rounded text-xs font-bold transition-all cursor-pointer uppercase tracking-wider font-heading ${
              activeSubTab === 'books'
                ? 'bg-[#191919] text-[#a0876e] shadow-2xs'
                : 'text-[#5c544d] hover:text-[#020404] hover:bg-[#f4f4f5]'
            }`}
          >
            Books Catalog (164+ Titles)
          </button>
          <button
            onClick={() => setActiveSubTab('dissertations')}
            className={`px-4 py-2.5 rounded text-xs font-bold transition-all cursor-pointer uppercase tracking-wider font-heading ${
              activeSubTab === 'dissertations'
                ? 'bg-[#191919] text-[#a0876e] shadow-2xs'
                : 'text-[#5c544d] hover:text-[#020404] hover:bg-[#f4f4f5]'
            }`}
          >
            Doctoral Dissertations & Gold Medals
          </button>
        </div>

        {/* TAB 1: JOURNALS */}
        {activeSubTab === 'journals' && (
          <div className="space-y-10 animate-in fade-in duration-150">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Monthly Ma'arif-e-Raza */}
              <div className="bg-white border border-[#eaeaec] rounded p-6 sm:p-8 space-y-6 shadow-2xs">
                <div className="flex items-center justify-between border-b border-[#eaeaec] pb-4">
                  <div>
                    <span className="text-xs font-bold text-[#a0876e] uppercase tracking-wider font-heading">
                      Monthly Periodical (Continuous since 2000)
                    </span>
                    <h2 className="font-heading text-2xl font-bold text-[#020404] mt-1">
                      Mahnama Ma'arif-e-Raza
                    </h2>
                  </div>
                  <FileText className="w-8 h-8 text-[#a0876e]" />
                </div>

                <div className="relative h-44 rounded overflow-hidden bg-[#191919]">
                  <img
                    src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80"
                    alt="Monthly Ma'arif-e-Raza"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#191919] via-[#191919]/40 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs">
                    <span className="bg-[#191919] px-2 py-0.5 rounded font-bold font-heading text-[#a0876e] border border-[#a0876e]/40">
                      250+ Editions Published
                    </span>
                    <span className="font-mono">12 Issues / Year</span>
                  </div>
                </div>

                <p className="text-xs text-[#5c544d] leading-relaxed font-sans">
                  Published monthly without interruption for 25+ years, featuring peer-reviewed research in jurisprudence, Islamic economics, and rhetoric.
                </p>

                <div className="p-4 bg-[#faf8f5] rounded border border-[#eaeaec] space-y-2 text-xs">
                  <div className="flex justify-between text-[#5c544d]">
                    <span>Chief Editor:</span>
                    <span className="font-semibold text-[#020404]">Prof. Dr. Majeedullah Qadri</span>
                  </div>
                  <div className="flex justify-between text-[#5c544d]">
                    <span>Circulation:</span>
                    <span className="font-semibold text-[#020404]">Pakistan, UK, USA, Middle East, India</span>
                  </div>
                  <div className="flex justify-between text-[#5c544d]">
                    <span>Languages:</span>
                    <span className="font-semibold text-[#020404]">Urdu, Arabic, English summaries</span>
                  </div>
                </div>

                <div className="pt-2 flex items-center gap-3">
                  <button
                    onClick={onOpenRegister}
                    className="px-5 py-2.5 text-xs font-bold text-white bg-[#288a61] hover:bg-[#1f6f4e] rounded transition-colors cursor-pointer uppercase tracking-wider font-heading"
                  >
                    Subscribe / Request Copies
                  </button>
                  <span className="text-[11px] text-[#5c544d] font-sans">
                    Print and digital archive available
                  </span>
                </div>
              </div>

              {/* Annual Salnama Ma'arif-e-Raza */}
              <div className="bg-white border border-[#eaeaec] rounded p-6 sm:p-8 space-y-6 shadow-2xs">
                <div className="flex items-center justify-between border-b border-[#eaeaec] pb-4">
                  <div>
                    <span className="text-xs font-bold text-[#a0876e] uppercase tracking-wider font-heading">
                      Annual Academic Compendium (Since 1981)
                    </span>
                    <h2 className="font-heading text-2xl font-bold text-[#020404] mt-1">
                      Salnama Ma'arif-e-Raza
                    </h2>
                  </div>
                  <BookOpen className="w-8 h-8 text-[#a0876e]" />
                </div>

                <div className="relative h-44 rounded overflow-hidden bg-[#191919]">
                  <img
                    src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80"
                    alt="Salnama Ma'arif-e-Raza"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#191919] via-[#191919]/40 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs">
                    <span className="bg-[#191919] text-[#a0876e] border border-[#a0876e]/40 px-2 py-0.5 rounded font-bold font-heading">
                      Tri-Lingual Edition
                    </span>
                    <span className="font-mono">300–600 Pages per Volume</span>
                  </div>
                </div>

                <p className="text-xs text-[#5c544d] leading-relaxed font-sans">
                  Published annually since 1981 alongside each international conference, featuring Urdu, English, and Arabic treatises cataloged globally.
                </p>

                <div className="p-4 bg-[#faf8f5] rounded border border-[#eaeaec] space-y-2 text-xs">
                  <div className="flex justify-between text-[#5c544d]">
                    <span>First Volume:</span>
                    <span className="font-semibold text-[#020404]">1981 (1401 AH)</span>
                  </div>
                  <div className="flex justify-between text-[#5c544d]">
                    <span>Linguistic Sections:</span>
                    <span className="font-semibold text-[#020404]">English, Arabic, and Urdu</span>
                  </div>
                  <div className="flex justify-between text-[#5c544d]">
                    <span>Academic Scope:</span>
                    <span className="font-semibold text-[#020404]">Peer-Reviewed Conference Proceedings</span>
                  </div>
                </div>

                <div className="pt-2 flex items-center gap-3">
                  <button
                    onClick={onOpenRegister}
                    className="px-5 py-2.5 text-xs font-bold text-[#3f4245] bg-[#f4f4f5] hover:bg-[#eaeaec] rounded transition-colors cursor-pointer uppercase tracking-wider font-heading"
                  >
                    Request Archival Volume
                  </button>
                  <span className="text-[11px] text-[#5c544d] font-sans">
                    Indexed in global university catalogs
                  </span>
                </div>
              </div>

            </div>

            {/* University Endowments Cards */}
            <div className="bg-white rounded p-6 sm:p-8 border border-[#eaeaec] space-y-4 shadow-2xs">
              <span className="text-xs font-bold text-[#a0876e] uppercase tracking-widest font-heading">
                Institutional Endowments
              </span>
              <h3 className="font-heading text-xl font-bold text-[#020404]">
                Official Endowments to Constitutional & Supreme Judicial Libraries
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2 text-xs">
                <div className="bg-[#faf8f5] p-4 rounded border border-[#eaeaec] space-y-1">
                  <span className="font-bold text-[#020404] block font-heading">Sindh High Court</span>
                  <span className="text-[#5c544d] block">Endowed in 1988 with 250+ juristic volumes</span>
                </div>
                <div className="bg-[#faf8f5] p-4 rounded border border-[#eaeaec] space-y-1">
                  <span className="font-bold text-[#020404] block font-heading">National Assembly of Pakistan</span>
                  <span className="text-[#5c544d] block">Presented in 1991 (100+ titles)</span>
                </div>
                <div className="bg-[#faf8f5] p-4 rounded border border-[#eaeaec] space-y-1">
                  <span className="font-bold text-[#020404] block font-heading">Council of Islamic Ideology</span>
                  <span className="text-[#5c544d] block">250 reference treatises presented in 1993</span>
                </div>
                <div className="bg-[#faf8f5] p-4 rounded border border-[#eaeaec] space-y-1">
                  <span className="font-bold text-[#020404] block font-heading">Al-Azhar University, Cairo</span>
                  <span className="text-[#5c544d] block">350+ Arabic books gifted to central library in 1999</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: BOOKS CATALOG */}
        {activeSubTab === 'books' && (
          <div className="space-y-8 animate-in fade-in duration-150">
            {/* Filter and Search Bar */}
            <div className="bg-white p-5 rounded border border-[#eaeaec] shadow-2xs space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="relative w-full sm:w-80">
                  <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-3" />
                  <input
                    type="text"
                    placeholder="Search book titles, authors, translators..."
                    value={bookSearch}
                    onChange={(e) => setBookSearch(e.target.value)}
                    className="w-full pl-10 pr-3 py-2.5 text-xs bg-[#faf8f5] border border-[#eaeaec] rounded focus:outline-hidden focus:border-[#a0876e]"
                  />
                </div>
                <div className="text-xs font-semibold text-[#5c544d]">
                  Showing <span className="text-[#a0876e] font-bold">{filteredBooks.length}</span> Published Titles
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-[#eaeaec]">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 rounded text-xs font-semibold transition-all cursor-pointer ${
                      selectedCategory === cat
                        ? 'bg-[#191919] text-[#a0876e] shadow-2xs'
                        : 'bg-[#f4f4f5] text-[#3f4245] hover:bg-[#eaeaec]'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Books Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredBooks.map((book) => (
                <div
                  key={book.id}
                  className="bg-white rounded border border-[#eaeaec] p-6 space-y-4 hover:border-[#a0876e] hover:shadow-2xs transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold text-[#a0876e] uppercase tracking-wider font-heading bg-[#faf8f5] px-2.5 py-0.5 rounded border border-[#eaeaec]">
                        {book.category}
                      </span>
                      <span className="text-[11px] font-mono text-[#5c544d]">
                        {book.year}
                      </span>
                    </div>

                    <h3 className="font-heading text-lg font-bold text-[#020404] leading-snug">
                      {book.titleEnglish}
                    </h3>

                    <p className="text-sm text-[#020404] font-bold leading-relaxed">
                      {book.titleUrdu}
                    </p>

                    <div className="text-xs text-[#5c544d] space-y-0.5">
                      <div>Author: <span className="text-[#020404] font-medium">{book.author}</span></div>
                      {book.translatorOrEditor && (
                        <div>Editor/Trans: <span className="text-[#3f4245]">{book.translatorOrEditor}</span></div>
                      )}
                    </div>

                    <p className="text-xs text-[#5c544d] leading-relaxed line-clamp-3 font-sans">
                      {book.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#eaeaec] flex items-center justify-between">
                    <button
                      onClick={() => onSelectBook(book)}
                      className="text-xs font-bold text-[#3f4245] hover:text-[#a0876e] transition-colors cursor-pointer font-heading uppercase tracking-wider"
                    >
                      Read Abstract & Index
                    </button>
                    <span className="text-[11px] text-[#5c544d] font-sans">
                      {book.language}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: DOCTORAL SCHOLARS */}
        {activeSubTab === 'dissertations' && (
          <div className="space-y-10 animate-in fade-in duration-150">
            <div className="bg-[#191919] text-white rounded border border-[#333333] p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-3">
                <Award className="w-8 h-8 text-[#a0876e] shrink-0" />
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#a0876e] font-heading block">
                    Academic Honours & Medals
                  </span>
                  <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white">
                    Imam Ahmad Raza Gold & Silver Medal Scheme
                  </h2>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed max-w-3xl font-sans">
                Instituted in 1986, the Idara awards Gold Medals for Ph.D. dissertations and Silver Medals for M.Phil theses, honoring over 50 doctoral scholars across worldwide universities.
              </p>
            </div>

            <div className="bg-white rounded border border-[#eaeaec] overflow-x-auto shadow-2xs">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="bg-[#faf8f5] border-b border-[#eaeaec] text-[#5c544d] font-heading uppercase tracking-wider text-[11px]">
                    <th className="py-3 px-4 font-bold">Doctoral Scholar</th>
                    <th className="py-3 px-4 font-bold">Award</th>
                    <th className="py-3 px-4 font-bold">Dissertation Topic</th>
                    <th className="py-3 px-4 font-bold">University & Country</th>
                    <th className="py-3 px-4 font-bold">Year</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#eaeaec]">
                  {DOCTORAL_SCHOLARS_REGISTRY.map((scholar) => (
                    <tr key={scholar.id} className="hover:bg-[#faf8f5] transition-colors">
                      <td className="py-3.5 px-4 font-heading font-bold text-[#020404] whitespace-nowrap">
                        {scholar.scholarName}
                      </td>
                      <td className="py-3.5 px-4 whitespace-nowrap">
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#a0876e] bg-[#faf8f5] px-2.5 py-0.5 rounded border border-[#eaeaec]">
                          <Award className="w-3 h-3 text-[#a0876e]" />
                          {scholar.award}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-[#3f4245] font-medium max-w-sm">
                        {scholar.topic}
                      </td>
                      <td className="py-3.5 px-4 text-[#5c544d] whitespace-nowrap">
                        <div className="font-semibold text-[#020404]">{scholar.university}</div>
                        <div className="text-[11px] text-stone-400">{scholar.country}</div>
                      </td>
                      <td className="py-3.5 px-4 text-[#5c544d] tabular-nums font-mono whitespace-nowrap">
                        {scholar.year}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
