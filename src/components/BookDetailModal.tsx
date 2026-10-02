import React from 'react';
import { X, BookOpen, Download, Globe, FileText, CheckCircle2 } from 'lucide-react';
import { PublishedWork } from '../data/organizationData.ts';

interface BookDetailModalProps {
  book: PublishedWork | null;
  onClose: () => void;
  onOpenRegister: () => void;
}

export const BookDetailModal: React.FC<BookDetailModalProps> = ({ book, onClose, onOpenRegister }) => {
  if (!book) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div 
        className="bg-white rounded max-w-xl w-full max-h-[90vh] overflow-y-auto border border-[#eaeaec] shadow-2xl p-6 sm:p-8 space-y-5 text-left relative"
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

        {/* Header */}
        <div className="space-y-1.5 border-b border-[#eaeaec] pb-4">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#a0876e] font-heading bg-[#faf8f5] px-2.5 py-0.5 rounded border border-[#eaeaec]">
              {book.category}
            </span>
            <span className="text-xs font-mono text-[#5c544d]">
              Published: {book.year}
            </span>
          </div>

          <h3 className="font-heading text-2xl font-bold text-[#020404]">
            {book.titleEnglish}
          </h3>

          <p className="text-base text-[#020404] font-bold leading-relaxed">
            {book.titleUrdu}
          </p>
        </div>

        {/* Bibliographic Data */}
        <div className="bg-[#faf8f5] rounded p-4 border border-[#eaeaec] space-y-1.5 text-xs text-[#5c544d] font-sans">
          <div className="flex justify-between">
            <span className="text-[#5c544d]">Author:</span>
            <span className="font-bold text-[#020404]">{book.author}</span>
          </div>
          {book.translatorOrEditor && (
            <div className="flex justify-between">
              <span className="text-[#5c544d]">Translator / Editor:</span>
              <span className="font-medium text-[#3f4245]">{book.translatorOrEditor}</span>
            </div>
          )}
          <div className="flex justify-between">
            <span className="text-[#5c544d]">Language(s):</span>
            <span className="font-medium text-[#3f4245]">{book.language}</span>
          </div>
          {book.pages && (
            <div className="flex justify-between">
              <span className="text-[#5c544d]">Extent:</span>
              <span className="font-medium text-[#3f4245] tabular-nums">{book.pages} Pages</span>
            </div>
          )}
          <div className="flex justify-between">
            <span className="text-[#5c544d]">Publisher:</span>
            <span className="font-medium text-[#3f4245]">Idara-e-Tahqeeqat-e-Imam Ahmed Raza, Karachi</span>
          </div>
        </div>

        {/* Description */}
        <div className="space-y-2 text-xs text-[#3f4245] leading-relaxed font-sans">
          <h4 className="font-heading font-bold text-[#020404] text-sm">
            Research Synopsis & Academic Scope
          </h4>
          <p className="bg-[#faf8f5] p-4 rounded border border-[#eaeaec]">
            {book.description}
          </p>
        </div>

        {/* CTAs */}
        <div className="pt-3 border-t border-[#eaeaec] flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={() => {
              onClose();
              onOpenRegister();
            }}
            className="px-4 py-2 text-xs font-bold text-white bg-[#288a61] hover:bg-[#1f6f4e] rounded transition-colors cursor-pointer uppercase tracking-wider font-heading"
          >
            Request Full Copy / Library Loan
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-[#3f4245] hover:bg-[#faf8f5] rounded transition-colors cursor-pointer"
          >
            Back to Catalog
          </button>
        </div>
      </div>
    </div>
  );
};
