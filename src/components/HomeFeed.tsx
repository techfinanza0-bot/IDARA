import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Calendar, 
  MapPin, 
  ArrowRight, 
  Users, 
  BookOpen, 
  Award, 
  ChevronRight, 
  FileText, 
  Eye, 
  ArrowUpRight,
  Sparkles,
  Download,
  CheckCircle2,
  ExternalLink,
  GraduationCap,
  Landmark,
  Layers,
  Scroll,
  Globe2,
  Search,
  Quote,
  Clock,
  ShieldCheck,
  Send,
  Building
} from 'lucide-react';
import { Hero } from './Hero.tsx';
import { 
  CONFERENCE_CHRONICLE, 
  CONFERENCE_GALLERY_IMAGES, 
  FEATURED_BOOKS, 
  LEADERSHIP_MEMBERS, 
  DOCTORAL_SCHOLARS_REGISTRY,
  OFFICE_LOCATIONS,
  ConferenceArchiveItem, 
  PublishedWork 
} from '../data/organizationData.ts';

interface HomeFeedProps {
  onNavigate: (tab: string) => void;
  onOpenRegister: () => void;
  onSelectConference: (conf: ConferenceArchiveItem) => void;
  onSelectBook: (book: PublishedWork) => void;
  onOpenSearch?: () => void;
}

