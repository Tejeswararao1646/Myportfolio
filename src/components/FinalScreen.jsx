import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function FinalScreen() {
  const { personalInfo } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="relative py-28 bg-[#040507] overflow-hidden border-t-2 border-red-950 flex flex-col items-center justify-center text-center">
      
      {/* Animated Spider-Web spreading across screen */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-25">
        <svg viewBox="0 0 800 800" className="w-[900px] h-[900px] stroke-red-600 fill-none filter drop-shadow-[0_0_15px_rgba(230,36,41,0.5)]" strokeWidth="1.2">
          {/* Animated concentric web rings */}
          {[80, 160, 240, 320, 400].map((radius, rIdx) => (
            <circle
              key={rIdx}
              cx="400"
              cy="400"
              r={radius}
              className="animate-web-draw"
              style={{ animationDelay: `${rIdx * 0.25}s` }}
            />
          ))}
          {/* Web spokes */}
          {[0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5, 180, 202.5, 225, 247.5, 270, 292.5, 315, 337.5].map((deg, i) => {
            const rad = (deg * Math.PI) / 180;
            return (
              <line
                key={i}
                x1="400"
                y1="400"
                x2={400 + Math.cos(rad) * 400}
                y2={400 + Math.sin(rad) * 400}
                stroke="#e62429"
                strokeWidth="1"
              />
            );
          })}
        </svg>
      </div>

      {/* Red Ambient Radial Glow */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-red-600/10 blur-[130px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
        
        {/* Spider Emblem */}
        <div className="w-14 h-14 rounded-2xl bg-[#0c0e14] border-2 border-[#e62429] flex items-center justify-center text-[#e62429] shadow-[4px_4px_0px_#e62429] mb-8">
          <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
            <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 17.93V15a1 1 0 0 0-2 0v4.93A8 8 0 0 1 4.07 13H9a1 1 0 0 0 0-2H4.07A8 8 0 0 1 11 4.07V9a1 1 0 0 0 2 0V4.07A8 8 0 0 1 19.93 11H15a1 1 0 0 0 0 2h4.93A8 8 0 0 1 13 19.93z"/>
          </svg>
        </div>

        {/* Text 1: "EVERY GREAT DEVELOPER HAS A STORY." */}
        <h3 className="font-comic text-2xl sm:text-3xl lg:text-4xl text-slate-300 tracking-wider uppercase mb-2">
          "EVERY GREAT DEVELOPER HAS A STORY."
        </h3>

        {/* Text 2: "THIS IS MINE." */}
        <h2 className="font-comic text-4xl sm:text-5xl lg:text-6xl text-[#e62429] tracking-wider uppercase drop-shadow-[0_4px_0_#000000] mb-4">
          THIS IS MINE.
        </h2>

        {/* Below it: "TEJESWARARAO" */}
        <div className="inline-block px-6 py-2 bg-[#e62429] text-white font-comic text-3xl sm:text-4xl lg:text-5xl uppercase tracking-widest transform -skew-x-6 border-2 border-black shadow-[5px_5px_0px_#ffffff] mb-8">
          TEJESWARARAO
        </div>

        <p className="text-xs sm:text-sm font-mono text-slate-400 max-w-md mb-8">
          Software Developer &bull; AI &amp; ML Enthusiast &bull; B.Tech Artificial Intelligence and Data Science (SITAM)
        </p>

        {/* GitHub and LinkedIn Icons */}
        <div className="flex items-center gap-4">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-xl bg-[#0c0e14] border-2 border-[#e62429] flex items-center justify-center text-white hover:text-[#e62429] shadow-[3px_3px_0px_#e62429] hover:shadow-[5px_5px_0px_#ff1e27] hover:-translate-y-1 transition-all"
            aria-label="GitHub Profile"
            title="GitHub: Tejeswararao1646"
          >
            <Github className="w-5 h-5" />
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-xl bg-[#0c0e14] border-2 border-[#e62429] flex items-center justify-center text-white hover:text-[#e62429] shadow-[3px_3px_0px_#e62429] hover:shadow-[5px_5px_0px_#ff1e27] hover:-translate-y-1 transition-all"
            aria-label="LinkedIn Profile"
            title="LinkedIn Profile"
          >
            <Linkedin className="w-5 h-5" />
          </a>

          <a
            href={`mailto:${personalInfo.email}`}
            className="w-12 h-12 rounded-xl bg-[#0c0e14] border-2 border-[#e62429] flex items-center justify-center text-white hover:text-[#e62429] shadow-[3px_3px_0px_#e62429] hover:shadow-[5px_5px_0px_#ff1e27] hover:-translate-y-1 transition-all"
            aria-label="Email"
            title="Direct Email"
          >
            <Mail className="w-5 h-5" />
          </a>

          <button
            onClick={scrollToTop}
            className="comic-btn-black px-4 py-3 rounded-xl text-sm flex items-center gap-1.5 uppercase ml-2 cursor-pointer"
            aria-label="Swing to Top"
            title="Swing Back to Top"
          >
            <ArrowUp className="w-4 h-4 text-[#e62429]" />
            <span>SWING TO TOP</span>
          </button>
        </div>

        {/* Footer Copyright */}
        <div className="mt-14 pt-6 border-t border-red-950/80 w-full text-center text-xs font-mono text-slate-500">
          <span>&copy; {new Date().getFullYear()} {personalInfo.name}. Inspired by the Spider-Man Universe. All resume facts verified.</span>
        </div>

      </div>
    </section>
  );
}
