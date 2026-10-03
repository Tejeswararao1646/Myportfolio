import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { personalInfo } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerNav = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Experience', path: '/experience' },
    { name: 'Projects', path: '/projects' },
    { name: 'Education', path: '/education' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="border-t border-slate-800/80 bg-[#03060c] py-12 relative mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-8 border-b border-slate-900">
          
          {/* Identity & Role */}
          <div className="md:col-span-5 flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-lg font-bold text-white tracking-tight">
              {personalInfo.name}
            </h3>
            <p className="text-sm text-cyan-400 font-mono mt-0.5">
              {personalInfo.role}
            </p>
            <p className="text-xs text-slate-500 mt-2 max-w-sm">
              B.Tech Artificial Intelligence &amp; Data Science &bull; SITAM (2023–2027)
            </p>
          </div>

          {/* Quick Page Links */}
          <div className="md:col-span-4 flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-2 text-xs font-medium text-slate-400">
            {footerNav.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="hover:text-cyan-400 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Social Icons & Back to top */}
          <div className="md:col-span-3 flex items-center justify-center md:justify-end gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
              aria-label="GitHub Profile"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-indigo-400 hover:border-indigo-500/40 transition-all"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 transition-all"
              aria-label="Email"
              title="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 transition-all ml-1"
              aria-label="Scroll to top"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Sub-text */}
        <div className="mt-6 text-center text-xs text-slate-500 font-mono">
          <span>&copy; {new Date().getFullYear()} {personalInfo.name}. All verified resume rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
