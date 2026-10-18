import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send, Copy, Check, MessageSquare } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { personalInfo } = portfolioData;

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [copiedField, setCopiedField] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitted(true);
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      `Developer Inquiry from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Hi Tejeswararao,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
    )}`;
    window.location.href = mailtoUrl;

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 5000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#050609]">
      
      {/* Large Spider-Man Web Graphic Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
        <svg viewBox="0 0 600 600" className="w-[700px] h-[700px] stroke-red-600 fill-none" strokeWidth="1">
          {[50, 100, 160, 230, 300].map((r, idx) => (
            <circle key={idx} cx="300" cy="300" r={r} />
          ))}
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg, idx) => {
            const rad = (deg * Math.PI) / 180;
            return (
              <line
                key={idx}
                x1="300"
                y1="300"
                x2={300 + Math.cos(rad) * 300}
                y2={300 + Math.sin(rad) * 300}
              />
            );
          })}
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-block px-4 py-1 bg-[#e62429] text-white text-xs font-comic tracking-widest uppercase transform -skew-x-6 border border-black shadow-[3px_3px_0px_#000000] mb-3">
            CHAPTER 06 // SEND UP THE SPIDER-SIGNAL
          </div>
          
          {/* Title: "NEED A DEVELOPER?" */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-comic tracking-wider uppercase text-white drop-shadow-[0_3px_0_#000000]">
            NEED A <span className="text-[#e62429]">DEVELOPER?</span>
          </h2>

          {/* Subtitle: "LET'S CONNECT" */}
          <p className="mt-2 text-xl sm:text-2xl font-comic tracking-wider text-slate-300 uppercase">
            LET'S CONNECT
          </p>

          <p className="mt-2 text-xs sm:text-sm font-mono text-slate-400 max-w-md">
            Available for software developer roles, internship opportunities, and innovative AI engineering projects.
          </p>
          <div className="w-24 h-1.5 bg-[#e62429] shadow-[0_0_10px_#e62429] mt-4" />
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Dossier Channels */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="comic-panel rounded-2xl p-5 border-2 border-red-950 flex items-center justify-between group hover:border-[#e62429] transition-all shadow-[4px_4px_0px_0px_rgba(230,36,41,0.2)]">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#090b12] border-2 border-[#e62429] flex items-center justify-center text-[#e62429] shrink-0 shadow-[2px_2px_0px_#e62429]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-comic text-xs uppercase text-slate-400 tracking-wider block">EMAIL TRANSMISSION</span>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-sm sm:text-base font-bold text-white hover:text-[#e62429] transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy(personalInfo.email, 'email')}
                className="p-2.5 rounded-lg bg-[#0c0e14] border border-red-950 text-slate-300 hover:text-white cursor-pointer"
                title="Copy Email"
              >
                {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="comic-panel rounded-2xl p-5 border-2 border-red-950 flex items-center justify-between group hover:border-[#e62429] transition-all shadow-[4px_4px_0px_0px_rgba(230,36,41,0.2)]">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#090b12] border-2 border-[#e62429] flex items-center justify-center text-[#e62429] shrink-0 shadow-[2px_2px_0px_#e62429]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-comic text-xs uppercase text-slate-400 tracking-wider block">DIRECT COMM LINE</span>
                  <a
                    href={`tel:${personalInfo.phone.replace(/[^+\d]/g, '')}`}
                    className="text-sm sm:text-base font-bold text-white hover:text-[#e62429] transition-colors"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy(personalInfo.phone, 'phone')}
                className="p-2.5 rounded-lg bg-[#0c0e14] border border-red-950 text-slate-300 hover:text-white cursor-pointer"
                title="Copy Phone"
              >
                {copiedField === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location Card */}
            <div className="comic-panel rounded-2xl p-5 border-2 border-red-950 flex items-center justify-between shadow-[4px_4px_0px_0px_rgba(230,36,41,0.2)]">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#090b12] border-2 border-[#e62429] flex items-center justify-center text-[#e62429] shrink-0 shadow-[2px_2px_0px_#e62429]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-comic text-xs uppercase text-slate-400 tracking-wider block">HEADQUARTERS</span>
                  <span className="text-sm sm:text-base font-bold text-white">
                    {personalInfo.location}
                  </span>
                </div>
              </div>
              <span className="font-mono text-xs text-red-400 px-2.5 py-1 rounded bg-red-950/40 border border-red-900">
                INDIA (IST)
              </span>
            </div>

            {/* Network Dossier Links */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="comic-panel p-4 rounded-2xl border-2 border-red-950 hover:border-[#e62429] flex items-center gap-3 group shadow-[4px_4px_0px_0px_#000000] hover:-translate-y-1 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-[#07090e] border border-red-900 flex items-center justify-center text-white group-hover:text-[#e62429]">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-comic text-xs text-slate-400 block uppercase">GITHUB</span>
                  <span className="font-mono text-xs text-white font-bold truncate block">Tejeswararao1646</span>
                </div>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="comic-panel p-4 rounded-2xl border-2 border-red-950 hover:border-[#e62429] flex items-center gap-3 group shadow-[4px_4px_0px_0px_#000000] hover:-translate-y-1 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-[#07090e] border border-red-900 flex items-center justify-center text-white group-hover:text-[#e62429]">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-comic text-xs text-slate-400 block uppercase">LINKEDIN</span>
                  <span className="font-mono text-xs text-white font-bold truncate block">tejeswararao-gorle</span>
                </div>
              </a>
            </div>

          </div>

          {/* Right Column: Comic Action Contact Form */}
          <div className="lg:col-span-7">
            <div className="comic-panel-red rounded-3xl p-6 sm:p-8 relative">
              
              <div className="pb-4 mb-6 border-b border-red-950">
                <span className="comic-badge text-xs font-comic mb-1">
                  DIRECT TRANSMISSION
                </span>
                <h3 className="font-comic text-2xl sm:text-3xl text-white uppercase tracking-wide mt-1">
                  DISPATCH A MESSAGE
                </h3>
                <p className="text-xs font-mono text-slate-400 mt-1">
                  Send an opportunity, inquiry, or software challenge.
                </p>
              </div>

              {submitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-950/60 border border-emerald-500 text-emerald-300 font-mono text-xs sm:text-sm flex items-center gap-3">
                  <Check className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Your email client is opening with your formatted dispatch to {personalInfo.email}.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block font-comic text-xs tracking-wider text-slate-300 uppercase mb-1">
                    NAME
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name / organization"
                    className="w-full px-4 py-3 rounded-xl bg-[#07090e] border-2 border-red-950 text-white font-sans text-sm focus:outline-none focus:border-[#e62429] transition-all"
                  />
                </div>

                <div>
                  <label className="block font-comic text-xs tracking-wider text-slate-300 uppercase mb-1">
                    EMAIL
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@organization.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#07090e] border-2 border-red-950 text-white font-sans text-sm focus:outline-none focus:border-[#e62429] transition-all"
                  />
                </div>

                <div>
                  <label className="block font-comic text-xs tracking-wider text-slate-300 uppercase mb-1">
                    MESSAGE
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your role requirements, project opportunity, or inquiry..."
                    className="w-full px-4 py-3 rounded-xl bg-[#07090e] border-2 border-red-950 text-white font-sans text-sm focus:outline-none focus:border-[#e62429] transition-all resize-y"
                  />
                </div>

                {/* Red Comic-Book Action Button: "SEND MESSAGE" */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="comic-btn-red w-full sm:w-auto px-8 py-3.5 rounded-xl text-lg sm:text-xl flex items-center justify-center gap-2 uppercase cursor-pointer"
                  >
                    <Send className="w-5 h-5" />
                    <span>SEND MESSAGE</span>
                  </button>
                </div>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
