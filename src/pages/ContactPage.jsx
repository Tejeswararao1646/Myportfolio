import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, ChevronRight } from 'lucide-react';
import Contact from '../components/Contact';

export default function ContactPage() {
  return (
    <div className="pt-28 pb-20 min-h-screen relative">
      {/* Background Accent */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-6">
          <Link to="/" className="hover:text-cyan-400 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-cyan-400">Contact</span>
        </div>

        {/* Reusable Contact Component */}
        <Contact />

      </div>
    </div>
  );
}
