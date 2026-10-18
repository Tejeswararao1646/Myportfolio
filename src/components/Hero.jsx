import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight, Github, Linkedin, Sparkles } from 'lucide-react';
import SpiderSilhouette from './SpiderSilhouette';
import { portfolioData } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  const { personalInfo } = portfolioData;

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden">
      
      {/* Background Ambience & Red Motion Line */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-red-600/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#e62429]/25 to-transparent pointer-events-none" />

      {/* Spider-Man Comic Diagonal Accent Bar */}
      <div className="absolute top-20 right-0 w-72 h-1 bg-[#e62429] transform rotate-12 opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Comic Text & Actions */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center text-left"
          >
            {/* Top Tag: "TEJESWARARAO" */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="comic-badge text-sm sm:text-base font-comic">
                ISSUE #2026 // WEB-SLINGER
              </span>
              <span className="font-comic text-lg sm:text-xl text-[#e62429] tracking-widest uppercase">
                TEJESWARARAO
              </span>
            </div>

            {/* Main Heading: "SOFTWARE DEVELOPER" */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-comic tracking-tight uppercase leading-none text-white drop-shadow-[0_4px_0_#000000]">
              SOFTWARE <span className="text-[#e62429] drop-shadow-[0_4px_0_#991b1b]">DEVELOPER</span>
            </h1>

            {/* Subheading: "AI & ML ENTHUSIAST" */}
            <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-comic tracking-wider text-slate-200 uppercase flex items-center gap-3">
              <span>AI &amp; ML ENTHUSIAST</span>
              <span className="hidden sm:inline-block w-12 h-1 bg-[#e62429]" />
            </h2>

            {/* Short Introduction based on existing resume */}
            <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed border-l-4 border-[#e62429] pl-4 bg-red-950/20 py-2 rounded-r-lg">
              Building real-world applications with software development, artificial intelligence, and machine learning.
            </p>

            {/* Academic & Internship Pill Notes */}
            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs sm:text-sm font-mono text-slate-400">
              <span className="px-3 py-1 bg-[#0c0e14] border border-red-950 rounded-md text-red-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                B.Tech AI &amp; DS &bull; SITAM
              </span>
              <span className="px-3 py-1 bg-[#0c0e14] border border-red-950 rounded-md text-slate-300">
                PixelWind Technologies Intern
              </span>
              <span className="px-3 py-1 bg-[#0c0e14] border border-red-950 rounded-md text-slate-300">
                Srikakulam, India
              </span>
            </div>

            {/* Primary Buttons & Social Links */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              {/* Button 1: "VIEW MY WORK" */}
              <button
                onClick={() => scrollToSection('projects')}
                className="comic-btn-red px-6 py-3.5 rounded-xl text-lg sm:text-xl flex items-center gap-2 uppercase cursor-pointer"
              >
                <span>VIEW MY WORK</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              {/* Button 2: "DOWNLOAD RESUME" */}
              <button
                onClick={onOpenResume}
                className="comic-btn-black px-6 py-3.5 rounded-xl text-lg sm:text-xl flex items-center gap-2 uppercase cursor-pointer"
              >
                <Download className="w-5 h-5 text-[#e62429]" />
                <span>DOWNLOAD RESUME</span>
              </button>

              {/* GitHub and LinkedIn Icons with Comic Shadows */}
              <div className="flex items-center gap-3 sm:ml-2">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-[#0c0e14] border-2 border-[#e62429] flex items-center justify-center text-white hover:text-[#e62429] shadow-[3px_3px_0px_#e62429] hover:shadow-[5px_5px_0px_#ff1e27] hover:-translate-y-0.5 transition-all"
                  aria-label="GitHub Profile"
                  title="GitHub: Tejeswararao1646"
                >
                  <Github className="w-5 h-5" />
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-[#0c0e14] border-2 border-[#e62429] flex items-center justify-center text-white hover:text-[#e62429] shadow-[3px_3px_0px_#e62429] hover:shadow-[5px_5px_0px_#ff1e27] hover:-translate-y-0.5 transition-all"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Large Spider-Man Superhero Silhouette with Web Graphics */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <SpiderSilhouette />
          </div>

        </div>
      </div>
    </section>
  );
}
