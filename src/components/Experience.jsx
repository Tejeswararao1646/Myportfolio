import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, Building2, CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-[#07090f]/90">
      
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-red-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-block px-4 py-1 bg-[#e62429] text-white text-xs font-comic tracking-widest uppercase transform -skew-x-6 border border-black shadow-[3px_3px_0px_#000000] mb-3">
            CHAPTER 03 // FIELD OPERATIONS
          </div>
          
          {/* Title: "THE JOURNEY" */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-comic tracking-wider uppercase text-white drop-shadow-[0_3px_0_#000000]">
            THE <span className="text-[#e62429]">JOURNEY</span>
          </h2>

          {/* Subtitle: "EXPERIENCE" */}
          <p className="mt-2 text-xl sm:text-2xl font-comic tracking-wider text-slate-300 uppercase">
            EXPERIENCE
          </p>

          <p className="mt-2 text-xs sm:text-sm font-mono text-slate-400 max-w-md">
            Professional industry exposure and contributions in Generative AI and software development.
          </p>
          <div className="w-24 h-1.5 bg-[#e62429] shadow-[0_0_10px_#e62429] mt-4" />
        </div>

        {/* Vertical Spider-Web Timeline */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Spider-Man Web Line (Vertical Track) */}
          <div className="absolute left-6 sm:left-10 top-4 bottom-4 w-[3px] bg-gradient-to-b from-[#e62429] via-[#ffffff] to-[#e62429] shadow-[0_0_8px_#e62429]" />

          {/* Decorative Web Lines Radiating from Track */}
          <div className="absolute left-6 sm:left-10 top-1/4 w-12 h-[1px] bg-[#e62429]/40 pointer-events-none" />
          <div className="absolute left-6 sm:left-10 top-2/3 w-16 h-[1px] bg-[#ffffff]/30 pointer-events-none" />

          {experience.map((item, idx) => (
            <div key={idx} className="relative pl-16 sm:pl-24 mb-10 last:mb-0">
              
              {/* Spider/Web Timeline Node */}
              <div className="absolute left-6 sm:left-10 top-3 -translate-x-1/2 w-8 h-8 rounded-full bg-[#0c0e14] border-2 border-[#e62429] flex items-center justify-center shadow-[0_0_14px_#e62429] z-20">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#e62429] animate-pulse" fill="currentColor">
                  <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 17.93V15a1 1 0 0 0-2 0v4.93A8 8 0 0 1 4.07 13H9a1 1 0 0 0 0-2H4.07A8 8 0 0 1 11 4.07V9a1 1 0 0 0 2 0V4.07A8 8 0 0 1 19.93 11H15a1 1 0 0 0 0 2h4.93A8 8 0 0 1 13 19.93z"/>
                </svg>
              </div>

              {/* Comic-Book Timeline Card */}
              <div className="comic-panel-red rounded-3xl p-6 sm:p-8 relative">
                
                {/* Comic Badge Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-red-950">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded bg-red-950/80 border border-red-600/60 font-comic text-xs tracking-wider text-red-300 uppercase mb-2">
                      <Sparkles className="w-3.5 h-3.5 text-[#e62429]" />
                      <span>MISSION TIMELINE</span>
                    </div>

                    <h3 className="font-comic text-2xl sm:text-3xl tracking-wide uppercase text-white">
                      {item.role}
                    </h3>

                    <div className="flex items-center gap-2 text-slate-300 font-semibold text-sm sm:text-base mt-1">
                      <Building2 className="w-4 h-4 text-[#e62429]" />
                      <span>{item.company}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 font-mono text-xs sm:text-sm text-white bg-[#07090e] px-4 py-2 rounded-xl border border-red-900/60 self-start sm:self-center shadow-[3px_3px_0px_#e62429]">
                    <Calendar className="w-4 h-4 text-[#e62429]" />
                    <span>{item.period}</span>
                  </div>
                </div>

                {/* Resume Responsibilities */}
                <div className="mt-6">
                  <h4 className="font-comic text-xs uppercase tracking-widest text-[#e62429] mb-4">
                    MISSION ACCOMPLISHMENTS &bull; DIRECT BULLETS:
                  </h4>
                  <ul className="space-y-3.5">
                    {item.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-3.5 text-slate-200 text-sm sm:text-base">
                        <div className="w-5 h-5 rounded bg-red-950 border border-red-600 flex items-center justify-center shrink-0 mt-0.5 shadow-[2px_2px_0px_#000000]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                        </div>
                        <span className="leading-relaxed">
                          {resp}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Focus Badges */}
                <div className="mt-6 pt-5 border-t border-red-950/80 flex flex-wrap items-center gap-2">
                  <span className="font-comic text-xs uppercase text-slate-400 mr-2">TECH FOCUS:</span>
                  <span className="px-3 py-1 rounded bg-[#090b12] text-xs font-mono text-red-300 border border-red-950">
                    Large Language Models (LLMs)
                  </span>
                  <span className="px-3 py-1 rounded bg-[#090b12] text-xs font-mono text-white border border-red-950">
                    Prompt Engineering
                  </span>
                  <span className="px-3 py-1 rounded bg-[#090b12] text-xs font-mono text-red-300 border border-red-950">
                    AI Development Tools
                  </span>
                  <span className="px-3 py-1 rounded bg-[#090b12] text-xs font-mono text-white border border-red-950">
                    API Integration
                  </span>
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
