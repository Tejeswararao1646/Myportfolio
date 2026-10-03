import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, ChevronRight, ArrowRight } from 'lucide-react';
import Education from '../components/Education';

export default function EducationPage() {
  return (
    <div className="pt-28 pb-20 min-h-screen relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-10 w-80 h-80 bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-6">
          <Link to="/" className="hover:text-cyan-400 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-cyan-400">Education</span>
        </div>

        {/* Reusable Education Component */}
        <Education />

        {/* Bottom CTA for Contact */}
        <div className="mt-12 p-6 glass-panel rounded-2xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-base font-bold text-white">
              Looking for a motivated AI &amp; Software Developer?
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Available for software engineering roles, internships, and full-time opportunities.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-indigo-600 text-white text-xs sm:text-sm font-medium shadow-md transition-all shrink-0"
          >
            <span>Get In Touch</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
