import React, { useState } from 'react';
import { X, Image, Plus, Check } from 'lucide-react';
import { GalleryPhoto } from '../data/organizationData.ts';

interface AddPhotoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddPhoto: (photo: GalleryPhoto) => void;
}

export const AddPhotoModal: React.FC<AddPhotoModalProps> = ({
  isOpen,
  onClose,
  onAddPhoto,
}) => {
  const [form, setForm] = useState({
    title: '',
    category: 'Plenary Assembly',
    imageUrl: '',
    caption: '',
    conferenceNumber: '45',
    year: '2025',
    location: 'Karachi, Pakistan',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title.trim() || !form.imageUrl.trim()) {
      alert('Please provide a photo title and image URL.');
      return;
    }

    const newPhoto: GalleryPhoto = {
      id: `gal-custom-${Date.now()}`,
      title: form.title.trim(),
      category: form.category,
      imageUrl: form.imageUrl.trim(),
      caption: form.caption.trim() || form.title.trim(),
      conferenceNumber: Number(form.conferenceNumber) || undefined,
      year: Number(form.year) || undefined,
      location: form.location.trim() || undefined,
    };

    onAddPhoto(newPhoto);
    onClose();
  };

  const sampleImagePresets = [
    { label: 'Conference Hall Audience', url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1000&q=80' },
    { label: 'Keynote Stage', url: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1000&q=80' },
    { label: 'University Auditorium', url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80' },
    { label: 'Academic Convocation', url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1000&q=80' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-150 text-left">
      <div
        className="bg-white rounded max-w-lg w-full border border-[#eaeaec] shadow-2xl p-6 space-y-5"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-[#eaeaec] pb-3">
          <div className="flex items-center gap-2">
            <Image className="w-5 h-5 text-[#a0876e]" />
            <h3 className="font-heading font-bold text-lg text-[#020404]">
              Add Conference Photo to Archive
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded text-stone-400 hover:text-stone-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-[#020404] mb-1 font-heading">
              Photo Title *
            </label>
            <input
              type="text"
              placeholder="e.g. 45th Conference Plenary Session at Pearl Continental"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className="w-full px-3 py-2 text-xs bg-[#faf8f5] border border-[#eaeaec] rounded focus:outline-hidden focus:border-[#a0876e]"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-[#020404] mb-1 font-heading">
                Category
              </label>
              <select
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
                className="w-full px-3 py-2 text-xs bg-[#faf8f5] border border-[#eaeaec] rounded focus:outline-hidden focus:border-[#a0876e]"
              >
                <option value="Plenary Assembly">Plenary Assembly</option>
                <option value="Expert Panel">Expert Panel</option>
                <option value="Audience & Delegates">Audience & Delegates</option>
                <option value="Keynote Lecture">Keynote Lecture</option>
                <option value="Awards Ceremony">Awards Ceremony</option>
                <option value="Academic Symposia">Academic Symposia</option>
                <option value="Exhibition">Exhibition</option>
                <option value="Historic Archive">Historic Archive</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#020404] mb-1 font-heading">
                Conference Edition & Year
              </label>
              <div className="flex gap-2">
                <input
                  type="number"
                  placeholder="45"
                  value={form.conferenceNumber}
                  onChange={(e) => setForm({ ...form, conferenceNumber: e.target.value })}
                  className="w-1/2 px-2 py-2 text-xs bg-[#faf8f5] border border-[#eaeaec] rounded focus:outline-hidden focus:border-[#a0876e]"
                />
                <input
                  type="number"
                  placeholder="2025"
                  value={form.year}
                  onChange={(e) => setForm({ ...form, year: e.target.value })}
                  className="w-1/2 px-2 py-2 text-xs bg-[#faf8f5] border border-[#eaeaec] rounded focus:outline-hidden focus:border-[#a0876e]"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#020404] mb-1 font-heading">
              Photo URL *
            </label>
            <input
              type="url"
              placeholder="https://images.unsplash.com/..."
              value={form.imageUrl}
              onChange={(e) => setForm({ ...form, imageUrl: e.target.value })}
              className="w-full px-3 py-2 text-xs bg-[#faf8f5] border border-[#eaeaec] rounded focus:outline-hidden focus:border-[#a0876e]"
              required
            />
            {/* Quick preset selector */}
            <div className="flex flex-wrap gap-1.5 pt-1.5">
              <span className="text-[10px] text-stone-500 font-sans block w-full">Presets:</span>
              {sampleImagePresets.map((p, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setForm({ ...form, imageUrl: p.url })}
                  className="text-[10px] px-2 py-0.5 rounded bg-[#f4f4f5] hover:bg-stone-200 text-stone-700 font-sans"
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#020404] mb-1 font-heading">
              Location / Venue
            </label>
            <input
              type="text"
              placeholder="e.g. Pearl Continental Hotel, Karachi"
              value={form.location}
              onChange={(e) => setForm({ ...form, location: e.target.value })}
              className="w-full px-3 py-2 text-xs bg-[#faf8f5] border border-[#eaeaec] rounded focus:outline-hidden focus:border-[#a0876e]"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-[#020404] mb-1 font-heading">
              Caption / Historical Description
            </label>
            <textarea
              rows={2}
              placeholder="Detailed description of dignitaries, discussions, or awards in this photograph..."
              value={form.caption}
              onChange={(e) => setForm({ ...form, caption: e.target.value })}
              className="w-full px-3 py-2 text-xs bg-[#faf8f5] border border-[#eaeaec] rounded focus:outline-hidden focus:border-[#a0876e]"
            />
          </div>

          <div className="flex items-center justify-end gap-2 pt-2 border-t border-[#eaeaec]">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-[#5c544d] hover:bg-stone-100 rounded cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded text-xs font-bold text-white bg-[#288a61] hover:bg-[#1f6f4e] transition-colors cursor-pointer font-heading uppercase tracking-wider flex items-center gap-1.5"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Save to Photo Gallery</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
