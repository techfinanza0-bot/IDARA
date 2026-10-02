import React, { useState } from 'react';
import { X, Send, CheckCircle2, ShieldCheck, Mail, BookOpen, FileText } from 'lucide-react';
import { RazaEmblem } from './RazaEmblem.tsx';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultInquiryType?: string;
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({
  isOpen,
  onClose,
  defaultInquiryType = 'Academic Research Inquiry'
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    designation: '',
    institution: '',
    email: '',
    phone: '',
    inquiryType: defaultInquiryType,
    cityCountry: '',
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      designation: '',
      institution: '',
      email: '',
      phone: '',
      inquiryType: defaultInquiryType,
      cityCountry: '',
      message: ''
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div 
        className="bg-white rounded-xl max-w-2xl w-full max-h-[92vh] overflow-y-auto border border-stone-200 shadow-2xl p-6 sm:p-8 space-y-6 text-left relative"
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

        {/* Modal Header */}
        <div className="flex items-center gap-3.5 border-b border-[#eaeaec] pb-4">
          <RazaEmblem size={34} withBadge={true} />
          <div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#a0876e] font-heading block">
              Central Academic Secretariat
            </span>
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#020404]">
              Research Inquiries & Academic Correspondence
            </h3>
          </div>
        </div>

        {submitted ? (
          <div className="py-8 px-4 text-center space-y-4 bg-[#faf8f5] rounded border border-[#eaeaec]">
            <CheckCircle2 className="w-12 h-12 text-[#288a61] mx-auto" />
            <div className="space-y-1">
              <h3 className="font-heading text-2xl font-bold text-[#020404]">
                Inquiry Dispatched to Secretariat
              </h3>
              <p className="text-xs text-[#5c544d] max-w-md mx-auto leading-relaxed font-sans">
                Thank you, {formData.fullName}. Your correspondence regarding <span className="font-bold text-[#020404]">{formData.inquiryType}</span> has been logged with the Central Secretariat of Idara-e-Tahqeeqat-e-Imam Ahmed Raza. Our administrative team will respond to <span className="font-bold text-[#020404]">{formData.email}</span>.
              </p>
            </div>
            <div className="pt-2">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded text-xs font-bold bg-[#191919] text-[#a0876e] hover:bg-[#2c332f] transition-colors cursor-pointer uppercase tracking-wider font-heading border border-[#333333]"
              >
                Return to Site
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Secretariat Information Strip */}
            <div className="p-3.5 bg-[#faf8f5] rounded border border-[#eaeaec] text-xs text-[#3f4245] flex flex-wrap items-center justify-between gap-3 font-sans">
              <div>
                <span className="font-bold text-[#020404] block font-heading text-sm">
                  Idara-e-Tahqeeqat-e-Imam Ahmed Raza (Regd. 1980)
                </span>
                <span className="text-[#5c544d] text-xs">
                  Academic Research Guidance · Journal Subscriptions · Library Endowments · Conference Archives
                </span>
              </div>
              <div className="text-[11px] font-mono font-bold text-[#3f4245] bg-white px-2.5 py-1 rounded border border-[#eaeaec]">
                Official Portal
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans">
              <div className="space-y-1">
                <label className="font-semibold text-[#020404] block">
                  Full Name & Title <span className="text-[#a0876e]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Dr. / Prof. / Mufti / Mr. Name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3 py-2 bg-stone-50 border border-[#eaeaec] rounded focus:outline-hidden focus:border-[#a0876e]"
                />
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-[#020404] block">
                  Academic Designation / Profession
                </label>
                <input
                  type="text"
                  placeholder="e.g. Professor / Research Scholar / Mufti"
                  value={formData.designation}
                  onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                  className="w-full px-3 py-2 bg-stone-50 border border-[#eaeaec] rounded focus:outline-hidden focus:border-[#a0876e]"
                />
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-[#020404] block">
                  Affiliated University or Organization
                </label>
                <input
                  type="text"
                  placeholder="e.g. University of Karachi / Al-Azhar"
                  value={formData.institution}
                  onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                  className="w-full px-3 py-2 bg-stone-50 border border-[#eaeaec] rounded focus:outline-hidden focus:border-[#a0876e]"
                />
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-[#020404] block">
                  City and Country
                </label>
                <input
                  type="text"
                  placeholder="e.g. Karachi, Pakistan / London, UK"
                  value={formData.cityCountry}
                  onChange={(e) => setFormData({ ...formData, cityCountry: e.target.value })}
                  className="w-full px-3 py-2 bg-stone-50 border border-[#eaeaec] rounded focus:outline-hidden focus:border-[#a0876e]"
                />
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-[#020404] block">
                  Email Address <span className="text-[#a0876e]">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="scholar@university.edu"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 bg-stone-50 border border-[#eaeaec] rounded focus:outline-hidden focus:border-[#a0876e]"
                />
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-stone-800 block">
                  WhatsApp / Contact Number
                </label>
                <input
                  type="tel"
                  placeholder="+92 300 0000000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded focus:outline-hidden focus:border-stone-500"
                />
              </div>
            </div>

            <div className="space-y-1 text-xs font-sans">
              <label className="font-semibold text-stone-800 block">
                Purpose of Correspondence / Inquiry Type
              </label>
              <select
                value={formData.inquiryType}
                onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                className="w-full px-3 py-2.5 bg-stone-50 border border-stone-200 rounded focus:outline-hidden focus:border-stone-500 cursor-pointer font-sans"
              >
                <option value="Academic Research Inquiry">Academic Research Inquiry & Doctoral Guidance</option>
                <option value="Conference Proceedings Request">Conference Proceedings & Papers Request (45 Editions)</option>
                <option value="Call for Papers Submission">Upcoming Symposia Paper Submission</option>
                <option value="Maarif-e-Raza Subscription">Monthly Ma'arif-e-Raza Journal Subscription</option>
                <option value="Book and Library Order">Classical Treatises & Publications Catalog Order</option>
                <option value="Permanent Membership Program">Institutional / Permanent Membership Application</option>
              </select>
            </div>

            <div className="space-y-1 text-xs font-sans">
              <label className="font-semibold text-stone-800 block">
                Detailed Message / Paper Synopsis / Inquiries
              </label>
              <textarea
                rows={3}
                placeholder="State your specific requirements, thesis title, book requests, or institutional inquiries..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded focus:outline-hidden focus:border-stone-500 font-sans"
              />
            </div>

            <div className="pt-2 flex items-center justify-between border-t border-stone-100 font-sans">
              <div className="flex items-center gap-1.5 text-[11px] text-stone-500">
                <ShieldCheck className="w-4 h-4 text-[#a0876e]" />
                <span>Central Secretariat Archive · Karachi, Pakistan</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 rounded text-xs font-medium text-stone-600 hover:bg-stone-100 transition-colors cursor-pointer font-sans"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded text-xs font-bold text-white bg-[#288a61] hover:bg-[#1f6f4e] transition-colors shadow-2xs flex items-center gap-1.5 cursor-pointer font-heading uppercase tracking-wider"
                >
                  <span>Submit Inquiry</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
