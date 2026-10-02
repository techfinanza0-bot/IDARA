import React from 'react';
import { X, Award, BookOpen, GraduationCap, CheckCircle2 } from 'lucide-react';
import { ScholarLeader } from '../data/organizationData.ts';
import { RazaEmblem } from './RazaEmblem.tsx';

interface ScholarModalProps {
  scholar: ScholarLeader | null;
  onClose: () => void;
}

export const ScholarModal: React.FC<ScholarModalProps> = ({ scholar, onClose }) => {
  if (!scholar) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div 
        className="bg-white rounded max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-[#eaeaec] shadow-2xl p-6 sm:p-8 space-y-6 text-left relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 p-1.5 rounded-full text-stone-400 hover:text-stone-800 hover:bg-stone-100 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Scholar Header */}
        <div className="flex items-start gap-4 border-b border-[#eaeaec] pb-5">
          <div className="w-14 h-14 rounded bg-[#191919] text-[#a0876e] border border-[#a0876e]/40 flex items-center justify-center font-heading font-bold text-2xl shrink-0 shadow-xs">
            {scholar.name.split(' ').filter(n => !n.includes('.')).pop()?.charAt(0) || 'R'}
          </div>
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#a0876e] font-heading bg-[#faf8f5] px-2.5 py-0.5 rounded border border-[#eaeaec]">
                {scholar.role}
              </span>
              {scholar.birthYear && (
                <span className="text-xs font-mono text-[#5c544d]">
                  {scholar.birthYear}–{scholar.deathYear || 'Present'}
                </span>
              )}
            </div>
            <h3 className="font-heading text-2xl font-bold text-[#020404] flex items-center gap-2">
              <span>{scholar.name}</span>
              {scholar.arabicHonorific && (
                <span className="text-xs font-normal text-[#5c544d] font-sans">
                  ({scholar.arabicHonorific})
                </span>
              )}
            </h3>
            {scholar.education && (
              <p className="text-xs text-[#5c544d] font-sans">
                {scholar.education}
              </p>
            )}
          </div>
        </div>

        {/* Monograph Narrative */}
        <div className="space-y-3 text-xs text-[#3f4245] leading-relaxed font-sans">
          <h4 className="font-heading font-bold text-[#020404] text-sm">
            Biographical Monograph & Research Career
          </h4>
          <div className="whitespace-pre-line bg-[#faf8f5] p-4 rounded border border-[#eaeaec]">
            {scholar.fullBio}
          </div>
        </div>

        {/* Key Contributions List */}
        <div className="space-y-2 text-xs">
          <h4 className="font-heading font-bold text-[#020404] text-sm">
            Institutional Impact & Key Contributions
          </h4>
          <ul className="space-y-1.5 text-[#3f4245]">
            {scholar.keyContributions.map((c, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#288a61] shrink-0 mt-0.5" />
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Major Works if available */}
        {scholar.majorWorks && scholar.majorWorks.length > 0 && (
          <div className="space-y-2 text-xs pt-2 border-t border-[#eaeaec]">
            <h4 className="font-heading font-bold text-[#020404] text-sm">
              Authored Publications & Critical Treatises
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {scholar.majorWorks.map((work, i) => (
                <div key={i} className="p-2 bg-[#faf8f5] rounded border border-[#eaeaec] text-[#3f4245] flex items-center gap-2">
                  <BookOpen className="w-3.5 h-3.5 text-[#5c544d] shrink-0" />
                  <span className="truncate">{work}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="pt-4 border-t border-[#eaeaec] flex items-center justify-between">
          <div className="flex items-center gap-2.5 text-[11px] text-[#5c544d] font-sans">
            <RazaEmblem size={20} />
            <span>Idara-e-Tahqeeqat-e-Imam Ahmed Raza Archive</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded text-xs font-semibold text-[#3f4245] hover:bg-[#faf8f5] transition-colors cursor-pointer font-sans"
          >
            Close Biography
          </button>
        </div>
      </div>
    </div>
  );
};
