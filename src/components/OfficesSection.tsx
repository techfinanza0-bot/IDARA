import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Building, ShieldCheck, Sparkles } from 'lucide-react';
import { OFFICE_LOCATIONS } from '../data/organizationData.ts';

export const OfficesSection: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    designation: '',
    institution: '',
    email: '',
    phone: '',
    inquiryType: 'General Academic Inquiry',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) return;
    setFormSubmitted(true);
  };

  return (
    <div className="bg-[#fafbf9] text-stone-900 min-h-screen pb-24 text-left">
      
      {/* Corporate Page Banner */}
      <section className="bg-[#161816] text-white relative overflow-hidden py-12 px-4 sm:px-6 border-b border-[#2d332e]">
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1800&q=80"
            alt="Offices & Secretariats"
            className="w-full h-full object-cover"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#191919] via-[#191919]/95 to-[#242424]/90" />

        <div className="max-w-7xl mx-auto relative z-10 space-y-3">
          <span className="text-[11px] font-bold text-[#a0876e] uppercase tracking-wider font-heading block">
            Dual Secretariat Network · Karachi & Islamabad
          </span>

          <h1 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Secretariat Bureaus & Inquiries
          </h1>
          <p className="text-stone-300 text-base sm:text-lg max-w-3xl font-sans">
            Direct channels to the Karachi Central Secretariat and Islamabad Federal Bureau for conferences, research archives, and membership.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 space-y-12">
        
        {/* Dual Secretariat Offices Cards (Karachi & Islamabad) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {OFFICE_LOCATIONS.map((loc, idx) => (
            <div
              key={idx}
              className="bg-white rounded border border-[#eaeaec] p-6 sm:p-8 space-y-6 shadow-2xs hover:border-[#a0876e] transition-colors flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-[#eaeaec] pb-3">
                  <div className="flex items-center gap-2">
                    <Building className="w-5 h-5 text-[#a0876e]" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#a0876e] font-heading">
                      {idx === 0 ? 'Central Headquarters' : 'Federal Liaison Office'}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-[#5c544d]">
                    Ref: {idx === 0 ? 'KHI-SEC-01' : 'ISB-DIR-02'}
                  </span>
                </div>

                <h2 className="font-heading text-2xl font-bold text-[#020404]">
                  {loc.city}
                </h2>

                <div className="space-y-3.5 text-xs text-[#5c544d] font-sans">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#a0876e] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-[#020404] block font-heading">Postal Address</span>
                      <span className="text-[#3f4245] leading-relaxed">{loc.address}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-[#a0876e] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-[#020404] block font-heading">Telephone & Fax</span>
                      <span className="text-[#3f4245]">{loc.phone} {loc.fax && `· Fax: ${loc.fax}`}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-[#a0876e] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-[#020404] block font-heading">Electronic Mail</span>
                      <a href={`mailto:${loc.email}`} className="text-[#a0876e] hover:underline font-semibold">
                        {loc.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-[#a0876e] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-[#020404] block font-heading">Secretariat Working Hours</span>
                      <span className="text-[#3f4245]">{loc.hours}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#eaeaec] text-xs text-[#5c544d] bg-[#faf8f5] p-3.5 rounded border border-[#eaeaec]">
                <span className="font-bold text-[#020404] block mb-0.5 font-heading">Facilities on Site:</span>
                {loc.notes}
              </div>
            </div>
          ))}
        </div>

        {/* Academic Inquiries Form */}
        <div className="bg-white rounded border border-[#eaeaec] p-6 sm:p-10 shadow-2xs">
          <div className="max-w-3xl space-y-2 mb-8">
            <span className="text-xs font-bold text-[#a0876e] uppercase tracking-widest font-heading">
              Official Correspondence & Conference Registration
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#020404]">
              Submit Academic Query or Registration Request
            </h2>
            <p className="text-xs text-[#5c544d] font-sans leading-relaxed">
              Researchers, delegates, universities, and library curators are invited to reach the secretariat directly.
            </p>
          </div>

          {formSubmitted ? (
            <div className="p-8 bg-[#faf8f5] rounded border border-[#eaeaec] text-center space-y-3 max-w-xl mx-auto">
              <CheckCircle2 className="w-12 h-12 text-[#288a61] mx-auto" />
              <h3 className="font-heading text-2xl font-bold text-[#020404]">
                Correspondence Logged
              </h3>
              <p className="text-xs text-[#3f4245] leading-relaxed font-sans">
                Thank you, {formData.fullName}. Your submission regarding "{formData.inquiryType}" has been received 
                at the Karachi Central Secretariat. A response will be sent to <span className="font-bold">{formData.email}</span>.
              </p>
              <button
                onClick={() => {
                  setFormSubmitted(false);
                  setFormData({
                    fullName: '',
                    designation: '',
                    institution: '',
                    email: '',
                    phone: '',
                    inquiryType: 'General Academic Inquiry',
                    message: ''
                  });
                }}
                className="mt-4 px-5 py-2.5 rounded text-xs font-bold bg-[#191919] text-[#a0876e] border border-[#333333] hover:bg-[#222724] transition-colors cursor-pointer uppercase tracking-wider font-heading"
              >
                Send Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 max-w-4xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#020404] block font-heading">
                    Full Name <span className="text-[#a0876e]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Dr. Muhammad Arif"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-[#faf8f5] border border-[#eaeaec] rounded focus:outline-hidden focus:border-[#a0876e]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#020404] block font-heading">
                    Academic Designation
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Professor / Senior Researcher"
                    value={formData.designation}
                    onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-[#faf8f5] border border-[#eaeaec] rounded focus:outline-hidden focus:border-[#a0876e]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#020404] block font-heading">
                    Affiliated Institution or University
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. University of Karachi / IIUI"
                    value={formData.institution}
                    onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-[#faf8f5] border border-[#eaeaec] rounded focus:outline-hidden focus:border-[#a0876e]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#020404] block font-heading">
                    Email Address <span className="text-[#a0876e]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="scholar@university.edu.pk"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-[#faf8f5] border border-[#eaeaec] rounded focus:outline-hidden focus:border-[#a0876e]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#020404] block font-heading">
                    WhatsApp or Contact Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+92 300 1234567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-[#faf8f5] border border-[#eaeaec] rounded focus:outline-hidden focus:border-[#a0876e]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#020404] block font-heading">
                    Purpose of Correspondence
                  </label>
                  <select
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-[#faf8f5] border border-[#eaeaec] rounded focus:outline-hidden focus:border-[#a0876e] cursor-pointer"
                  >
                    <option value="General Academic Inquiry">General Academic Research Inquiry</option>
                    <option value="Conference Proceedings Request">Conference Proceedings & Papers Request (45 Editions)</option>
                    <option value="Academic Paper Submission">Upcoming Symposia Paper Submission</option>
                    <option value="Permanent Membership Program">Permanent Membership Program</option>
                    <option value="Journal Subscription">Monthly Ma'arif-e-Raza Subscription</option>
                    <option value="Library Book Request">Book Catalog Purchase or Academic Library Endowment</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-[#020404] block font-heading">
                  Detailed Message / Paper Synopsis
                </label>
                <textarea
                  rows={4}
                  placeholder="Please provide specifics regarding your research discipline, delegation details, or inquiry..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs bg-[#faf8f5] border border-[#eaeaec] rounded focus:outline-hidden focus:border-[#a0876e]"
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                <div className="text-[11px] text-[#5c544d] flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#a0876e]" />
                  <span>Your academic correspondence is maintained strictly confidential.</span>
                </div>

                <button
                  type="submit"
                  className="px-6 py-3 text-xs font-bold text-white bg-[#288a61] hover:bg-[#1f6f4e] rounded transition-colors shadow-2xs flex items-center justify-center gap-2 uppercase tracking-wider cursor-pointer font-heading"
                >
                  <span>Submit to Secretariat</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
