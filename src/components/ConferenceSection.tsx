import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  MapPin, 
  Users, 
  Search, 
  Filter, 
  ArrowUpRight, 
  ChevronRight, 
  Award, 
  BookOpen, 
  Clock, 
  Sparkles,
  Eye,
  CheckCircle2,
  X,
  Plus,
  Globe,
  ExternalLink,
  BookmarkCheck,
  FileText,
  Image as ImageIcon,
  Maximize2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CONFERENCE_CHRONICLE, 
  CONFERENCE_GALLERY_IMAGES, 
  ConferenceArchiveItem, 
  GalleryPhoto 
} from '../data/organizationData.ts';
import { SearchGroundedConferenceModal } from './SearchGroundedConferenceModal.tsx';
import { ConferencePhotoLightbox } from './ConferencePhotoLightbox.tsx';
import { AddPhotoModal } from './AddPhotoModal.tsx';

interface ConferenceSectionProps {
  onOpenRegister: () => void;
}

export const ConferenceSection: React.FC<ConferenceSectionProps> = ({ onOpenRegister }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterEra, setFilterEra] = useState<'all' | '2020s' | '2010s' | '2000s' | '1990s' | '1980s' | 'userAdded'>('all');
  const [selectedConference, setSelectedConference] = useState<ConferenceArchiveItem | null>(null);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [allConferences, setAllConferences] = useState<ConferenceArchiveItem[]>(CONFERENCE_CHRONICLE);

  // Gallery Photos state
  const [galleryPhotos, setGalleryPhotos] = useState<GalleryPhoto[]>(CONFERENCE_GALLERY_IMAGES);
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);
  const [isAddPhotoModalOpen, setIsAddPhotoModalOpen] = useState(false);
  const [galleryCategory, setGalleryCategory] = useState<string>('all');

  // Load custom added conferences from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('itiar_conferences');
      if (saved) {
        const parsed: ConferenceArchiveItem[] = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          const existingMap = new Map<string, ConferenceArchiveItem>();
          parsed.forEach((c) => existingMap.set(`${c.number}-${c.year}`, c));
          CONFERENCE_CHRONICLE.forEach((c) => {
            if (!existingMap.has(`${c.number}-${c.year}`)) {
              existingMap.set(`${c.number}-${c.year}`, c);
            }
          });
          const merged = Array.from(existingMap.values()).sort((a, b) => b.year - a.year);
          setAllConferences(merged);
        }
      }
    } catch (e) {
      console.error('Failed to load stored conferences', e);
    }
  }, []);

  // Load custom added gallery photos from localStorage
  useEffect(() => {
    try {
      const savedPhotos = localStorage.getItem('itiar_conference_gallery');
      if (savedPhotos) {
        const parsed: GalleryPhoto[] = JSON.parse(savedPhotos);
        if (Array.isArray(parsed) && parsed.length > 0) {
          const idSet = new Set(parsed.map(p => p.id));
          const basePhotos = CONFERENCE_GALLERY_IMAGES.filter(p => !idSet.has(p.id));
          setGalleryPhotos([...parsed, ...basePhotos]);
        }
      }
    } catch (e) {
      console.error('Failed to load stored gallery photos', e);
    }
  }, []);

  const handleAddConference = (newConf: ConferenceArchiveItem) => {
    setAllConferences((prev) => {
      const updated = [newConf, ...prev.filter((c) => c.number !== newConf.number || c.year !== newConf.year)];
      try {
        const userAddedList = updated.filter((c) => c.isUserAdded);
        localStorage.setItem('itiar_conferences', JSON.stringify(userAddedList));
      } catch (err) {
        console.error('Failed to save conference to localStorage', err);
      }
      return updated;
    });
  };

  const handleAddPhoto = (newPhoto: GalleryPhoto) => {
    setGalleryPhotos((prev) => {
      const updated = [newPhoto, ...prev];
      try {
        const customPhotos = updated.filter(p => p.id.startsWith('gal-custom-'));
        localStorage.setItem('itiar_conference_gallery', JSON.stringify(customPhotos));
      } catch (err) {
        console.error('Failed to save photo to localStorage', err);
      }
      return updated;
    });
  };

  const filteredConferences = allConferences.filter((conf) => {
    const matchesSearch = 
      conf.venue.toLowerCase().includes(searchTerm.toLowerCase()) ||
      conf.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      conf.year.toString().includes(searchTerm) ||
      (conf.theme && conf.theme.toLowerCase().includes(searchTerm.toLowerCase())) ||
      conf.significance.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (conf.keySpeakers && conf.keySpeakers.some(s => s.toLowerCase().includes(searchTerm.toLowerCase())));

    if (!matchesSearch) return false;

    if (filterEra === 'all') return true;
    if (filterEra === '2020s') return conf.year >= 2020;
    if (filterEra === '2010s') return conf.year >= 2010 && conf.year < 2020;
    if (filterEra === '2000s') return conf.year >= 2000 && conf.year < 2010;
    if (filterEra === '1990s') return conf.year >= 1990 && conf.year < 2000;
    if (filterEra === '1980s') return conf.year >= 1980 && conf.year < 1990;
    if (filterEra === 'userAdded') return conf.isUserAdded;
    return true;
  });

  const filteredGalleryPhotos = galleryPhotos.filter((photo) => {
    if (galleryCategory === 'all') return true;
    return photo.category.toLowerCase().includes(galleryCategory.toLowerCase());
  });

  // Photos related to currently open conference brief modal
  const selectedConferencePhotos = selectedConference
    ? galleryPhotos.filter(
        (p) =>
          p.conferenceNumber === selectedConference.number ||
          p.year === selectedConference.year
      )
    : [];

  return (
    <div className="bg-[#fafbf9] text-stone-900 min-h-screen pb-24 text-left">
      
      {/* Header Banner */}
      <section className="bg-[#161816] text-white relative overflow-hidden py-12 px-4 sm:px-6 border-b border-[#2d332e]">
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1800&q=80"
            alt="Conferences Background"
            className="w-full h-full object-cover"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#191919] via-[#191919]/95 to-[#242424]/90" />

        <div className="max-w-7xl mx-auto relative z-10 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-bold text-[#a0876e] uppercase tracking-wider font-heading">
              International Symposia & Conferences Archive (1981–2025)
            </span>
            <span className="px-2 py-0.5 rounded bg-[#288a61]/20 border border-[#288a61]/50 text-[#34d399] text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 font-heading">
              <Globe className="w-2.5 h-2.5" />
              Live Search Grounded
            </span>
          </div>

          <h1 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Conferences & Academic Assemblies
          </h1>
          <p className="text-stone-300 text-base sm:text-lg max-w-3xl font-sans">
            Explore 45 years of international symposia, plenary proceedings, photographic chronicles, and research papers across Pakistan and globally.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              onClick={() => setIsSearchModalOpen(true)}
              className="px-5 py-2.5 rounded text-xs font-bold text-white bg-[#a0876e] hover:bg-[#8b735c] transition-colors uppercase tracking-wider cursor-pointer font-heading flex items-center gap-2 shadow-xs"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Search & Add Past Conferences</span>
            </button>

            <button
              onClick={() => setIsAddPhotoModalOpen(true)}
              className="px-4 py-2.5 rounded text-xs font-bold text-white bg-[#191919] hover:bg-stone-800 border border-[#a0876e]/50 transition-colors uppercase tracking-wider cursor-pointer font-heading flex items-center gap-2 shadow-xs"
            >
              <ImageIcon className="w-3.5 h-3.5 text-[#a0876e]" />
              <span>Add Conference Photo</span>
            </button>

            <button
              onClick={onOpenRegister}
              className="px-5 py-2.5 rounded text-xs font-bold text-white bg-[#288a61] hover:bg-[#1f6f4e] transition-colors uppercase tracking-wider cursor-pointer font-heading"
            >
              Call for Papers / Inquiries
            </button>

            <div className="text-xs text-stone-400 font-sans">
              45 Concluded Annual Assemblies · Archive Documented (1981–2025)
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-10 space-y-12">
        
        {/* Search & Filter Bar */}
        <div className="bg-white rounded border border-[#eaeaec] p-5 shadow-xs space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-3" />
              <input
                type="text"
                placeholder="Search conferences by title, theme, city, venue, or speaker..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-xs bg-[#faf8f5] border border-[#eaeaec] rounded focus:outline-hidden focus:border-[#a0876e] text-[#020404]"
              />
            </div>

            {/* Action & Results count */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsSearchModalOpen(true)}
                className="px-4 py-2 rounded text-xs font-bold text-[#191919] bg-[#faf8f5] hover:bg-stone-200 border border-[#eaeaec] transition-colors cursor-pointer font-heading uppercase tracking-wider flex items-center gap-1.5 shrink-0"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#a0876e]" />
                <span>Search Live Grounding</span>
              </button>

              <div className="text-xs font-semibold text-[#5c544d] shrink-0">
                Showing <span className="text-[#a0876e] font-bold">{filteredConferences.length}</span> Editions
              </div>
            </div>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[#eaeaec]">
            <span className="text-xs font-bold text-[#5c544d] uppercase tracking-wider mr-1">
              Filter by Era:
            </span>
            {[
              { id: 'all', label: 'All Editions' },
              { id: '2020s', label: '2020s (40th–45th)' },
              { id: '2010s', label: '2010–2019' },
              { id: '2000s', label: '2000s (Silver Jubilee)' },
              { id: '1990s', label: '1990s' },
              { id: '1980s', label: '1980s Origins' },
              { id: 'userAdded', label: 'Grounding Verified / Added' },
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => setFilterEra(btn.id as any)}
                className={`px-3 py-1.5 rounded text-xs font-semibold transition-all cursor-pointer ${
                  filterEra === btn.id
                    ? 'bg-[#191919] text-white shadow-2xs'
                    : 'bg-[#f4f4f5] text-[#3f4245] hover:bg-stone-200 hover:text-stone-900'
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        {/* Conference Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredConferences.map((conf) => (
              <motion.div
                key={conf.id || `${conf.number}-${conf.year}`}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded border border-[#eaeaec] overflow-hidden shadow-2xs hover:shadow-xs hover:border-[#a0876e]/50 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Card Thumbnail Image Banner */}
                  <div className="relative h-48 w-full overflow-hidden bg-stone-900 cursor-pointer" onClick={() => setSelectedConference(conf)}>
                    <img
                      src={conf.imageUrl || 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80'}
                      alt={`${conf.number}th Conference`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/30 to-transparent" />

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded bg-[#191919] text-[#a0876e] text-xs font-bold font-heading border border-[#a0876e]/40 shadow-xs">
                        {conf.number}{conf.number === 1 ? 'st' : conf.number === 2 ? 'nd' : conf.number === 3 ? 'rd' : 'th'} Assembly
                      </span>
                      <span className="px-2 py-0.5 rounded bg-black/60 backdrop-blur-xs text-white text-[11px] font-mono font-medium">
                        {conf.year} {conf.hijriYear && `(${conf.hijriYear})`}
                      </span>
                    </div>

                    {/* Bottom Metadata inside Image */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-stone-200">
                      <span className="flex items-center gap-1 text-[11px] font-medium truncate">
                        <MapPin className="w-3.5 h-3.5 text-[#a0876e] shrink-0" />
                        <span className="truncate">{conf.city}</span>
                      </span>
                      {conf.attendeesCount && (
                        <span className="flex items-center gap-1 text-[11px] text-[#a0876e] font-semibold shrink-0">
                          <Users className="w-3 h-3" />
                          <span>{conf.attendeesCount}</span>
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-5 space-y-3">
                    {/* User-added or Search Grounded Badge */}
                    {(conf.isUserAdded || (conf.groundingSources && conf.groundingSources.length > 0)) && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#288a61]/10 text-[#288a61] text-[10px] font-bold font-heading uppercase tracking-wider border border-[#288a61]/30">
                        <Globe className="w-2.5 h-2.5" />
                        Search Grounded & Verified
                      </span>
                    )}

                    <h3 className="font-heading text-lg font-bold text-[#020404] group-hover:text-[#a0876e] transition-colors leading-snug">
                      {conf.theme || `Annual International Imam Ahmed Raza Conference ${conf.year}`}
                    </h3>

                    <div className="flex items-start gap-2 text-xs text-stone-500 font-medium">
                      <Calendar className="w-3.5 h-3.5 text-[#a0876e] shrink-0 mt-0.5" />
                      <span>{conf.dateStr || `${conf.year}`} · {conf.venue}</span>
                    </div>

                    <p className="text-xs text-[#5c544d] line-clamp-3 leading-relaxed font-sans">
                      {conf.significance}
                    </p>

                    {/* Prominent Key Speakers */}
                    {conf.keySpeakers && conf.keySpeakers.length > 0 && (
                      <div className="pt-1 flex flex-wrap gap-1">
                        {conf.keySpeakers.slice(0, 2).map((spk, idx) => (
                          <span
                            key={idx}
                            className="text-[10px] px-1.5 py-0.5 rounded bg-[#faf8f5] text-[#5c544d] border border-[#eaeaec] font-sans truncate max-w-[200px]"
                          >
                            {spk}
                          </span>
                        ))}
                        {conf.keySpeakers.length > 2 && (
                          <span className="text-[10px] px-1.5 py-0.5 text-stone-400 font-sans">
                            +{conf.keySpeakers.length - 2} more
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="p-5 pt-0 border-t border-[#eaeaec] flex items-center justify-between gap-3">
                  <button
                    onClick={() => setSelectedConference(conf)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#3f4245] hover:text-[#a0876e] transition-colors cursor-pointer font-heading uppercase tracking-wider"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Conference Brief</span>
                  </button>

                  <span className="text-[11px] text-[#5c544d] font-medium font-sans bg-[#f4f4f5] px-2.5 py-1 rounded">
                    {conf.papersCount || 'Concluded'}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Media & Photographic Gallery (Interactive Lightbox & Category Filtering) */}
        <div className="pt-12 border-t border-[#eaeaec] space-y-8" id="conference-photo-gallery">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-bold text-[#a0876e] uppercase tracking-widest font-heading flex items-center gap-1.5">
                <ImageIcon className="w-4 h-4 text-[#a0876e]" />
                Photographic Chronicle & Proceedings
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#020404]">
                Past Conferences Photography Archive
              </h2>
              <p className="text-xs sm:text-sm text-[#5c544d] font-sans max-w-2xl">
                Photographic documentation of our global assemblies, international guest lectures, scholarly paper tracks, and academic awards ceremonies since 1981.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsAddPhotoModalOpen(true)}
                className="px-4 py-2 rounded text-xs font-bold text-white bg-[#a0876e] hover:bg-[#8b735c] transition-colors cursor-pointer font-heading uppercase tracking-wider flex items-center gap-1.5 shadow-xs"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Conference Photo</span>
              </button>

              <span className="text-xs font-semibold text-[#5c544d] font-sans">
                {galleryPhotos.length} Documented Photos
              </span>
            </div>
          </div>

          {/* Category Filter Chips for Gallery */}
          <div className="flex flex-wrap items-center gap-2 border-b border-[#eaeaec] pb-3 text-xs font-heading">
            {[
              { id: 'all', label: `All Photos (${galleryPhotos.length})` },
              { id: 'Plenary Assembly', label: 'Plenary Assemblies' },
              { id: 'Expert Panel', label: 'Expert Panels & Discussions' },
              { id: 'Audience & Delegates', label: 'Audience & Delegates' },
              { id: 'Awards Ceremony', label: 'Awards & Gold Medals' },
              { id: 'Academic Symposia', label: 'University Symposia' },
              { id: 'Exhibition', label: 'Treatises & Book Exhibitions' },
              { id: 'Historic Archive', label: 'Historic Archives (1980s-2000s)' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setGalleryCategory(cat.id)}
                className={`px-3 py-1.5 rounded transition-all cursor-pointer font-semibold ${
                  galleryCategory === cat.id
                    ? 'bg-[#191919] text-white shadow-2xs'
                    : 'bg-[#faf8f5] text-[#5c544d] hover:bg-stone-200 border border-[#eaeaec]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Photo Grid with Zoom & Lightbox Trigger */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGalleryPhotos.map((photo) => (
              <div
                key={photo.id}
                onClick={() => setSelectedPhoto(photo)}
                className="bg-white rounded border border-[#eaeaec] overflow-hidden shadow-2xs hover:shadow-md hover:border-[#a0876e] transition-all group cursor-pointer flex flex-col justify-between text-left"
              >
                <div>
                  <div className="relative h-52 overflow-hidden bg-[#191919]">
                    <img
                      src={photo.imageUrl}
                      alt={photo.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=80';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent" />
                    
                    {/* Category & Year Tag */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      <span className="px-2 py-0.5 rounded bg-[#191919]/90 text-[#a0876e] border border-[#a0876e]/40 text-[10px] font-bold uppercase tracking-wider font-heading">
                        {photo.category}
                      </span>
                      {photo.year && (
                        <span className="px-2 py-0.5 rounded bg-black/60 text-white text-[10px] font-mono">
                          {photo.year}
                        </span>
                      )}
                    </div>

                    {/* Hover Click to Expand Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="px-3 py-1.5 rounded bg-white text-[#020404] text-xs font-bold font-heading flex items-center gap-1.5 shadow-lg">
                        <Maximize2 className="w-3.5 h-3.5 text-[#a0876e]" />
                        <span>Click to Enlarge</span>
                      </span>
                    </div>

                    {photo.location && (
                      <div className="absolute bottom-2.5 left-3 text-[11px] text-stone-200 flex items-center gap-1 truncate max-w-[90%] font-sans">
                        <MapPin className="w-3 h-3 text-[#a0876e] shrink-0" />
                        <span className="truncate">{photo.location}</span>
                      </div>
                    )}
                  </div>

                  <div className="p-4 space-y-1.5">
                    <h4 className="font-heading font-bold text-sm text-[#020404] group-hover:text-[#a0876e] transition-colors leading-snug">
                      {photo.title}
                    </h4>
                    <p className="text-xs text-[#5c544d] leading-relaxed font-sans line-clamp-2">
                      {photo.caption}
                    </p>
                  </div>
                </div>

                <div className="p-4 pt-0 border-t border-[#eaeaec] flex items-center justify-between text-[11px] text-[#a0876e] font-semibold font-heading uppercase tracking-wider">
                  <span>{photo.conferenceNumber ? `${photo.conferenceNumber}th Assembly` : 'Archive Photo'}</span>
                  <span className="text-stone-400 group-hover:text-[#a0876e] transition-colors flex items-center gap-1">
                    <span>View Full Size</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Conference Detail Modal */}
      {selectedConference && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150">
          <div 
            className="bg-white rounded max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-[#eaeaec] shadow-2xl p-6 sm:p-8 space-y-6 text-left relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedConference(null)}
              className="absolute right-5 top-5 p-1.5 rounded-full text-stone-400 hover:text-stone-800 hover:bg-stone-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div 
              className="relative h-56 -mx-6 -mt-6 sm:-mx-8 sm:-mt-8 overflow-hidden rounded-t cursor-pointer group"
              onClick={() => {
                // Open lightbox with this photo
                const matchingPhoto = galleryPhotos.find(p => p.conferenceNumber === selectedConference.number) || {
                  id: `conf-main-${selectedConference.number}`,
                  title: `${selectedConference.number}th Conference: ${selectedConference.theme || 'Plenary Session'}`,
                  category: 'Plenary Assembly',
                  imageUrl: selectedConference.imageUrl || 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80',
                  caption: selectedConference.significance,
                  year: selectedConference.year,
                  conferenceNumber: selectedConference.number,
                  location: `${selectedConference.venue}, ${selectedConference.city}`
                };
                setSelectedPhoto(matchingPhoto);
              }}
            >
              <img
                src={selectedConference.imageUrl || 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1000&q=80'}
                alt={selectedConference.venue}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
              
              <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-white">
                <span className="px-3 py-1 rounded bg-[#a0876e] text-white font-bold font-heading text-xs">
                  {selectedConference.number}th International Conference
                </span>
                <span className="text-xs font-mono bg-black/50 px-2 py-0.5 rounded">
                  {selectedConference.year} ({selectedConference.hijriYear})
                </span>
              </div>

              <div className="absolute top-4 left-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="px-2.5 py-1 rounded bg-black/70 text-white text-[11px] font-sans flex items-center gap-1">
                  <Maximize2 className="w-3 h-3 text-[#a0876e]" />
                  <span>Click to view full photo</span>
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-heading text-2xl font-bold text-[#020404]">
                {selectedConference.theme || `Annual International Assembly ${selectedConference.year}`}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-3 bg-[#faf8f5] rounded border border-[#eaeaec] text-xs">
                <div>
                  <span className="text-[#5c544d] block font-sans">Host Venue:</span>
                  <span className="font-semibold text-[#020404]">{selectedConference.venue}</span>
                </div>
                <div>
                  <span className="text-[#5c544d] block font-sans">City & Region:</span>
                  <span className="font-semibold text-[#020404]">{selectedConference.city}</span>
                </div>
                <div>
                  <span className="text-[#5c544d] block font-sans">Convening Date:</span>
                  <span className="font-semibold text-[#020404]">{selectedConference.dateStr || `${selectedConference.year}`}</span>
                </div>
              </div>

              <div className="space-y-2 text-xs text-[#3f4245] leading-relaxed font-sans">
                <h4 className="font-heading font-bold text-[#020404] text-sm">
                  Historical Significance & Research Deliverables
                </h4>
                <p className="bg-[#faf8f5] p-4 rounded border border-[#eaeaec]">
                  {selectedConference.significance}
                </p>
              </div>

              {/* Related Photographs for this specific edition */}
              {selectedConferencePhotos.length > 0 && (
                <div className="space-y-2 pt-2 border-t border-[#eaeaec]">
                  <div className="flex items-center justify-between">
                    <h4 className="font-heading font-bold text-[#020404] text-sm flex items-center gap-1.5">
                      <ImageIcon className="w-4 h-4 text-[#a0876e]" />
                      <span>Documented Conference Photos ({selectedConferencePhotos.length})</span>
                    </h4>
                    <span className="text-[11px] text-[#5c544d]">Click to enlarge photo</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {selectedConferencePhotos.map((p) => (
                      <div
                        key={p.id}
                        onClick={() => setSelectedPhoto(p)}
                        className="relative h-24 rounded overflow-hidden border border-[#eaeaec] group cursor-pointer"
                      >
                        <img
                          src={p.imageUrl}
                          alt={p.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                          loading="lazy"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-[10px] font-bold">
                          View
                        </div>
                        <span className="absolute bottom-1 left-1 px-1.5 py-0.5 rounded bg-black/70 text-[9px] text-white truncate max-w-[90%]">
                          {p.title}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Keynote Speakers */}
              {selectedConference.keySpeakers && selectedConference.keySpeakers.length > 0 && (
                <div className="space-y-2">
                  <h4 className="font-heading font-bold text-[#020404] text-sm">
                    Keynote Speakers & Notable Dignitaries
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedConference.keySpeakers.map((spk, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2.5 py-1 rounded bg-[#faf8f5] border border-[#eaeaec] text-[#020404] font-sans flex items-center gap-1.5"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#288a61]" />
                        <span>{spk}</span>
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Documented Resolutions */}
              {selectedConference.resolutions && selectedConference.resolutions.length > 0 && (
                <div className="space-y-2">
                  <h4 className="font-heading font-bold text-[#020404] text-sm">
                    Conference Resolutions & Scientific Proceedings
                  </h4>
                  <ul className="text-xs text-[#3f4245] space-y-1.5 list-disc list-inside bg-[#faf8f5] p-4 rounded border border-[#eaeaec] font-sans">
                    {selectedConference.resolutions.map((res, idx) => (
                      <li key={idx} className="leading-relaxed">{res}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Grounding Sources */}
              {selectedConference.groundingSources && selectedConference.groundingSources.length > 0 && (
                <div className="space-y-2 pt-2 border-t border-[#eaeaec]">
                  <h4 className="font-heading font-bold text-xs text-[#5c544d] uppercase tracking-wider flex items-center gap-1.5">
                    <Globe className="w-3.5 h-3.5 text-[#288a61]" />
                    <span>Verified Web Sources ({selectedConference.groundingSources.length})</span>
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedConference.groundingSources.map((src, idx) => (
                      <a
                        key={idx}
                        href={src.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] px-2.5 py-1 rounded bg-white border border-[#eaeaec] hover:border-[#a0876e] text-[#020404] hover:text-[#a0876e] transition-colors flex items-center gap-1.5 font-sans"
                      >
                        <span className="truncate max-w-[240px]">{src.title}</span>
                        <ExternalLink className="w-3 h-3 text-stone-400 shrink-0" />
                      </a>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex flex-wrap items-center gap-4 text-xs text-[#5c544d] pt-1">
                {selectedConference.speakersCount && (
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4 text-[#a0876e]" />
                    <span>{selectedConference.speakersCount}</span>
                  </span>
                )}
                {selectedConference.attendeesCount && (
                  <span className="flex items-center gap-1">
                    <Users className="w-4 h-4 text-[#a0876e]" />
                    <span>{selectedConference.attendeesCount}</span>
                  </span>
                )}
                {selectedConference.papersCount && (
                  <span className="flex items-center gap-1">
                    <FileText className="w-4 h-4 text-[#a0876e]" />
                    <span>{selectedConference.papersCount}</span>
                  </span>
                )}
              </div>
            </div>

            <div className="pt-4 border-t border-[#eaeaec] flex items-center justify-between">
              <button
                onClick={() => {
                  setSelectedConference(null);
                  onOpenRegister();
                }}
                className="px-5 py-2.5 rounded text-xs font-bold text-white bg-[#288a61] hover:bg-[#1f6f4e] transition-colors cursor-pointer font-heading uppercase tracking-wider"
              >
                Request Conference Proceedings & Papers
              </button>
              <button
                onClick={() => setSelectedConference(null)}
                className="px-4 py-2 text-xs font-semibold text-[#5c544d] hover:bg-[#f4f4f5] rounded cursor-pointer font-sans"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Full-Screen Photo Lightbox */}
      <ConferencePhotoLightbox
        photo={selectedPhoto}
        photos={filteredGalleryPhotos}
        onClose={() => setSelectedPhoto(null)}
        onSelectPhoto={(p) => setSelectedPhoto(p)}
      />

      {/* Add Photo Modal */}
      <AddPhotoModal
        isOpen={isAddPhotoModalOpen}
        onClose={() => setIsAddPhotoModalOpen(false)}
        onAddPhoto={handleAddPhoto}
      />

      {/* Search & Add Modal */}
      <SearchGroundedConferenceModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
        onAddConference={handleAddConference}
      />

    </div>
  );
};
