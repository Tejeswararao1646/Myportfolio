import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Shield, Award, MapPin, GraduationCap, Briefcase, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import tejaProfileImg from '../assets/teja-profile.png';

export default function About() {
  const { personalInfo } = portfolioData;

  const coreStrengths = [
    {
      title: "CORE ENGINEERING FOUNDATION",
      desc: "Strong algorithmic grounding in Python, Java, and modern web application development.",
      badge: "SKILL SET"
    },
    {
      title: "SCALABLE APPLICATION ARCHITECTURE",
      desc: "Dedicated to engineering real-world, scalable software that solves complex problems.",
      badge: "MISSION"
    },
    {
      title: "ADAPTIVE AI & ML PRACTITIONER",
      desc: "Quick learner with sharp analytical instincts, experienced in LLMs, Prompt Engineering, and APIs.",
      badge: "DISCIPLINE"
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#07090f]/80">
      
      {/* Spider-Web Graphics Background */}
      <div className="absolute -top-10 -left-10 w-72 h-72 pointer-events-none opacity-25">
        <svg viewBox="0 0 100 100" className="w-full h-full stroke-red-600 fill-none" strokeWidth="0.8">
          <circle cx="0" cy="0" r="30" />
          <circle cx="0" cy="0" r="60" />
          <circle cx="0" cy="0" r="90" />
          <line x1="0" y1="0" x2="100" y2="20" />
          <line x1="0" y1="0" x2="80" y2="60" />
          <line x1="0" y1="0" x2="40" y2="90" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title: "ORIGIN STORY" */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-block px-4 py-1 bg-[#e62429] text-white text-xs font-comic tracking-widest uppercase transform -skew-x-6 border border-black shadow-[3px_3px_0px_#000000] mb-3">
            CHAPTER 01 // THE BACKGROUND
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-comic tracking-wider uppercase text-white drop-shadow-[0_3px_0_#000000]">
            ORIGIN <span className="text-[#e62429]">STORY</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400 font-mono max-w-lg">
            "With great knowledge comes the responsibility to build real-world technology."
          </p>
          <div className="w-24 h-1.5 bg-[#e62429] shadow-[0_0_10px_#e62429] mt-4" />
        </div>

        {/* Comic-Book Panel Layout */}
        <div className="comic-panel-red rounded-3xl p-6 sm:p-10 relative">
          
          {/* Comic Panel Header Tape */}
          <div className="absolute -top-4 left-8 px-4 py-1 bg-[#e62429] text-white font-comic text-sm tracking-wider uppercase border border-black shadow-[2px_2px_0px_#000000] transform -rotate-1">
            SECRET IDENTITY DOSSIER // CLASSIFIED
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            
            {/* Left Side: Photo & Spider Visual Card */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div className="relative rounded-2xl overflow-hidden border-2 border-red-600/70 bg-[#0c0e14] shadow-[5px_5px_0px_0px_#e62429] p-3">
                
                {/* Photo Element */}
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-slate-950 border border-slate-800">
                  <img
                    src={tejaProfileImg}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Subtle red halftone vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07090f] via-transparent to-transparent opacity-80" />

                  {/* Comic Caption at bottom of photo */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-[#0c0e14]/90 border border-red-600/60 backdrop-blur-md">
                    <span className="font-comic text-xs text-[#e62429] tracking-widest uppercase block">
                      DEVELOPER IDENTITY
                    </span>
                    <span className="font-bold text-white text-sm sm:text-base tracking-tight block">
                      {personalInfo.name}
                    </span>
                    <span className="text-[11px] font-mono text-slate-300 block">
                      B.Tech AI &amp; DS &bull; SITAM Vizianagaram
                    </span>
                  </div>
                </div>

                {/* Identity Metadata Pills */}
                <div className="mt-3 grid grid-cols-2 gap-2 text-xs font-mono">
                  <div className="p-2 rounded-lg bg-[#07090f] border border-red-950 text-slate-300">
                    <span className="text-red-500 block text-[10px]">CURRENT BASE:</span>
                    <span>{personalInfo.location}</span>
                  </div>
                  <div className="p-2 rounded-lg bg-[#07090f] border border-red-950 text-slate-300">
                    <span className="text-red-500 block text-[10px]">ACADEMIC SCORE:</span>
                    <span className="text-amber-400 font-semibold">CGPA: 7.38 / 10</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Red Vertical Accent Line (Desktop) */}
            <div className="hidden lg:block lg:col-span-1 relative flex items-center justify-center">
              <div className="w-[3px] h-full bg-gradient-to-b from-[#e62429] via-[#e62429]/60 to-[#e62429] shadow-[0_0_8px_#e62429]" />
              <div className="absolute top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#0c0e14] border-2 border-[#e62429] flex items-center justify-center shadow-[0_0_12px_#e62429]">
                <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#e62429]" fill="currentColor">
                  <circle cx="12" cy="12" r="5" />
                </svg>
              </div>
            </div>

            {/* Right Side: Professional Introduction & Career Objective */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
              
              {/* Comic Speech / Narration Box */}
              <div className="relative p-6 rounded-2xl bg-[#090b12] border-2 border-red-900/60 shadow-[4px_4px_0px_#000000]">
                <div className="font-comic text-xs text-[#e62429] tracking-wider uppercase mb-2 flex items-center gap-2">
                  <Brain className="w-4 h-4 text-[#e62429]" />
                  <span>CAREER MISSION &amp; OBJECTIVE</span>
                </div>
                <p className="text-slate-100 text-sm sm:text-base leading-relaxed italic border-l-2 border-red-600 pl-3">
                  "{personalInfo.careerObjective}"
                </p>
              </div>

              {/* Verified Background Narrative */}
              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  Pursuing my Bachelor of Technology in <strong>Artificial Intelligence and Data Science</strong> at 
                  <span className="text-red-400 font-semibold"> Satya Institute of Technology and Management (SITAM)</span>, Vizianagaram (2023–2027). 
                  My academic journey is backed by a solid track record: <strong>86%</strong> in Intermediate (MPC) at Carmel Jr. College and <strong>100%</strong> in SSC at ZPHS School.
                </p>
                <p>
                  As a <strong>Generative AI Developer Intern</strong> at 
                  <span className="text-white font-semibold"> PixelWind Technologies</span> (April 2026 – June 2026), I harnessed LLMs, prompt engineering, and modern AI development tools to test, build, and deploy AI-powered solutions while integrating backend APIs to enhance live application functionality.
                </p>
              </div>

              {/* Three Core Strengths */}
              <div className="space-y-3 pt-2">
                {coreStrengths.map((item, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-[#0c0e16] border border-red-950/80 flex items-start gap-3">
                    <span className="px-2 py-0.5 rounded bg-red-950/70 border border-red-600/40 text-[10px] font-comic text-red-300 uppercase shrink-0 mt-0.5">
                      {item.badge}
                    </span>
                    <div>
                      <h4 className="font-comic text-sm tracking-wide text-white">{item.title}</h4>
                      <p className="text-xs text-slate-400 mt-0.5 leading-snug">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
