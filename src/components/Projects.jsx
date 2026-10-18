import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, CreditCard, AlertCircle, ArrowRight, Eye, Github } from 'lucide-react';
import ProjectModal from './ProjectModal';
import { portfolioData } from '../data/portfolioData';

export default function Projects() {
  const { projects, personalInfo } = portfolioData;
  const [selectedProject, setSelectedProject] = useState(null);

  const projectMetas = {
    'ai-career-guidance': {
      number: '01',
      tags: ['AI & Machine Learning', 'Recommendation System', 'Skill Assessment'],
      icon: <Sparkles className="w-6 h-6 text-[#e62429]" />
    },
    'ez-pass': {
      number: '02',
      tags: ['Web Application', 'Digital Payment System', 'Vehicle Management'],
      icon: <CreditCard className="w-6 h-6 text-white" />
    },
    'smart-ambulance-detection': {
      number: '03',
      tags: ['Simulation System', 'Traffic Automation', 'Emergency Detection'],
      icon: <AlertCircle className="w-6 h-6 text-[#e62429]" />
    }
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-block px-4 py-1 bg-[#e62429] text-white text-xs font-comic tracking-widest uppercase transform -skew-x-6 border border-black shadow-[3px_3px_0px_#000000] mb-3">
            CHAPTER 04 // MAJOR BATTLES
          </div>
          
          {/* Title: "MY MISSIONS" */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-comic tracking-wider uppercase text-white drop-shadow-[0_3px_0_#000000]">
            MY <span className="text-[#e62429]">MISSIONS</span>
          </h2>

          {/* Subtitle: "PROJECTS" */}
          <p className="mt-2 text-xl sm:text-2xl font-comic tracking-wider text-slate-300 uppercase">
            PROJECTS
          </p>

          <p className="mt-2 text-xs sm:text-sm font-mono text-slate-400 max-w-md">
            Three key engineering systems built across Artificial Intelligence, web platforms, and automated simulation.
          </p>
          <div className="w-24 h-1.5 bg-[#e62429] shadow-[0_0_10px_#e62429] mt-4" />
        </div>

        {/* 3 Large Comic-Book Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const meta = projectMetas[project.id] || { number: '00', tags: [], icon: null };

            return (
              <div
                key={project.id}
                className="relative group rounded-3xl bg-[#0c0e14] border-2 border-red-950/80 hover:border-[#e62429] p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(230,36,41,0.2)] hover:shadow-[8px_8px_0px_0px_#e62429,0_0_25px_rgba(230,36,41,0.4)] hover:-translate-y-2 cursor-pointer overflow-hidden"
                onClick={() => setSelectedProject(project)}
              >
                {/* Spider-Web expands from corner on hover */}
                <div className="absolute top-0 right-0 w-20 h-20 group-hover:w-32 group-hover:h-32 transition-all duration-500 pointer-events-none opacity-30 group-hover:opacity-80">
                  <svg viewBox="0 0 100 100" className="w-full h-full stroke-red-600 fill-none" strokeWidth="1.2">
                    <line x1="100" y1="0" x2="0" y2="0" />
                    <line x1="100" y1="0" x2="100" y2="100" />
                    <line x1="100" y1="0" x2="20" y2="80" />
                    <line x1="100" y1="0" x2="50" y2="100" />
                    <circle cx="100" cy="0" r="30" />
                    <circle cx="100" cy="0" r="60" />
                    <circle cx="100" cy="0" r="90" />
                  </svg>
                </div>

                <div>
                  {/* Card Header: Project Number scaling on hover */}
                  <div className="flex items-center justify-between pb-4 border-b border-red-950 mb-5">
                    <div className="flex items-center gap-2.5">
                      <div className="w-10 h-10 rounded-xl bg-[#07090e] border border-red-900/60 flex items-center justify-center">
                        {meta.icon}
                      </div>
                      <span className="font-comic text-xs uppercase tracking-widest text-red-400">
                        {project.category}
                      </span>
                    </div>

                    {/* Project Number badge */}
                    <span className="font-comic text-3xl sm:text-4xl text-white/30 group-hover:text-[#e62429] group-hover:scale-125 transition-all duration-300 font-bold">
                      #{meta.number}
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3 className="font-comic text-2xl sm:text-3xl tracking-wide uppercase text-white group-hover:text-[#e62429] transition-colors leading-tight">
                    {project.title}
                  </h3>

                  {/* Short Description strictly from resume */}
                  <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                    {project.shortDescription}
                  </p>

                  {/* Highlights from resume */}
                  <div className="mt-4 pt-3 border-t border-red-950/60 space-y-1.5">
                    {project.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#e62429]" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Section: Supported Tags & "VIEW PROJECT" Button */}
                <div className="mt-6 pt-4 border-t border-red-950">
                  {/* Supported Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {meta.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-0.5 rounded bg-[#07090e] text-[11px] font-mono text-slate-300 border border-red-950"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* "VIEW PROJECT" Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(project);
                    }}
                    className="comic-btn-red w-full py-2.5 rounded-xl text-base flex items-center justify-center gap-2 uppercase cursor-pointer"
                  >
                    <Eye className="w-4 h-4" />
                    <span>VIEW PROJECT</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Repositories Verified Notice */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-[#0c0e14] border border-red-900 text-xs font-mono text-slate-300 shadow-[3px_3px_0px_#e62429]">
            <Github className="w-4 h-4 text-[#e62429]" />
            <span>
              All project source codes &amp; updates are maintained on{' '}
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#e62429] hover:underline font-bold"
              >
                github.com/{personalInfo.githubHandle}
              </a>
            </span>
          </div>
        </div>

      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
