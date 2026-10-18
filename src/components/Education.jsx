import React from 'react';
import { GraduationCap, Calendar, Award, Building, BookOpen, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Education() {
  const { education } = portfolioData;

  const arcTags = ['MIDTOWN TECH ARC', 'PRE-UNIVERSITY ARC', 'SECONDARY ORIGIN'];

  return (
    <section id="education" className="py-24 relative overflow-hidden bg-[#07090f]/90">
      
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-red-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-block px-4 py-1 bg-[#e62429] text-white text-xs font-comic tracking-widest uppercase transform -skew-x-6 border border-black shadow-[3px_3px_0px_#000000] mb-3">
            CHAPTER 05 // ACADEMIC RIGOR
          </div>
          
          {/* Title: "TRAINING ARC" */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-comic tracking-wider uppercase text-white drop-shadow-[0_3px_0_#000000]">
            TRAINING <span className="text-[#e62429]">ARC</span>
          </h2>

          {/* Subtitle: "EDUCATION" */}
          <p className="mt-2 text-xl sm:text-2xl font-comic tracking-wider text-slate-300 uppercase">
            EDUCATION
          </p>

          <p className="mt-2 text-xs sm:text-sm font-mono text-slate-400 max-w-md">
            Academic foundation from secondary education to undergraduate AI &amp; Data Science engineering.
          </p>
          <div className="w-24 h-1.5 bg-[#e62429] shadow-[0_0_10px_#e62429] mt-4" />
        </div>

        {/* Web-Connected Timeline Graphics */}
        <div className="max-w-3xl mx-auto relative">
          
          {/* Main Web Cable Line */}
          <div className="absolute left-6 sm:left-10 top-4 bottom-4 w-[3px] bg-gradient-to-b from-[#e62429] via-[#ffffff] to-[#e62429] shadow-[0_0_8px_#e62429]" />

          <div className="space-y-10">
            {education.map((item, idx) => (
              <div key={idx} className="relative pl-16 sm:pl-24">
                
                {/* Spider Node Marker */}
                <div className="absolute left-6 sm:left-10 top-3 -translate-x-1/2 w-8 h-8 rounded-full bg-[#0c0e14] border-2 border-[#e62429] flex items-center justify-center shadow-[0_0_14px_#e62429] z-20">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#e62429] animate-pulse" />
                </div>

                {/* Comic Card */}
                <div className="comic-panel-red rounded-3xl p-6 sm:p-7 relative">
                  
                  {/* Arc Badge */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-4 border-b border-red-950">
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="font-comic text-xs tracking-wider text-[#e62429] px-2.5 py-0.5 rounded bg-red-950/70 border border-red-600/50 uppercase">
                          {arcTags[idx]}
                        </span>
                        <span className="font-mono text-xs text-slate-400">
                          &bull; {item.status}
                        </span>
                      </div>

                      <h3 className="font-comic text-xl sm:text-2xl tracking-wide uppercase text-white">
                        {item.degree}
                      </h3>

                      <div className="flex items-center gap-2 text-slate-300 text-sm mt-1">
                        <Building className="w-4 h-4 text-[#e62429]" />
                        <span>{item.institution}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 font-mono text-xs sm:text-sm text-white bg-[#07090e] px-3.5 py-1.5 rounded-xl border border-red-900/60 self-start sm:self-auto shrink-0 shadow-[2px_2px_0px_#e62429]">
                      <Calendar className="w-4 h-4 text-[#e62429]" />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  {/* Score & Highlights */}
                  <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#080a10] border border-red-950">
                      <Award className="w-4 h-4 text-amber-400" />
                      <span className="font-mono text-xs sm:text-sm font-bold text-amber-400">
                        {item.score}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                      <span>VERIFIED ACADEMIC RECORD</span>
                    </div>
                  </div>

                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