export const HomeFeed: React.FC<HomeFeedProps> = ({
  onNavigate,
  onOpenRegister,
  onSelectConference,
  onSelectBook,
  onOpenSearch,
}) => {
  // Category filter state for Featured Publications
  const [selectedBookCategory, setSelectedBookCategory] = useState<string>('All');
  const [activeManuscriptIndex, setActiveManuscriptIndex] = useState<number>(0);
  const [newsletterEmail, setNewsletterEmail] = useState<string>('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState<boolean>(false);

  // Recent conferences for showcase
  const recentConferences = CONFERENCE_CHRONICLE.slice(0, 3);

  // Filter books based on category
  const categories = ['All', 'Quranic Studies', 'Modern Sciences & Astronomy', 'Jurisprudence & Fatawa', 'Economics & Society'];
  const filteredBooks = selectedBookCategory === 'All'
    ? FEATURED_BOOKS.slice(0, 6)
    : FEATURED_BOOKS.filter(b => b.category === selectedBookCategory).slice(0, 6);

  // Rare manuscripts dataset
  const rareManuscripts = [
    {
      id: 'ms-01',
      title: 'Fawz-e-Mubeen dar Radd-e-Harkat-e-Zameen',
      arabicTitle: 'الفوز المبين في رد حركة الأرض',
      year: '1338 AH / 1919 CE',
      subject: 'Astronomy, Mechanics & Gravitation',
      folios: '124 Folios (Illustrated with Planetary Geometric Plates)',
      language: 'Urdu & Arabic Mathematical Formulations',
      description: 'Monumental astronomical and kinematic treatise presenting 105 distinct proofs from physics, Euclidean mathematics, and celestial geometry examining planetary motion.',
      imageUrl: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1000&q=80',
      badge: 'Physical Sciences'
    },
    {
      id: 'ms-02',
      title: 'Kanzul Iman fi Tarjamat al-Quran',
      arabicTitle: 'كنز الإيمان في ترجمة القرآن',
      year: '1330 AH / 1911 CE',
      subject: 'Quranic Hermeneutics & Semantics',
      folios: '890 Folios (Holographic Codices in Urdu)',
      language: 'Urdu Translation with Classical Arabic Parallels',
      description: 'Seminal Urdu translation of the Holy Quran noted for theological fidelity, nuanced prepositional accuracy, and reverent prophetic hermeneutics studied across 15+ doctoral dissertations.',
      imageUrl: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=1000&q=80',
      badge: 'Tafsir & Exegesis'
    },
    {
      id: 'ms-03',
      title: 'Al-Dawlat al-Makkiyyah bi al-Maddat al-Ghaybiyyah',
      arabicTitle: 'الدولة المكية بالمادة الغيبية',
      year: '1323 AH / 1905 CE',
      subject: 'Kalam, Prophetic Knowledge & Epistemology',
      folios: '380 Folios (Penned in Mecca al-Mukarramah)',
      language: 'Classical Scholastic Arabic',
      description: 'Authored in the holy sanctuary of Mecca within 8 hours while suffering fever, without reference libraries. Endorsed by 45+ grand Haramayn scholars of the era.',
      imageUrl: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1000&q=80',
      badge: 'Classical Kalam'
    },
    {
      id: 'ms-04',
      title: 'Al-Kashf wa al-Tibyan an Ahkam al-Luhum fi al-Yaban',
      arabicTitle: 'الكشف والتبيان عن أحكام اللحوم في اليابان',
      year: '1339 AH / 1920 CE',
      subject: 'International Comparative Jurisprudence',
      folios: '96 Folios (Diplomatic Rescript)',
      language: 'Arabic & Urdu Rescripts',
      description: 'Pioneering global fatwa addressing halal dietary slaughter and mercantile import rules for early Muslim residents of Tokyo and Kobe, Japan.',
      imageUrl: 'https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&w=1000&q=80',
      badge: 'Global Jurisprudence'
    }
  ];

  // 45-Year Historical Milestones
  const timelineMilestones = [
    {
      year: '1980',
      hijri: '1400 AH',
      title: 'Institutional Foundation in Karachi',
      detail: 'Established under the leadership of Prof. Dr. Majeedullah Qadri, Sahibzada Pir Shabbir Jamali, and patronage of Allama Syed Riyasat Ali Qadri to institutionalize academic research.',
    },
    {
      year: '1981',
      hijri: '1401 AH',
      title: '1st National Convention & Salnama Launch',
      detail: 'Inaugural assembly convened at Theosophical Hall Karachi; launch of the annual trilingual research journal Salnama Ma\'arif-e-Raza.',
    },
    {
      year: '1986',
      hijri: '1407 AH',
      title: 'Societies Act XXI Charter & Gold Medal Scheme',
      detail: 'Formal charter ratification under Societies Registration Act XXI of 1860; inauguration of merit Gold Medals for university Ph.D. scholars.',
    },
    {
      year: '1993',
      hijri: '1413 AH',
      title: 'First Ph.D. in Pakistan on Raza Studies',
      detail: 'Dr. Majeedullah Qadri awarded Pakistan’s first Ph.D. on Imam Ahmad Raza by University of Karachi for research on comparative Urdu Quranic translations.',
    },
    {
      year: '2005',
      hijri: '1426 AH',
      title: 'Silver Jubilee 25th International Conference',
      detail: 'Quarter-century celebrations with 1,500 delegates, presenting 35 new critical monographs and establishing the Central Research Archives.',
    },
    {
      year: '2019',
      hijri: '1440 AH',
      title: 'Global Centenary Commemoration (1340–1440 AH)',
      detail: 'Historic centenary plenary at Pearl Continental Karachi with international deans, celebrating 100 years of Imam Ahmad Raza’s academic legacy.',
    },
    {
      year: '2025',
      hijri: '1446 AH',
      title: '45th Diamond Assembly & Open Digital Repository',
      detail: 'Convening the 45th Annual International Conference and inaugurating full digital open-access preservation of 164+ treatises and rare manuscripts.',
    },
  ];

  // Latest News & Scholarly Bulletins
  const scholarlyNews = [
    {
      id: 'news-1',
      date: 'May 2026',
      category: 'Call for Papers',
      title: 'Call for Research Papers: 46th Annual International Conference',
      excerpt: 'Submissions invited from doctoral scholars and faculty on "Islamic FinTech, Algorithmic Risk, and Classical Hanafi Commercial Law".',
      readTime: '3 min read'
    },
    {
      id: 'news-2',
      date: 'April 2026',
      category: 'Academic Grants',
      title: '2026 Doctoral Fellowship & Gold Medal Nominations Open',
      excerpt: 'The Academic Council announces research stipends and publication grants for M.Phil and Ph.D. dissertations registered at recognized universities.',
      readTime: '2 min read'
    },
    {
      id: 'news-3',
      date: 'March 2026',
      category: 'Manuscripts Archive',
      title: 'Digitization of 40 Original Arabic Autograph Epistles Completed',
      excerpt: 'The Central Secretariat Archives has completed ultra-high-resolution 1200 DPI archival scans of rare juridical correspondence (1310–1335 AH).',
      readTime: '4 min read'
    }
  ];

  // Academic Testimonials
  const academicTestimonials = [
    {
      id: 'test-1',
      quote: 'Idara-e-Tahqeeqat-e-Imam Ahmed Raza has rendered an extraordinary service to higher education in Pakistan and abroad by transforming subcontinental Islamic studies into a rigorous doctoral discipline.',
      author: 'Prof. Dr. Muhammad Masud Ahmed',
      designation: 'Former Principal, Govt. Degree College Shikarpur; Premier Raza Studies Authority',
      university: 'Ph.D. & D.Litt., University of Sindh'
    },
    {
      id: 'test-2',
      quote: 'The academic rigor, methodological documentation, and continuous organization of 45 annual international symposia makes this academy a premier institutional reference point for Islamic heritage.',
      author: 'Dr. Hazem Muhammad Ahmad Al-Mahfouz',
      designation: 'Professor of Comparative Jurisprudence',
      university: 'Al-Azhar University, Cairo, Egypt'
    },
    {
      id: 'test-3',
      quote: 'Imam Ahmad Raza Khan was a multifaceted polymath of staggering depth. The archival and publication work conducted by ITIAR is an invaluable repository for modern historians and orientalists.',
      author: 'Dr. Usha Sanyal',
      designation: 'Author of "In the Path of the Prophet: Ahmad Raza Khan Barelwi"',
      university: 'Columbia University, New York, USA'
    }
  ];

  // Research Partners / University Affiliations
  const researchPartners = [
    { name: 'University of Karachi', role: 'Faculty of Islamic Studies & Geology' },
    { name: 'University of the Punjab', role: 'Department of Urdu & Philosophy' },
    { name: 'Al-Azhar University, Cairo', role: 'Faculty of Usul al-Din' },
    { name: 'Jamia Nizamia, Hyderabad', role: 'Hanafi Jurisprudential Council' },
    { name: 'Federal Urdu University (FUUAST)', role: 'Department of Islamic Studies' },
    { name: 'Sheikh Zayed Islamic Centre', role: 'Postgraduate Research Archives' },
  ];

  return (
    <div className="space-y-20 lg:space-y-28 pb-12 font-sans selection:bg-[#288a61] selection:text-white">
      
      {/* 1. HERO SECTION */}
      <Hero
        onExploreConference={() => onNavigate('conferences')}
        onExploreHistory={() => onNavigate('about')}
        onExplorePublications={() => onNavigate('publications')}
        onOpenRegister={onOpenRegister}
        onOpenSearch={onOpenSearch}
      />

      {/* 2. RESEARCH IMPACT STATISTICS (Interactive Institutional Metrics) */}
      <section 
        className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 text-left"
        aria-labelledby="impact-stats-heading"
      >
        <div className="bg-white border border-neutral-200/80 rounded-[20px] p-8 sm:p-10 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.05)]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-neutral-100">
            <div className="space-y-1 max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#a0876e] font-heading block">
                Academic Rigor &amp; Institutional Scope
              </span>
              <h2 id="impact-stats-heading" className="font-serif text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
                Four Decades of Peer-Reviewed Scholarship
              </h2>
              <p className="text-xs sm:text-sm text-neutral-600 font-sans leading-relaxed">
                Registered under the Societies Act XXI of 1860, the academy benchmarks its archives against global academic standards.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#288a61] font-heading uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-[#288a61]" />
              <span>Chartered 1400 AH / 1980 CE</span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 pt-8">
            <div className="space-y-1">
              <div className="font-serif text-3xl sm:text-4xl font-bold text-neutral-900">
                45<span className="text-[#288a61]">+</span>
              </div>
              <p className="text-xs font-bold uppercase tracking-wider text-neutral-800 font-heading">
                Annual Symposia
              </p>
              <p className="text-[11px] text-neutral-500 font-sans">
                Uninterrupted since 1981
              </p>
            </div>

            <div className="space-y-1">
              <div className="font-serif text-3xl sm:text-4xl font-bold text-neutral-900">
                164<span className="text-[#288a61]">+</span>
              </div>
              <p className="text-xs font-bold uppercase tracking-wider text-neutral-800 font-heading">
                Monographs
              </p>
              <p className="text-[11px] text-neutral-500 font-sans">
                Cataloged &amp; published
              </p>
            </div>

            <div className="space-y-1">
              <div className="font-serif text-3xl sm:text-4xl font-bold text-neutral-900">
                250<span className="text-[#288a61]">+</span>
              </div>
              <p className="text-xs font-bold uppercase tracking-wider text-neutral-800 font-heading">
                Journal Issues
              </p>
              <p className="text-[11px] text-neutral-500 font-sans">
                <em>Ma'arif-e-Raza</em> &amp; Salnama
              </p>
            </div>

            <div className="space-y-1">
              <div className="font-serif text-3xl sm:text-4xl font-bold text-neutral-900">
                50<span className="text-[#288a61]">+</span>
              </div>
              <p className="text-xs font-bold uppercase tracking-wider text-neutral-800 font-heading">
                Doctoral Theses
              </p>
              <p className="text-[11px] text-neutral-500 font-sans">
                Ph.D. &amp; M.Phil Gold Medals
              </p>
            </div>

            <div className="space-y-1">
              <div className="font-serif text-3xl sm:text-4xl font-bold text-neutral-900">
                2,500<span className="text-[#288a61]">+</span>
              </div>
              <p className="text-xs font-bold uppercase tracking-wider text-neutral-800 font-heading">
                Manuscript Folios
              </p>
              <p className="text-[11px] text-neutral-500 font-sans">
                Archival vaults in Karachi
              </p>
            </div>

            <div className="space-y-1">
              <div className="font-serif text-3xl sm:text-4xl font-bold text-neutral-900">
                30<span className="text-[#288a61]">+</span>
              </div>
              <p className="text-xs font-bold uppercase tracking-wider text-neutral-800 font-heading">
                University Chairs
              </p>
              <p className="text-[11px] text-neutral-500 font-sans">
                Global academic research
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED PUBLICATIONS & MONOGRAPH CATALOG */}
      <section 
        className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-10"
        aria-labelledby="featured-publications-heading"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-neutral-200/80">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#a0876e] font-heading block">
              Peer-Reviewed Repository
            </span>
            <h2 id="featured-publications-heading" className="font-serif text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight leading-tight">
              Featured Publications &amp; Critical Monographs
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 font-sans leading-relaxed">
              Preserving and editing the encyclopedic output of Imam Ahmad Raza across economics, physics, jurisprudence, and hermeneutics.
            </p>
          </div>

          <button
            onClick={() => onNavigate('publications')}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-800 hover:text-[#288a61] transition-colors cursor-pointer font-heading py-2 self-start md:self-auto shrink-0 group focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#288a61] rounded-full"
          >
            <span>Explore All 164+ Cataloged Works</span>
            <ArrowRight className="w-4 h-4 text-[#288a61] group-hover:translate-x-1.5 transition-transform duration-200" />
          </button>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedBookCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer font-heading ${
                selectedBookCategory === cat
                  ? 'bg-[#288a61] text-white shadow-xs'
                  : 'bg-neutral-100 hover:bg-neutral-200/80 text-neutral-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {filteredBooks.map((book, idx) => (
            <motion.article
              key={book.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-white rounded-[20px] border border-neutral-200/80 p-6 sm:p-7 space-y-4 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.05)] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group focus-within:ring-2 focus-within:ring-[#288a61]"
            >
              <div className="space-y-3.5">
                <div className="flex items-center justify-between gap-2">
                  <span className="px-2.5 py-1 rounded-full bg-[#faf8f5] text-[10px] font-bold uppercase tracking-wider text-[#a0876e] border border-[#a0876e]/20 font-heading">
                    {book.category}
                  </span>
                  <span className="text-[11px] font-mono text-neutral-400 font-medium">
                    {book.year} CE
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-neutral-900 group-hover:text-[#288a61] transition-colors leading-snug">
                    {book.titleEnglish}
                  </h3>
                  <p className="text-xs font-semibold text-neutral-600 font-sans line-clamp-1">
                    {book.titleUrdu}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-neutral-600 line-clamp-3 leading-relaxed font-sans">
                  {book.description}
                </p>

                <div className="pt-2 flex items-center gap-3 text-[11px] text-neutral-500 font-sans">
                  <span>Author: {book.author.split('(')[0]}</span>
                  {book.pages && <span>· {book.pages} pp.</span>}
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between mt-auto">
                <button
                  onClick={() => onSelectBook(book)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-neutral-800 group-hover:text-[#288a61] uppercase tracking-wider font-heading cursor-pointer transition-colors"
                >
                  <span>View Synopsis</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
                <span className="text-[11px] font-medium text-neutral-500 bg-neutral-50 px-2.5 py-0.5 rounded-full border border-neutral-200/60 font-sans">
                  {book.language}
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* 4. FLAGSHIP CONFERENCES & SYMPOSIA SHOWCASE */}
      <section 
        className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-10"
        aria-labelledby="conferences-showcase-heading"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-neutral-200/80">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#a0876e] font-heading block">
              ANNUAL SYMPOSIA
            </span>
            <h2 id="conferences-showcase-heading" className="font-serif text-3xl sm:text-4xl lg:text-[40px] font-bold text-neutral-900 tracking-tight leading-tight">
              Featured &amp; Recent Conferences
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 font-sans leading-relaxed">
              Annual international assemblies convening academics, jurists, and researchers since 1981.
            </p>
          </div>

          <button
            onClick={() => onNavigate('conferences')}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-800 hover:text-[#a0876e] transition-colors cursor-pointer group font-heading py-2 self-start md:self-auto shrink-0 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#a0876e] rounded-sm"
          >
            <span>VIEW ALL 45 PAST EDITIONS</span>
            <ArrowRight className="w-4 h-4 text-[#a0876e] group-hover:translate-x-1.5 transition-transform duration-200 ease-out" />
          </button>
        </div>

        {/* 3 Conference Cards Grid with Scroll-Triggered Fade-Up */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {recentConferences.map((conf, index) => (
            <motion.article
              key={conf.id || `${conf.number}-${conf.year}`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ 
                duration: 0.55, 
                delay: index * 0.12, 
                ease: [0.21, 0.47, 0.32, 0.98] 
              }}
              className="bg-white rounded-[20px] border border-neutral-200/80 overflow-hidden shadow-[0_2px_12px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_32px_-12px_rgba(0,0,0,0.09)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full group focus-within:ring-2 focus-within:ring-[#a0876e]"
            >
              <div>
                {/* 1. IMAGE AREA (16:9 Aspect Ratio, Smooth 1.03 Zoom, Frosted Badges) */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-900">
                  <img
                    src={conf.imageUrl || 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80'}
                    alt={`${conf.number}th Annual International Conference Assembly - ${conf.theme || conf.venue}`}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  {/* Gentle gradient at bottom for legibility without over-darkening */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />
                  
                  {/* Top Floating Badges */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full backdrop-blur-md bg-black/60 text-[#e6ca98] border border-[#a0876e]/40 text-[11px] font-bold font-heading uppercase tracking-wide shadow-xs">
                      {conf.number}th Assembly
                    </span>
                    <span className="px-3 py-1 rounded-full backdrop-blur-md bg-black/50 text-white text-[11px] font-mono font-medium shadow-xs">
                      {conf.year}
                    </span>
                  </div>

                  {/* Bottom Image Metadata */}
                  <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between text-xs text-white">
                    <span className="flex items-center gap-1.5 text-xs text-white/95 font-medium drop-shadow-sm truncate max-w-[65%] font-sans">
                      <MapPin className="w-3.5 h-3.5 text-[#e6ca98] shrink-0" />
                      <span className="truncate">{conf.city}</span>
                    </span>
                    {conf.attendeesCount && (
                      <span className="flex items-center gap-1.5 text-xs text-[#f4ebd0] font-semibold drop-shadow-sm shrink-0 font-sans">
                        <Users className="w-3.5 h-3.5 text-[#e6ca98]" />
                        <span>{conf.attendeesCount}</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Content Body: Metadata -> Title -> Date+Venue -> Description */}
                <div className="p-6 sm:p-7 space-y-3">
                  {/* Conference Metadata Eyebrow */}
                  <div className="flex items-center gap-2 text-[11px] font-semibold text-[#a0876e] uppercase tracking-wider font-heading">
                    <span>{conf.number}th Annual Assembly</span>
                    <span className="text-neutral-300">·</span>
                    <span className="text-neutral-500 font-sans font-medium lowercase first-letter:uppercase">{conf.city.split(',')[0]}</span>
                  </div>

                  {/* Conference Title */}
                  <h3 className="font-serif text-xl sm:text-[22px] font-bold text-neutral-900 group-hover:text-[#a0876e] transition-colors leading-snug line-clamp-2">
                    {conf.theme || `International Conference ${conf.year}`}
                  </h3>
                  
                  {/* Date + Venue */}
                  <div className="flex items-center gap-2 text-xs sm:text-[13px] text-neutral-500 font-medium font-sans">
                    <Calendar className="w-3.5 h-3.5 text-[#a0876e] shrink-0" />
                    <span className="truncate">{conf.dateStr || `${conf.year}`} · {conf.venue}</span>
                  </div>

                  {/* Short Description (CSS line-clamp-3 for consistent alignment) */}
                  <p className="text-sm text-neutral-600 line-clamp-3 leading-relaxed font-sans">
                    {conf.significance}
                  </p>
                </div>
              </div>

              {/* Card Footer CTA */}
              <div className="px-6 sm:px-7 py-4 border-t border-neutral-100 bg-neutral-50/50 flex items-center justify-between mt-auto">
                <button
                  onClick={() => onSelectConference(conf)}
                  className="inline-flex items-center gap-2 text-xs font-bold text-neutral-900 group-hover:text-[#a0876e] transition-colors cursor-pointer font-heading uppercase tracking-wider py-1 focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-[#a0876e]"
                >
                  <span>View Proceedings</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#a0876e] group-hover:translate-x-1 transition-transform duration-200" />
                </button>
                <span className="text-[11px] font-medium font-sans text-neutral-600 bg-neutral-100/90 border border-neutral-200/60 px-2.5 py-1 rounded-full">
                  {conf.city.split(',')[0]}
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* 5. DIGITAL REPOSITORY & RARE MANUSCRIPTS VAULT */}
      <section 
        className="bg-[#0f1713] text-white py-16 lg:py-24 text-left border-y border-emerald-950"
        aria-labelledby="digital-repository-heading"
      >
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-emerald-900/40">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#e6ca98] font-heading block">
                Primary Archival Sources
              </span>
              <h2 id="digital-repository-heading" className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
                Digital Repository &amp; Rare Manuscript Vault
              </h2>
              <p className="text-sm sm:text-base text-neutral-300 font-sans leading-relaxed">
                High-resolution holographic scans of 100+ year-old original manuscripts, scientific proofs, and Arabic juridical codices.
              </p>
            </div>

            <button
              onClick={() => onNavigate('publications')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-white bg-[#288a61] hover:bg-[#1f6f4e] uppercase tracking-wider font-heading transition-all shadow-xs cursor-pointer self-start md:self-auto"
            >
              <span>Explore Full Digital Vault</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Interactive Manuscript Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left 4 Selector Tabs */}
            <div className="lg:col-span-5 space-y-3">
              {rareManuscripts.map((ms, idx) => {
                const isSelected = activeManuscriptIndex === idx;
                return (
                  <button
                    key={ms.id}
                    onClick={() => setActiveManuscriptIndex(idx)}
                    className={`w-full text-left p-5 rounded-[20px] border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-white/10 border-[#e6ca98] shadow-lg text-white'
                        : 'bg-white/[0.03] border-white/10 text-neutral-400 hover:text-neutral-200 hover:bg-white/[0.06]'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className={`text-[10px] font-bold uppercase tracking-wider font-heading px-2 py-0.5 rounded-full ${
                        isSelected ? 'bg-[#288a61] text-white' : 'bg-white/5 text-neutral-400'
                      }`}>
                        {ms.badge}
                      </span>
                      <span className="text-xs font-mono text-[#e6ca98]">
                        {ms.year}
                      </span>
                    </div>
                    <h3 className="font-serif text-base font-bold text-white mt-2 leading-snug">
                      {ms.title}
                    </h3>
                    <p className="text-xs text-neutral-300 font-sans mt-0.5 line-clamp-1">
                      {ms.arabicTitle}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Right Large Preview Panel */}
            <div className="lg:col-span-7">
              <div className="backdrop-blur-xl bg-white/[0.05] rounded-[20px] border border-white/15 p-6 sm:p-8 space-y-6 shadow-2xl">
                <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-white/15 bg-neutral-950">
                  <img
                    src={rareManuscripts[activeManuscriptIndex].imageUrl}
                    alt={rareManuscripts[activeManuscriptIndex].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                    <span className="bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-[#e6ca98] font-heading font-semibold border border-[#a0876e]/30">
                      Folio Scan: 1200 DPI Master
                    </span>
                    <span className="text-neutral-300 font-mono text-[11px]">
                      Holographic Archive
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-[#e6ca98] font-heading uppercase tracking-wider">
                    <span>{rareManuscripts[activeManuscriptIndex].subject}</span>
                    <span>{rareManuscripts[activeManuscriptIndex].folios}</span>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-white">
                    {rareManuscripts[activeManuscriptIndex].title}
                  </h3>
                  <p className="text-sm text-neutral-300 font-sans leading-relaxed">
                    {rareManuscripts[activeManuscriptIndex].description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                  <span className="text-xs text-neutral-400 font-sans">
                    Archival Reference: ITIAR-MSS-1400/0{activeManuscriptIndex + 1}
                  </span>
                  <button
                    onClick={onOpenRegister}
                    className="px-4 py-2 rounded-full text-xs font-bold text-white bg-[#288a61] hover:bg-[#1f6f4e] uppercase tracking-wider font-heading transition-colors cursor-pointer flex items-center gap-1.5"
                  >
                    <span>Request Digital Access</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. ACADEMIC LEADERSHIP & EXECUTIVE COUNCIL (Balanced 2-Column Grid) */}
      <section 
        className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-10"
        aria-labelledby="leadership-heading"
      >
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 max-w-5xl mx-auto border-b border-neutral-200/80 pb-6">
          <div className="space-y-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#a0876e] font-heading block">
              Governance &amp; Academy Leadership
            </span>
            <h2 id="leadership-heading" className="font-serif text-3xl font-bold text-neutral-900">
              Executive Council &amp; Scholarly Directorate
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 font-sans">
              Eminent academicians, university deans, and senior research professors stewarding the academy.
            </p>
          </div>
          <button
            onClick={() => onNavigate('about')}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-neutral-800 hover:text-[#a0876e] cursor-pointer uppercase tracking-wider font-heading"
          >
            <span>View Full Faculty Roll</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Balanced 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {LEADERSHIP_MEMBERS.map((leader, index) => (
            <motion.div
              key={leader.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="bg-[#faf8f5]/60 hover:bg-white border border-neutral-200/80 rounded-[20px] p-6 sm:p-7 space-y-4 hover:shadow-md hover:border-[#a0876e]/50 transition-all duration-200 group flex flex-col justify-between"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-xs font-semibold tracking-wider text-[#a0876e] uppercase font-heading block">
                    {leader.role}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-neutral-900 group-hover:text-[#a0876e] transition-colors">
                    {leader.name}
                  </h3>
                  <p className="text-xs text-neutral-500 font-medium">
                    {leader.designationHighlight}
                  </p>
                </div>

                {/* Sleek interactive action replacing awkward black Q icon */}
                <button
                  onClick={() => onNavigate('about')}
                  aria-label={`View scholarly profile of ${leader.name}`}
                  className="w-10 h-10 rounded-full border border-neutral-200/90 bg-white group-hover:border-[#a0876e]/60 group-hover:bg-[#faf8f5] flex items-center justify-center text-neutral-400 group-hover:text-[#a0876e] shadow-2xs transition-all duration-200 shrink-0 cursor-pointer"
                >
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                </button>
              </div>

              <p className="text-xs sm:text-sm text-neutral-600 line-clamp-2 leading-relaxed font-sans">
                {leader.summary}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 7. TIMELINE: 45-YEAR HISTORICAL MILESTONE RETROSPECTIVE */}
      <section 
        className="bg-[#faf8f5] border-y border-[#eae6de] py-16 lg:py-20 text-left"
        aria-labelledby="timeline-heading"
      >
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-neutral-200/80">
            <div className="space-y-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#a0876e] font-heading block">
                Historical Chronicle
              </span>
              <h2 id="timeline-heading" className="font-serif text-3xl font-bold text-neutral-900">
                45-Year Institutional Milestone Retrospective
              </h2>
              <p className="text-xs sm:text-sm text-neutral-600 font-sans">
                Chronological foundation, charter ratifications, and international academic expansion from 1980 to 2025.
              </p>
            </div>
            <button
              onClick={() => onNavigate('about')}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-neutral-800 hover:text-[#a0876e] cursor-pointer uppercase tracking-wider font-heading"
            >
              <span>Read Full History</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {timelineMilestones.map((m, idx) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="bg-white rounded-[20px] border border-neutral-200/80 p-6 space-y-3 shadow-xs hover:shadow-md hover:border-[#a0876e]/50 transition-all flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-2xl font-bold text-neutral-900">
                      {m.year}
                    </span>
                    <span className="text-[11px] font-mono font-medium text-[#a0876e] bg-[#faf8f5] px-2.5 py-0.5 rounded-full border border-[#a0876e]/30">
                      {m.hijri}
                    </span>
                  </div>
                  <h3 className="font-serif text-base font-bold text-neutral-900 leading-snug">
                    {m.title}
                  </h3>
                  <p className="text-xs text-neutral-600 font-sans leading-relaxed">
                    {m.detail}
                  </p>
                </div>
                <div className="pt-2 flex items-center gap-1 text-[10px] font-bold text-neutral-400 font-heading uppercase tracking-wider">
                  <span>Milestone 0{idx + 1}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. LATEST NEWS & SCHOLARLY BULLETINS */}
      <section 
        className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-10"
        aria-labelledby="latest-news-heading"
      >
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-neutral-200/80 pb-6">
          <div className="space-y-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#a0876e] font-heading block">
              Academic Dispatches
            </span>
            <h2 id="latest-news-heading" className="font-serif text-3xl font-bold text-neutral-900">
              Latest News &amp; Research Bulletins
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 font-sans">
              Symposia dates, doctoral fellowship opportunities, and archival releases.
            </p>
          </div>
          <button
            onClick={onOpenRegister}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-neutral-800 hover:text-[#288a61] cursor-pointer uppercase tracking-wider font-heading"
          >
            <span>Inquire for Submissions</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {scholarlyNews.map((news, idx) => (
            <div
              key={news.id}
              className="bg-white rounded-[20px] border border-neutral-200/80 p-6 space-y-4 shadow-xs hover:shadow-md hover:border-[#288a61]/50 transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="px-2.5 py-1 rounded-full bg-[#faf8f5] text-[#288a61] font-bold uppercase tracking-wider text-[10px] font-heading border border-[#288a61]/20">
                    {news.category}
                  </span>
                  <span className="text-neutral-400 font-sans text-xs">
                    {news.date}
                  </span>
                </div>
                <h3 className="font-serif text-lg font-bold text-neutral-900 leading-snug hover:text-[#288a61] transition-colors">
                  {news.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 font-sans leading-relaxed line-clamp-3">
                  {news.excerpt}
                </p>
              </div>

              <div className="pt-3 border-t border-neutral-100 flex items-center justify-between text-xs">
                <button
                  onClick={onOpenRegister}
                  className="font-bold text-[#288a61] hover:underline uppercase tracking-wider font-heading cursor-pointer flex items-center gap-1"
                >
                  <span>Read Notice</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <span className="text-neutral-400 font-sans text-[11px]">
                  {news.readTime}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. TESTIMONIALS & ACADEMIC ENDORSEMENTS */}
      <section 
        className="bg-white border-y border-neutral-200/80 py-16 text-left"
        aria-labelledby="testimonials-heading"
      >
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="space-y-1 text-center max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#a0876e] font-heading block">
              International Peer Evaluation
            </span>
            <h2 id="testimonials-heading" className="font-serif text-3xl font-bold text-neutral-900">
              Scholarly Endorsements &amp; Academic Reviews
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {academicTestimonials.map((t) => (
              <div
                key={t.id}
                className="bg-[#faf8f5] rounded-[20px] border border-neutral-200/80 p-7 space-y-4 flex flex-col justify-between shadow-2xs hover:shadow-md transition-all"
              >
                <div className="space-y-3">
                  <Quote className="w-8 h-8 text-[#a0876e]/50" />
                  <p className="text-xs sm:text-sm text-neutral-700 italic font-serif leading-relaxed">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-200/80">
                  <h4 className="font-serif text-sm font-bold text-neutral-900">
                    {t.author}
                  </h4>
                  <p className="text-[11px] text-[#a0876e] font-medium font-heading">
                    {t.designation}
                  </p>
                  <p className="text-[11px] text-neutral-500 font-sans">
                    {t.university}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. RESEARCH PARTNERS & UNIVERSITY AFFILIATIONS */}
      <section 
        className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-8"
        aria-labelledby="partners-heading"
      >
        <div className="space-y-1 text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#a0876e] font-heading block">
            Academic Collaboration
          </span>
          <h2 id="partners-heading" className="font-serif text-2xl sm:text-3xl font-bold text-neutral-900">
            University Affiliations &amp; Research Chairs
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 font-sans">
            Collaborating with premier university faculties on doctoral dissertations and symposium proceedings.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {researchPartners.map((p, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-neutral-200/80 p-4 text-center space-y-1.5 shadow-2xs hover:border-[#288a61] transition-all flex flex-col justify-center items-center h-28"
            >
              <Landmark className="w-5 h-5 text-[#a0876e]" />
              <span className="font-serif text-xs font-bold text-neutral-900 line-clamp-2">
                {p.name}
              </span>
              <span className="text-[10px] text-neutral-500 font-sans line-clamp-1">
                {p.role}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 11. NEWSLETTER & MANUSCRIPT INQUIRIES (Dual Institutional Card) */}
      <section 
        className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8"
        aria-labelledby="engagement-heading"
      >
        <div className="bg-[#111815] text-white rounded-[20px] border border-emerald-950 p-8 sm:p-12 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center text-left">
          
          {/* Left Column: Ma'arif-e-Raza Journal Subscription */}
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#e6ca98] font-heading block">
              Academic Periodical Dispatch
            </span>
            <h2 id="engagement-heading" className="font-serif text-2xl sm:text-3xl font-bold text-white leading-snug">
              Subscribe to <em>Mahnama Ma'arif-e-Raza</em> Bulletin
            </h2>
            <p className="text-xs sm:text-sm text-neutral-300 font-sans leading-relaxed">
              Receive monthly journal dispatches, newly cataloged critical editions, symposium call for papers, and doctoral research notices.
            </p>

            {newsletterSubscribed ? (
              <div className="bg-white/10 rounded-2xl p-4 border border-[#288a61] flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#288a61] shrink-0" />
                <div className="text-xs">
                  <span className="font-bold font-heading text-white block">Subscription Registered</span>
                  <span className="text-neutral-300">Scholarly bulletins will be transmitted to {newsletterEmail}.</span>
                </div>
              </div>
            ) : (
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  if (newsletterEmail && newsletterEmail.includes('@')) {
                    setNewsletterSubscribed(true);
                  }
                }}
                className="flex flex-col sm:flex-row gap-2.5 pt-2"
              >
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter institutional or scholar email..."
                  className="px-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-neutral-400 text-xs focus:outline-hidden focus:border-[#e6ca98] flex-1 font-sans"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-full text-xs font-bold text-white bg-[#288a61] hover:bg-[#1f6f4e] uppercase tracking-wider font-heading transition-all shadow-xs cursor-pointer flex items-center justify-center gap-2 shrink-0"
                >
                  <span>Subscribe</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Direct Secretariat Inquiry Action */}
          <div className="lg:col-span-6 bg-white/[0.04] border border-white/10 rounded-2xl p-6 sm:p-7 space-y-4">
            <div className="space-y-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#e6ca98] font-heading">
                Central Secretariat
              </span>
              <h3 className="font-serif text-xl font-bold text-white">
                Direct Research Inquiries &amp; Archival Requests
              </h3>
              <p className="text-xs text-neutral-300 font-sans leading-relaxed">
                Connect directly with the Academic Secretariat for doctoral thesis registration, library visits, or publication permissions.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenRegister}
                className="px-5 py-2.5 rounded-full text-xs font-bold text-neutral-900 bg-white hover:bg-neutral-100 uppercase tracking-wider font-heading transition-all cursor-pointer shadow-xs"
              >
                Contact Secretariat
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 uppercase tracking-wider font-heading transition-all cursor-pointer"
              >
                View Secretariat Directory
              </button>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
