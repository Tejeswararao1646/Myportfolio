import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, ChevronRight, ArrowRight, Sparkles } from 'lucide-react';
import Skills from '../components/Skills';

export default function SkillsPage() {
  return (
    <div className="pt-28 pb-20 min-h-screen relative">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-indigo-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-6">
          <Link to="/" className="hover:text-cyan-400 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-cyan-400">Technical Skills</span>
        </div>

        {/* Reusable Skills Component */}
        <Skills />

        {/* Bottom CTA for Projects & Experience */}
        <div className="mt-12 p-6 glass-panel rounded-2xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-base font-bold text-white">
              Explore how these skills are applied in practice
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Check out my internship responsibilities and academic projects.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              to="/experience"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 hover:text-white text-xs font-medium transition-all"
            >
              <span>Work Experience</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-600 to-indigo-600 text-white text-xs font-medium shadow-md transition-all"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
