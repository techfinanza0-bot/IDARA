import React, { useState } from 'react';
import { 
  Building2, 
  Award, 
  BookOpen, 
  GraduationCap, 
  CheckCircle2, 
  Globe2, 
  Calendar, 
  Users, 
  ArrowRight,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { motion } from 'motion/react';
import { 
  LEADERSHIP_MEMBERS, 
  FOUNDER_MEMBERS, 
  STRATEGIC_PILLARS, 
  KEY_OBJECTIVES,
  TESTIMONIALS_DATA,
  ScholarLeader 
} from '../data/organizationData.ts';
import { RazaEmblem } from './RazaEmblem.tsx';

interface AboutLeadershipSectionProps {
  onSelectScholar: (scholar: ScholarLeader) => void;
}

export const AboutLeadershipSection: React.FC<AboutLeadershipSectionProps> = ({
  onSelectScholar,
}) => {
  const [activePillarIndex, setActivePillarIndex] = useState(0);

  return (
    <div className="bg-[#fafbf9] text-stone-900 min-h-screen pb-24 text-left">
      
      {/* Corporate Page Banner with Imagery */}
      <section className="bg-[#161816] text-white relative overflow-hidden py-12 px-4 sm:px-6 border-b border-[#2d332e]">
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1800&q=80"
            alt="Library and Archives"
            className="w-full h-full object-cover"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#191919] via-[#191919]/95 to-[#242424]/90" />

        <div className="max-w-7xl mx-auto relative z-10 space-y-3">
          <div className="flex items-center gap-3">
            <RazaEmblem size={36} inverted={true} withBadge={true} />
            <span className="text-[11px] font-bold text-[#a0876e] uppercase tracking-wider font-heading">
              Chartered Research Academy · Est. 1400 AH / 1980 CE
            </span>
          </div>

          <h1 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-white">
            About the Academy & Leadership
          </h1>
          <p className="text-stone-300 text-base sm:text-lg max-w-3xl font-sans">
            Established in 1980 in Karachi, the Idara is Pakistan's premier chartered research institute 
            dedicated to preserving, analyzing, and publishing the intellectual works of Imam Ahmed Raza Khan Barelvi.
          </p>
        </div>
      </section>

      {/* Main Content Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 space-y-20">
        
        {/* 40-Year Review Section with Visual Feature */}
        <div className="bg-white rounded border border-[#eaeaec] p-6 sm:p-10 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold text-[#a0876e] uppercase tracking-widest font-heading">
                Scholarly Retrospective
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#020404]">
                Four Decades of Academic Rigor (1401–1440 AH / 1980–2019 CE)
              </h2>
              <p className="text-sm text-[#3f4245] leading-relaxed font-sans">
                Documented in the empirical survey by President Prof. Dr. Majeedullah Qadri, the Idara established 
                classical Islamic scholarship as a recognized peer-reviewed discipline across international universities.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-[#3f4245]">
                <div className="flex items-start gap-2.5 p-3 bg-[#faf8f5] rounded border border-[#eaeaec]">
                  <CheckCircle2 className="w-4 h-4 text-[#288a61] shrink-0 mt-0.5" />
                  <span>Annual international conferences hosted continuously across Pakistan since 1981</span>
                </div>
                <div className="flex items-start gap-2.5 p-3 bg-[#faf8f5] rounded border border-[#eaeaec]">
                  <CheckCircle2 className="w-4 h-4 text-[#288a61] shrink-0 mt-0.5" />
                  <span>Monthly research journal <em>Ma'arif-e-Raza</em> published uninterrupted for 25+ years</span>
                </div>
                <div className="flex items-start gap-2.5 p-3 bg-[#faf8f5] rounded border border-[#eaeaec]">
                  <CheckCircle2 className="w-4 h-4 text-[#288a61] shrink-0 mt-0.5" />
                  <span>Over 70 Ph.D. and M.Phil dissertations facilitated across international universities</span>
                </div>
                <div className="flex items-start gap-2.5 p-3 bg-[#faf8f5] rounded border border-[#eaeaec]">
                  <CheckCircle2 className="w-4 h-4 text-[#288a61] shrink-0 mt-0.5" />
                  <span>Treatises gifted to the Supreme Court, Parliament, and Al-Azhar University Cairo</span>
                </div>
              </div>
            </div>

            {/* Book Feature Visual Card */}
            <div className="lg:col-span-4 bg-[#faf8f5] p-6 rounded border border-[#eaeaec] shadow-2xs space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#a0876e] uppercase tracking-wider font-heading">
                  Primary Documentation
                </span>
                <BookOpen className="w-5 h-5 text-[#a0876e]" />
              </div>

              <div className="h-44 rounded overflow-hidden border border-[#eaeaec] relative group">
                <img
                  src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=600&q=80"
                  alt="40-Year Review"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
                <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white text-xs font-bold font-heading">
                  134 Pages · Centenary Edition
                </div>
              </div>

              <div>
                <h3 className="font-heading font-bold text-base text-[#020404]">
                  40 Sala Khidmat Ka Jaiza
                </h3>
                <p className="text-xs text-[#5c544d] mt-1 font-sans">
                  Authored by Prof. Dr. Majeedullah Qadri. Complete empirical register of 40 conferences, 164 books, 
                  and international Ph.D. awards.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Executive Leadership Cards */}
        <div className="space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-bold text-[#a0876e] uppercase tracking-widest font-heading">
              Current Executive Governance
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#020404]">
              Executive Leadership
            </h2>
            <p className="text-xs text-[#5c544d] font-sans max-w-2xl">
              Directing annual symposia, monthly peer-reviewed journals, and university research fellowships.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {LEADERSHIP_MEMBERS.map((leader) => (
              <div
                key={leader.id}
                className="bg-white rounded border border-[#eaeaec] p-6 sm:p-8 space-y-5 hover:border-[#a0876e] hover:shadow-xs transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#a0876e] font-heading bg-[#faf8f5] px-2.5 py-1 rounded border border-[#eaeaec]">
                        {leader.role}
                      </span>
                      <h3 className="font-heading text-2xl font-bold text-[#020404] mt-2">
                        {leader.name}
                      </h3>
                      {leader.designationHighlight && (
                        <p className="text-xs font-semibold text-[#5c544d] mt-0.5">
                          {leader.designationHighlight}
                        </p>
                      )}
                    </div>

                    <div className="w-14 h-14 rounded bg-[#191919] text-[#a0876e] border border-[#a0876e]/40 flex items-center justify-center font-heading font-bold text-xl shadow-2xs shrink-0">
                      {leader.name.split(' ').filter(n => !n.includes('.')).pop()?.charAt(0) || 'Q'}
                    </div>
                  </div>

                  <p className="text-xs text-[#5c544d] leading-relaxed font-sans">
                    {leader.summary}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-[#eaeaec] text-xs">
                    <span className="font-bold text-[#020404] block">Primary Roles & Impact:</span>
                    <ul className="space-y-1.5 text-[#5c544d]">
                      {leader.keyContributions.slice(0, 3).map((contrib, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#288a61] shrink-0 mt-1.5" />
                          <span>{contrib}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#eaeaec]">
                  <button
                    onClick={() => onSelectScholar(leader)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#3f4245] hover:text-[#a0876e] transition-colors cursor-pointer group uppercase tracking-wider font-heading"
                  >
                    <span>Read Full Profile & Academic Monograph</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Founder Members & Promoters */}
        <div className="space-y-6 pt-4 border-t border-[#eaeaec]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-bold text-[#a0876e] uppercase tracking-widest font-heading">
                Honored Forebears & Builders
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#020404]">
                Founder Members and Promoters
              </h2>
              <p className="text-xs text-[#5c544d] font-sans max-w-2xl">
                The founding jurists, university educators, and administrators who established ITIAR's foundational charter in 1980.
              </p>
            </div>
            
            <div className="text-xs font-mono text-[#5c544d]">
              Documented in ITIAR Charter 1986
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FOUNDER_MEMBERS.map((founder) => (
              <div
                key={founder.id}
                className="bg-white rounded border border-[#eaeaec] p-6 space-y-4 hover:border-[#a0876e] hover:shadow-2xs transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#a0876e] font-heading bg-[#faf8f5] px-2 py-0.5 rounded border border-[#eaeaec]">
                      {founder.role}
                    </span>
                    {founder.birthYear && (
                      <span className="text-[11px] font-mono text-[#5c544d]">
                        {founder.birthYear}–{founder.deathYear || 'Present'}
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className="font-heading text-lg font-bold text-[#020404]">
                      {founder.name}
                    </h3>
                    {founder.education && (
                      <p className="text-[11px] text-[#5c544d] mt-0.5 line-clamp-1 font-sans">
                        {founder.education}
                      </p>
                    )}
                  </div>

                  <p className="text-xs text-[#5c544d] line-clamp-2 leading-relaxed font-sans">
                    {founder.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#eaeaec] flex items-center justify-between">
                  <button
                    onClick={() => onSelectScholar(founder)}
                    className="text-xs font-bold text-[#3f4245] hover:text-[#a0876e] transition-colors cursor-pointer flex items-center gap-1 font-heading uppercase tracking-wider"
                  >
                    <span>View Biography</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-[10px] text-[#5c544d] uppercase tracking-wider font-heading">
                    Charter Roll
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Strategic Pillars Interactive System */}
        <div className="space-y-6 pt-4 border-t border-[#eaeaec]">
          <div className="space-y-1">
            <span className="text-xs font-bold text-[#a0876e] uppercase tracking-widest font-heading">
              Operational Framework
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#020404]">
              Three Strategic Pillars of the Academy
            </h2>
            <p className="text-xs text-[#5c544d] font-sans max-w-2xl">
              Global research mandates spanning international universities, publishing houses, and legislative archives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {STRATEGIC_PILLARS.map((pillar, idx) => {
              const isActive = activePillarIndex === idx;
              return (
                <button
                  key={pillar.number}
                  onClick={() => setActivePillarIndex(idx)}
                  className={`text-left p-6 rounded border transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#191919] text-white border-[#333333] shadow-xs'
                      : 'bg-white text-[#3f4245] border-[#eaeaec] hover:border-[#a0876e]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className={`font-heading text-2xl font-bold ${isActive ? 'text-[#a0876e]' : 'text-[#a0876e]'}`}>
                      {pillar.number}
                    </span>
                    <Globe2 className={`w-5 h-5 ${isActive ? 'text-[#a0876e]' : 'text-stone-400'}`} />
                  </div>
                  <h3 className="font-heading font-bold text-base mb-1">
                    {pillar.title}
                  </h3>
                  <p className={`text-xs ${isActive ? 'text-stone-300' : 'text-[#5c544d]'}`}>
                    {pillar.subtitle}
                  </p>
                </button>
              );
            })}
          </div>

          <div className="bg-white border border-[#eaeaec] rounded p-6 sm:p-8 space-y-4 shadow-2xs">
            <span className="text-xs font-bold text-[#a0876e] tracking-wider uppercase font-heading">
              Pillar {STRATEGIC_PILLARS[activePillarIndex].number} Focus
            </span>
            <h3 className="font-heading text-xl font-bold text-[#020404]">
              {STRATEGIC_PILLARS[activePillarIndex].title} — {STRATEGIC_PILLARS[activePillarIndex].subtitle}
            </h3>
            <p className="text-xs sm:text-sm text-[#3f4245] leading-relaxed font-sans">
              {STRATEGIC_PILLARS[activePillarIndex].description}
            </p>

            <div className="pt-4 border-t border-[#eaeaec]">
              <span className="text-xs font-bold text-[#5c544d] uppercase tracking-wider block mb-3 font-heading">
                Key Deliverables & Action Items
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {STRATEGIC_PILLARS[activePillarIndex].deliverables.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-[#3f4245] bg-[#faf8f5] p-3 rounded border border-[#eaeaec]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#288a61] shrink-0 mt-1.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* National Testimonials */}
        <div className="pt-4 border-t border-[#eaeaec] space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-bold text-[#a0876e] uppercase tracking-widest font-heading">
              National Recognition
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#020404]">
              Appraisals from Eminent Jurists and Academics
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TESTIMONIALS_DATA.map((t, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#eaeaec] rounded p-6 space-y-4 flex flex-col justify-between shadow-2xs"
              >
                <blockquote className="italic text-xs sm:text-sm text-[#3f4245] leading-relaxed font-sans">
                  "{t.quote}"
                </blockquote>
                <div className="pt-3 border-t border-[#eaeaec] text-xs">
                  <span className="font-heading font-bold text-[#020404] block text-sm">
                    {t.author}
                  </span>
                  <span className="text-[#5c544d] block">
                    {t.title}
                  </span>
                  <span className="text-[11px] text-[#5c544d] font-mono mt-0.5 block">
                    Citation: {t.source}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
