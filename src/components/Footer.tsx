import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ArrowUp, 
  Send, 
  CheckCircle2, 
  Facebook, 
  Youtube, 
  Linkedin, 
  Instagram, 
  ShieldCheck, 
  ArrowRight,
  Clock,
  Building
} from 'lucide-react';
import { RazaEmblem } from './RazaEmblem.tsx';

interface FooterProps {
  onNavigate: (tab: string) => void;
  onOpenRegister: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenRegister }) => {
  const [email, setEmail] = useState('');
  const [academicRole, setAcademicRole] = useState('Faculty / Scholar');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubscribed(true);
    }, 500);
  };

  return (
    <footer className="bg-[#191919] text-stone-300 border-t-4 border-[#a0876e] text-left font-sans">
      {/* Tier 1: Academic Newsletter / Bulletin Sign-up (WordPress Institutional Box) */}
      <div className="border-b border-[#2d2d2d] bg-[#141414]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
          <div className="bg-[#202020] border border-[#333333] rounded-lg p-6 sm:p-8 lg:p-10 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Brief */}
              <div className="lg:col-span-6 space-y-2">
                <div className="text-[11px] uppercase tracking-widest text-[#a0876e] font-semibold font-heading">
                  Scholarly Communications & Journals Dispatch
                </div>
                
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Subscribe to <span className="text-[#a0876e]">Ma'arif-e-Raza</span> Academic Bulletin
                </h3>
                
                <p className="text-xs sm:text-sm text-stone-400 leading-relaxed max-w-xl">
                  Receive monthly peer-reviewed journal notices, newly cataloged monographs, doctoral thesis defense schedules, and annual conference proceedings.
                </p>
                
                <div className="flex items-center gap-4 text-xs text-stone-400 pt-1">
                  <span className="flex items-center gap-1.5 text-stone-300">
                    <ShieldCheck className="w-4 h-4 text-[#a0876e]" />
                    <span>8,500+ Registered Scholars</span>
                  </span>
                  <span>·</span>
                  <span>Monthly Digest</span>
                  <span>·</span>
                  <span>Official Academy Distribution</span>
                </div>
              </div>

              {/* Right Column: WordPress Form */}
              <div className="lg:col-span-6">
                {isSubscribed ? (
                  <div className="bg-[#191919] border border-[#333333] rounded-md p-6 text-center space-y-2">
                    <CheckCircle2 className="w-9 h-9 text-[#288a61] mx-auto" />
                    <h4 className="font-heading font-bold text-lg text-white">
                      Academic Subscription Confirmed
                    </h4>
                    <p className="text-xs text-stone-300">
                      Dispatches regarding <em>Ma'arif-e-Raza</em> and conference notifications will be transmitted to <strong>{email}</strong>.
                    </p>
                    <button
                      onClick={() => { setIsSubscribed(false); setEmail(''); }}
                      className="text-xs text-[#a0876e] hover:underline pt-1 cursor-pointer font-medium"
                    >
                      Subscribe an additional institutional email
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="space-y-3 bg-[#191919] p-4 sm:p-5 rounded-md border border-[#2d2d2d]">
                    <div className="flex flex-col sm:flex-row gap-2.5">
                      {/* Email Input */}
                      <div className="relative flex-1">
                        <Mail className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="scholar@university.edu.pk"
                          className="w-full pl-10 pr-3.5 py-2.5 text-xs text-white placeholder-stone-500 bg-[#252525] border border-[#3d3d3d] rounded focus:outline-hidden focus:border-[#a0876e] transition-colors"
                        />
                      </div>

                      {/* Academic Role Selector */}
                      <select
                        value={academicRole}
                        onChange={(e) => setAcademicRole(e.target.value)}
                        className="py-2.5 px-3 text-xs bg-[#252525] border border-[#3d3d3d] text-stone-200 rounded focus:outline-hidden focus:border-[#a0876e] cursor-pointer font-sans"
                      >
                        <option value="Faculty / Scholar">University Faculty / Dean</option>
                        <option value="Doctoral Scholar">Doctoral / Postgrad Researcher</option>
                        <option value="Seminary Scholar">Seminary / Madrasah Jurist</option>
                        <option value="Student">Student / General Academic</option>
                      </select>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-1">
                      <span className="text-[11px] text-stone-400 font-sans">
                        Protected under Academy statutory charter. No third-party disclosure.
                      </span>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full sm:w-auto px-5 py-2.5 rounded text-xs font-bold text-white bg-[#288a61] hover:bg-[#1f6f4e] transition-all uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer font-heading shrink-0"
                      >
                        <span>{isSubmitting ? 'Registering...' : 'Subscribe Bulletin'}</span>
                        <Send className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tier 2: Main WordPress Academic Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-14 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Column 1: Organization Identity & Mission (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-3.5">
              <RazaEmblem size={44} inverted={true} withBadge={true} />
              <div>
                <span className="font-heading font-bold text-base sm:text-lg text-white block leading-tight">
                  Idara-e-Tahqeeqat-e-Imam Ahmed Raza
                </span>
                <span className="text-[11px] text-[#a0876e] uppercase tracking-wider font-sans font-semibold">
                  Chartered Research Academy · Est. 1400 AH / 1980 CE
                </span>
              </div>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed">
              Established in Karachi under the Societies Registration Act XXI of 1860. 
              The Academy is dedicated to publishing, analyzing, and indexing the encyclopedic works of 
              Imam Ahmad Raza Khan across Islamic jurisprudence, monetary economics, astronomy, and philosophy.
            </p>

            {/* Official Academic Channels */}
            <div className="space-y-2 pt-1">
              <span className="text-[11px] uppercase tracking-wider text-stone-400 font-semibold font-heading block">
                Official Institutional Channels
              </span>
              <div className="flex items-center gap-2">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook Page"
                  className="w-8 h-8 rounded bg-[#252525] border border-[#3d3d3d] flex items-center justify-center text-stone-400 hover:text-white hover:border-[#a0876e] transition-colors"
                >
                  <Facebook className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="YouTube Channel"
                  className="w-8 h-8 rounded bg-[#252525] border border-[#3d3d3d] flex items-center justify-center text-stone-400 hover:text-white hover:border-[#a0876e] transition-colors"
                >
                  <Youtube className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn Profile"
                  className="w-8 h-8 rounded bg-[#252525] border border-[#3d3d3d] flex items-center justify-center text-stone-400 hover:text-white hover:border-[#a0876e] transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram Profile"
                  className="w-8 h-8 rounded bg-[#252525] border border-[#3d3d3d] flex items-center justify-center text-stone-400 hover:text-white hover:border-[#a0876e] transition-colors"
                >
                  <Instagram className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Academic Portals (2 cols) */}
          <div className="md:col-span-2 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#a0876e] font-heading block border-b border-stone-800 pb-2">
              Academic Portals
            </span>
            <ul className="space-y-2 text-xs text-stone-300">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-stone-500" />
                  <span>Home Portal</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('conferences')}
                  className="hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-stone-500" />
                  <span>Conferences Archive</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('publications')}
                  className="hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-stone-500" />
                  <span>Publications & Catalog</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-stone-500" />
                  <span>About & Leadership</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-stone-500" />
                  <span>Offices & Bureaus</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Publications & Research Repositories (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#a0876e] font-heading block border-b border-stone-800 pb-2">
              Research & Journals
            </span>
            <ul className="space-y-2.5 text-xs text-stone-300">
              <li>
                <button
                  onClick={() => onNavigate('publications')}
                  className="hover:text-[#a0876e] transition-colors cursor-pointer text-left block"
                >
                  <span className="font-semibold block text-white">Mahnama Ma'arif-e-Raza</span>
                  <span className="text-[11px] text-stone-400">Monthly continuous research for 25+ years</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('publications')}
                  className="hover:text-[#a0876e] transition-colors cursor-pointer text-left block"
                >
                  <span className="font-semibold block text-white">Salnama Ma'arif-e-Raza</span>
                  <span className="text-[11px] text-stone-400">Annual multilingual conference proceedings</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('publications')}
                  className="hover:text-[#a0876e] transition-colors cursor-pointer text-left block"
                >
                  <span className="font-semibold block text-white">Doctoral Scholars Registry</span>
                  <span className="text-[11px] text-stone-400">Over 50 Ph.D. dissertations & gold medals</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('publications')}
                  className="hover:text-[#a0876e] transition-colors cursor-pointer text-left block"
                >
                  <span className="font-semibold block text-white">164+ Cataloged Monographs</span>
                  <span className="text-[11px] text-stone-400">Available for university libraries</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Central Secretariat & Contact (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#a0876e] font-heading block border-b border-stone-800 pb-2">
              Central Secretariat
            </span>
            <div className="space-y-2 text-xs text-stone-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#a0876e] shrink-0 mt-0.5" />
                <span>
                  <strong>Karachi HQ:</strong> 25 Japan Mansion, Regal (Raza) Chowk, Preedy St, Saddar, Karachi-74400.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <Building className="w-3.5 h-3.5 text-stone-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Islamabad Bureau:</strong> Sector F-8, Federal Liaison Directorate.
                </span>
              </div>
              <div className="flex items-center gap-2 pt-0.5">
                <Phone className="w-3.5 h-3.5 text-[#a0876e] shrink-0" />
                <span>+92-21-32725150 / 32732369</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#a0876e] shrink-0" />
                <span>imamahmadraza@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-stone-400 text-[11px]">
                <Clock className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                <span>Library Hours: Mon–Sat 9:00 AM – 5:00 PM</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenRegister}
                className="w-full py-2.5 px-3 text-center rounded bg-[#252525] hover:bg-[#303030] border border-[#3d3d3d] text-stone-200 hover:text-white font-medium text-xs transition-colors cursor-pointer flex items-center justify-center gap-2 font-heading"
              >
                <span>Secretariat Inquiries Desk</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#a0876e]" />
              </button>
            </div>
          </div>

        </div>

        {/* Tier 3: Bottom Legal Bar */}
        <div className="mt-12 pt-6 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <div className="flex flex-wrap items-center gap-2 text-center sm:text-left">
            <span>© 1980–2026 Idara-e-Tahqeeqat-e-Imam Ahmed Raza (Regd.).</span>
            <span className="hidden sm:inline">·</span>
            <span className="text-stone-300">Regd. Under Societies Act XXI of 1860</span>
            <span className="hidden sm:inline">·</span>
            <span className="text-stone-400 font-mono">ISSN 2074-3254</span>
          </div>

          <div className="flex items-center gap-5">
            <button
              onClick={() => onNavigate('about')}
              className="hover:text-[#a0876e] transition-colors cursor-pointer"
            >
              Charter & Governance
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="hover:text-[#a0876e] transition-colors cursor-pointer"
            >
              Academic Research Access
            </button>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#252525] border border-[#3d3d3d] text-stone-300 hover:text-white hover:border-[#a0876e] transition-colors cursor-pointer text-xs"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#a0876e]" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
