import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Layout, 
  Server, 
  Cpu, 
  Wrench, 
  Sparkles, 
  BrainCircuit, 
  Database,
  GitBranch
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

// Recognizable technology icons
const TechIcon = ({ name }) => {
  switch (name) {
    case 'Python':
      return (
        <svg className="w-6 h-6 text-[#38bdf8]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.9 1.05c-3.7 0-4.6.4-5.7 1.3-1.1 1-1.2 2.3-1.2 4.1v2.1h7.1v1H4.6c-1.8 0-3.1.2-4.1 1.2-1.1 1.1-1.3 2.5-1.3 5.4 0 2.9.2 4.3 1.3 5.4 1 1 2.3 1.2 4.1 1.2h2.2v-3.1c0-2.3 1.9-4.2 4.2-4.2h7.1v-1.1c0-1.8-.2-3.1-1.2-4.1-1-1.1-2.4-1.3-5.2-1.3H11.9zm-2.2 2.3c.6 0 1.1.5 1.1 1.1 0 .6-.5 1.1-1.1 1.1-.6 0-1.1-.5-1.1-1.1 0-.6.5-1.1 1.1-1.1zm9.4 6.1v3.1c0 2.3-1.9 4.2-4.2 4.2H7.8v1.1c0 1.8.2 3.1 1.2 4.1 1 1.1 2.4 1.3 5.2 1.3h2.3c3.7 0 4.6-.4 5.7-1.3 1.1-1 1.2-2.3 1.2-4.1v-2.1h-7.1v-1h7.5c1.8 0 3.1-.2 4.1-1.2 1.1-1.1 1.3-2.5 1.3-5.4 0-2.9-.2-4.3-1.3-5.4-1-1-2.3-1.2-4.1-1.2h-2.2zM14.3 18.5c.6 0 1.1.5 1.1 1.1 0 .6-.5 1.1-1.1 1.1-.6 0-1.1-.5-1.1-1.1 0-.6.5-1.1 1.1-1.1z"/>
        </svg>
      );
    case 'Java':
      return (
        <svg className="w-6 h-6 text-[#f97316]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M8.8 17.5s-.8.6.6.8c1.6.2 2.6.2 4.6-.2 0 0 .7.4 1.5.8-3.4 1.7-8.7.6-6.7-1.4zm-.7-2.6s-.9.8.7 1c2.1.3 4.2.3 6.9-.3 0 0 .5.5 1.1.8-4.3 1.6-11 .8-8.7-1.5zm6.8-4.7c.8 1.4-1 2.7-1 2.7s2.5-.9 1.4-2.8c-1.1-1.8-2.6-2.7-5.1-4.1 0 0 3.1 1.2 4.7 4.2zm-2.8-6.4c1 1.2-.5 2.5-.5 2.5s2.2-.8 1.4-2.4c-1-1.8-3.2-3.1-5.9-3.9 0 0 3.4 1.7 5 3.8zm3.9 15.8c-1.3 1-3.6 1.3-5.7 1.3-3.6 0-7.3-1-5.6-2.4 0 0-.6.6.5.9 2 0 4.1.2 6.5 0 2.2-.1 4-.6 4.3-.8 0 0 .1.5 0 1z"/>
        </svg>
      );
    case 'React.js':
      return (
        <svg className="w-6 h-6 text-[#61dafb]" viewBox="0 0 24 24" fill="currentColor">
          <ellipse cx="12" cy="12" rx="10" ry="4.2" fill="none" stroke="currentColor" strokeWidth="1.6" transform="rotate(0 12 12)"/>
          <ellipse cx="12" cy="12" rx="10" ry="4.2" fill="none" stroke="currentColor" strokeWidth="1.6" transform="rotate(60 12 12)"/>
          <ellipse cx="12" cy="12" rx="10" ry="4.2" fill="none" stroke="currentColor" strokeWidth="1.6" transform="rotate(120 12 12)"/>
          <circle cx="12" cy="12" r="1.8"/>
        </svg>
      );
    case 'HTML':
      return (
        <svg className="w-6 h-6 text-[#e34f26]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 2l1.8 20.2 7.2 2 7.2-2L21 2H3zm14.6 5.8h-7.8l.2 2.3h7.4l-.6 6.9-4.8 1.3-4.8-1.3-.3-3.4h2.2l.2 1.7 2.7.7 2.7-.7.3-3.1H7.5L6.8 5.6h11.1l-.3 2.2z"/>
        </svg>
      );
    case 'CSS':
      return (
        <svg className="w-6 h-6 text-[#264de4]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 2l1.8 20.2 7.2 2 7.2-2L21 2H3zm14.8 4.2l-.2 2.3H8.3l.2 2.3h8.9l-.7 7.7-4.7 1.3-4.7-1.3-.3-3.7h2.3l.2 1.9 2.5.7 2.5-.7.3-3.5H6.2L5.6 4.2h12.2z"/>
        </svg>
      );
    case 'Node.js':
      return (
        <svg className="w-6 h-6 text-[#22c55e]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l9 5.2v10.4L12 23l-9-5.4V7.2L12 2zm0 2.3L4.8 8.4v7.1L12 19.8l7.2-4.3V8.4L12 4.3z"/>
        </svg>
      );
    case 'Flask':
      return (
        <svg className="w-6 h-6 text-slate-100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M10 2v5.5L4.5 19a2 2 0 0 0 1.7 3h11.6a2 2 0 0 0 1.7-3L14 7.5V2" />
          <path d="M8.5 2h7" />
          <path d="M7 16h10" />
        </svg>
      );
    case 'Scikit-learn':
      return (
        <svg className="w-6 h-6 text-[#f59e0b]" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="7" cy="7" r="4" opacity="0.8" />
          <circle cx="17" cy="9" r="3.5" opacity="0.9" />
          <circle cx="11" cy="17" r="4.5" />
          <path d="M7 7l10 2m-6 8l6-8m-6 8L7 7" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    case 'NLP':
      return <BrainCircuit className="w-6 h-6 text-[#ff1e27]" />;
    case 'LLM':
      return <Sparkles className="w-6 h-6 text-[#e62429]" />;
    case 'RAG':
      return <Database className="w-6 h-6 text-[#38bdf8]" />;
    case 'Git':
      return <GitBranch className="w-6 h-6 text-[#f43f5e]" />;
    case 'GitHub':
      return (
        <svg className="w-6 h-6 text-slate-200" viewBox="0 0 24 24" fill="currentColor">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
        </svg>
      );
    case 'VS Code':
      return (
        <svg className="w-6 h-6 text-[#007acc]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.6 2.1l-10 9.2L3.8 8 2 9.1l3.5 3.3L2 15.7l1.8 1.1 3.8-3.3 10 9.2c.5.4 1.2.3 1.6-.1l3.5-1.8c.6-.3.9-.9.9-1.5V3.7c0-.6-.3-1.2-.9-1.5l-3.5-1.8c-.4-.4-1.1-.3-1.6.1zM18 5.7v12.6l-6.5-6.3L18 5.7z"/>
        </svg>
      );
    default:
      return <Code2 className="w-6 h-6 text-[#e62429]" />;
  }
};

export default function Skills() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-red-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-block px-4 py-1 bg-[#e62429] text-white text-xs font-comic tracking-widest uppercase transform -skew-x-6 border border-black shadow-[3px_3px_0px_#000000] mb-3">
            CHAPTER 02 // SUPERHUMAN ABILITIES
          </div>
          
          {/* Title: "MY POWERS" */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-comic tracking-wider uppercase text-white drop-shadow-[0_3px_0_#000000]">
            MY <span className="text-[#e62429]">POWERS</span>
          </h2>

          {/* Subtitle: "TECHNICAL SKILLS" */}
          <p className="mt-2 text-xl sm:text-2xl font-comic tracking-wider text-slate-300 uppercase">
            TECHNICAL SKILLS
          </p>

          <p className="mt-2 text-xs sm:text-sm font-mono text-slate-400 max-w-md">
            Programming, web architectures, AI/ML models, and development tools verified from resume.
          </p>
          <div className="w-24 h-1.5 bg-[#e62429] shadow-[0_0_10px_#e62429] mt-4" />
        </div>

        {/* Skill Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((group, groupIdx) => (
            <div
              key={group.category}
              className={`relative comic-panel rounded-2xl p-6 sm:p-7 border-2 border-red-950 hover:border-[#e62429] transition-all duration-300 flex flex-col justify-between group shadow-[4px_4px_0px_0px_rgba(230,36,41,0.2)] hover:shadow-[6px_6px_0px_0px_#e62429] hover:-translate-y-1.5 ${
                groupIdx === 3 ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
            >
              {/* Web graphic in top-right corner of card */}
              <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none opacity-30 group-hover:opacity-75 transition-opacity">
                <svg viewBox="0 0 100 100" className="w-full h-full stroke-red-600 fill-none" strokeWidth="1.2">
                  <path d="M 100 0 L 0 0" />
                  <path d="M 100 0 L 100 100" />
                  <path d="M 100 0 L 30 70" />
                  <path d="M 100 0 L 60 100" />
                  <path d="M 100 0 L 0 50" />
                  <circle cx="100" cy="0" r="30" />
                  <circle cx="100" cy="0" r="60" />
                </svg>
              </div>

              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between pb-3 border-b border-red-950/80 mb-4">
                  <h3 className="font-comic text-xl sm:text-2xl tracking-wide uppercase text-white group-hover:text-[#e62429] transition-colors">
                    {group.category}
                  </h3>
                  <span className="font-mono text-xs text-red-400 bg-red-950/40 px-2.5 py-0.5 rounded border border-red-900/60">
                    {group.skills.length} ABILITIES
                  </span>
                </div>

                <p className="text-xs text-slate-400 mb-5 font-mono">
                  {group.description}
                </p>

                {/* Skill Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="relative p-3.5 rounded-xl bg-[#080a10] border border-red-950 hover:border-[#e62429] transition-all duration-300 flex items-center justify-between group/skill hover:shadow-[0_0_15px_rgba(230,36,41,0.35)] hover:-translate-y-1"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-[#0e111a] border border-red-950/70 flex items-center justify-center shrink-0 group-hover/skill:scale-110 group-hover/skill:border-red-600 transition-all">
                          <TechIcon name={skill.name} />
                        </div>
                        <div>
                          <span className="font-comic text-base sm:text-lg tracking-wide text-white group-hover/skill:text-[#e62429] transition-colors block">
                            {skill.name}
                          </span>
                          <span className="text-[11px] font-mono text-slate-400 block -mt-1">
                            {skill.type}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Tag */}
              <div className="mt-5 pt-3 border-t border-red-950/80 flex items-center justify-between font-mono text-[11px] text-slate-500">
                <span>VERIFIED POWER</span>
                <span className="text-[#e62429] font-bold">&bull; COMBAT READY</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
