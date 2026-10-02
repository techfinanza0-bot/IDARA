import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Calendar, MapPin, Award, Tag } from 'lucide-react';
import { GalleryPhoto } from '../data/organizationData.ts';

interface ConferencePhotoLightboxProps {
  photo: GalleryPhoto | null;
  photos: GalleryPhoto[];
  onClose: () => void;
  onSelectPhoto: (photo: GalleryPhoto) => void;
}

export const ConferencePhotoLightbox: React.FC<ConferencePhotoLightboxProps> = ({
  photo,
  photos,
  onClose,
  onSelectPhoto,
}) => {
  if (!photo) return null;

  const currentIndex = photos.findIndex((p) => p.id === photo.id);
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < photos.length - 1;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (hasPrev) onSelectPhoto(photos[currentIndex - 1]);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (hasNext) onSelectPhoto(photos[currentIndex + 1]);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && hasPrev) onSelectPhoto(photos[currentIndex - 1]);
      if (e.key === 'ArrowRight' && hasNext) onSelectPhoto(photos[currentIndex + 1]);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, hasPrev, hasNext, onClose, onSelectPhoto, photos]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200 select-none text-left"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full bg-[#191919] border border-stone-800 rounded-lg overflow-hidden shadow-2xl flex flex-col max-h-[95vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="p-4 px-6 border-b border-stone-800 flex items-center justify-between bg-[#121212] text-white">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded bg-[#a0876e] text-white text-xs font-bold font-heading uppercase tracking-wider">
              {photo.category}
            </span>
            {photo.conferenceNumber && (
              <span className="text-xs font-semibold text-stone-300 font-sans">
                {photo.conferenceNumber}th Annual Conference {photo.year ? `(${photo.year})` : ''}
              </span>
            )}
            <span className="text-[11px] text-stone-500 font-mono">
              {currentIndex + 1} of {photos.length}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-stone-400 hover:text-white hover:bg-stone-800 transition-colors cursor-pointer"
            aria-label="Close photo preview"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Main Photo Viewport */}
        <div className="relative flex-1 bg-black flex items-center justify-center min-h-[350px] max-h-[65vh] overflow-hidden">
          <img
            src={photo.imageUrl}
            alt={photo.title}
            className="max-h-[65vh] w-auto max-w-full object-contain mx-auto transition-transform duration-300"
            loading="lazy"
            referrerPolicy="no-referrer"
          />

          {/* Previous Button */}
          {hasPrev && (
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-[#a0876e] text-white transition-all cursor-pointer backdrop-blur-xs shadow-lg group"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
            </button>
          )}

          {/* Next Button */}
          {hasNext && (
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-[#a0876e] text-white transition-all cursor-pointer backdrop-blur-xs shadow-lg group"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
            </button>
          )}
        </div>

        {/* Photo Metadata Footer */}
        <div className="p-5 px-6 bg-[#161616] border-t border-stone-800 space-y-2 text-stone-300">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <h3 className="font-heading font-bold text-lg text-white">
              {photo.title}
            </h3>

            <div className="flex flex-wrap items-center gap-3 text-xs text-stone-400 font-sans">
              {photo.location && (
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#a0876e]" />
                  <span>{photo.location}</span>
                </span>
              )}
              {photo.year && (
                <span className="flex items-center gap-1 font-mono text-stone-300">
                  <Calendar className="w-3.5 h-3.5 text-[#a0876e]" />
                  <span>{photo.year}</span>
                </span>
              )}
            </div>
          </div>

          <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-sans">
            {photo.caption}
          </p>
        </div>
      </div>
    </div>
  );
};
