import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, ChevronRight, ArrowRight } from 'lucide-react';
import Experience from '../components/Experience';

export default function ExperiencePage() {
  return (
    <div className="pt-28 pb-20 min-h-screen relative">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-6">
          <Link to="/" className="hover:text-cyan-400 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-cyan-400">Work Experience</span>
        </div>

        {/* Reusable Experience Component */}
        <Experience />

        {/* Bottom CTA for Projects */}
        <div className="mt-12 p-6 glass-panel rounded-2xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-base font-bold text-white">
              Interested in software applications I've engineered?
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Explore the AI Career Guidance System, EZ Pass, and Smart Ambulance Detection System.
            </p>
          </div>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-indigo-600 text-white text-xs sm:text-sm font-medium shadow-md transition-all shrink-0"
          >
            <span>Explore Projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
