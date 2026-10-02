import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  ArrowRight, 
  Search, 
  Calendar, 
  BookOpen, 
  Users, 
  Phone, 
  Home, 
  Mail, 
  ChevronDown, 
  FileText, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { RazaEmblem } from './RazaEmblem.tsx';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenRegister: () => void;
  onOpenSearch?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  activeTab, 
  setActiveTab, 
  onOpenRegister,
  onOpenSearch 
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);

  const navLinks = [
    { id: 'home', label: 'Home', icon: Home },
    { 
      id: 'conferences', 
      label: 'Conferences & Symposia', 
      icon: Calendar,
      hasMega: true,
      megaItems: [
        { label: '45th International Conference (2025)', sub: 'Pearl Continental Plenary & Proceedings', tab: 'conferences' },
        { label: 'Chronicle of Past 45 Assemblies', sub: 'Historical records from 1981 to present', tab: 'conferences' },
        { label: 'Doctoral Gold Medal Convocation', sub: 'Merit incentives for international researchers', tab: 'conferences' },
      ]
    },
    { 
      id: 'publications', 
      label: 'Publications & Repository', 
      icon: BookOpen,
      hasMega: true,
      megaItems: [
        { label: '164+ Cataloged Monographs', sub: 'Peer-reviewed treatises & translations', tab: 'publications' },
        { label: 'Mahnama Ma\'arif-e-Raza', sub: 'Quarter-century monthly academic journal', tab: 'publications' },
        { label: 'Rare Manuscripts Digital Vault', sub: 'Original holographic codices & astrolabes', tab: 'publications' },
      ]
    },
    { id: 'about', label: 'Faculty & Council', icon: Users },
    { id: 'contact', label: 'Secretariat & Offices', icon: Phone },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    setActiveMegaMenu(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 text-left">
      {/* 1. Ultra-Clean Micro Institutional Utility Top Bar (Reduced Height: 30px) */}
      <div className="bg-[#111815] text-neutral-300 text-[11px] font-sans border-b border-emerald-950/40 hidden md:block">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 h-7 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-[#e6ca98] font-semibold uppercase tracking-wider font-heading text-[10px]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#288a61]" />
              Chartered Research Academy
            </span>
            <span className="text-neutral-600">|</span>
            <span className="text-neutral-400 text-[11px]">
              Regd. Under Societies Act XXI of 1860 · Founded 1400 AH / 1980 CE
            </span>
          </div>

          <div className="flex items-center gap-5 text-neutral-300 text-[11px]">
            <a 
              href="tel:+922132725150" 
              className="hover:text-white transition-colors flex items-center gap-1.5 font-sans"
            >
              <Phone className="w-3 h-3 text-[#a0876e]" />
              <span>+92-21-32725150</span>
            </a>
            <span className="text-neutral-700">·</span>
            <a 
              href="mailto:imamahmadraza@gmail.com" 
              className="hover:text-white transition-colors flex items-center gap-1.5 font-sans"
            >
              <Mail className="w-3 h-3 text-[#a0876e]" />
              <span>imamahmadraza@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Sticky Navigation with Frosted Glass */}
      <div className="bg-white/95 backdrop-blur-md border-b border-neutral-200/80 transition-all">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between">
          
          {/* Brand Identity / Wordmark */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3.5 text-left group focus-visible:outline-hidden cursor-pointer"
          >
            <div className="transition-transform duration-300 group-hover:scale-105">
              <RazaEmblem size={38} withBadge={true} />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-base sm:text-lg text-neutral-900 tracking-tight leading-tight group-hover:text-[#288a61] transition-colors">
                Idara-e-Tahqeeqat-e-Imam Ahmed Raza
              </span>
              <span className="text-[11px] font-medium text-neutral-500 tracking-normal font-sans">
                Karachi Central Secretariat · Islamic Research Academy
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <div 
                  key={link.id} 
                  className="relative group py-6"
                  onMouseEnter={() => link.hasMega && setActiveMegaMenu(link.id)}
                  onMouseLeave={() => setActiveMegaMenu(null)}
                >
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className={`flex items-center gap-1 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer ${
                      isActive
                        ? 'text-[#288a61]'
                        : 'text-neutral-700 hover:text-neutral-900'
                    }`}
                  >
                    <span>{link.label}</span>
                    {link.hasMega && (
                      <ChevronDown className="w-3 h-3 text-neutral-400 group-hover:text-neutral-800 transition-transform group-hover:rotate-180 duration-200" />
                    )}
                  </button>

                  {/* Active Indicator Underline */}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#288a61]" />
                  )}

                  {/* Mega Menu Dropdown */}
                  {link.hasMega && activeMegaMenu === link.id && (
                    <div className="absolute top-full left-0 -ml-4 w-72 bg-white rounded-2xl shadow-xl border border-neutral-200/80 p-3.5 space-y-1.5 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                      <div className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-[#a0876e] font-heading">
                        Featured Explorations
                      </div>
                      {link.megaItems?.map((item, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleNavClick(item.tab)}
                          className="w-full text-left p-2.5 rounded-xl hover:bg-[#faf8f5] transition-colors group/item cursor-pointer"
                        >
                          <div className="text-xs font-semibold text-neutral-900 group-hover/item:text-[#288a61] flex items-center justify-between">
                            <span>{item.label}</span>
                            <ArrowRight className="w-3 h-3 text-neutral-400 group-hover/item:translate-x-0.5 transition-transform" />
                          </div>
                          <div className="text-[11px] text-neutral-500 line-clamp-1 font-sans mt-0.5">
                            {item.sub}
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right Header Actions: Modern Search + Premium Large CTA */}
          <div className="flex items-center gap-3">
            {/* Quick Search Trigger */}
            <button
              onClick={onOpenSearch}
              className="flex items-center gap-2 px-3.5 py-2 rounded-full border border-neutral-200/90 hover:border-neutral-300 bg-neutral-50 hover:bg-white text-xs text-neutral-600 transition-all cursor-pointer shadow-2xs group"
              aria-label="Search research archive"
            >
              <Search className="w-3.5 h-3.5 text-neutral-500 group-hover:text-[#a0876e] transition-colors" />
              <span className="hidden sm:inline font-sans text-xs">Search Catalog...</span>
              <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-mono font-medium text-neutral-400 bg-white border border-neutral-200 rounded">
                ⌘K
              </kbd>
            </button>

            {/* Primary Action Button (Large rounded button, hover elevation, animated arrow) */}
            <button
              onClick={onOpenRegister}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-white bg-[#288a61] hover:bg-[#1f6f4e] hover:shadow-md hover:-translate-y-0.5 transition-all shadow-xs cursor-pointer tracking-wider uppercase font-heading group"
            >
              <span>Academic Inquiry</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-neutral-700 hover:bg-neutral-100 cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* 3. Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-neutral-200 shadow-xl px-4 pt-3 pb-6 space-y-4">
          <div className="space-y-1">
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              const Icon = link.icon;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`w-full flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-semibold transition-colors ${
                    isActive
                      ? 'bg-[#288a61]/10 text-[#288a61]'
                      : 'text-neutral-700 hover:bg-neutral-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-4 h-4 ${isActive ? 'text-[#288a61]' : 'text-neutral-500'}`} />
                    <span className="font-heading">{link.label}</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-neutral-400" />
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-neutral-100 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenSearch) onOpenSearch();
              }}
              className="w-full py-2.5 px-4 rounded-full border border-neutral-200 text-xs font-semibold text-neutral-700 flex items-center justify-center gap-2 bg-neutral-50"
            >
              <Search className="w-3.5 h-3.5 text-neutral-500" />
              <span>Search 164+ Treatises & Symposia</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRegister();
              }}
              className="w-full py-3 px-4 rounded-full text-xs font-bold text-white bg-[#288a61] hover:bg-[#1f6f4e] uppercase tracking-wider font-heading flex items-center justify-center gap-2 shadow-xs"
            >
              <span>Contact Secretariat</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
