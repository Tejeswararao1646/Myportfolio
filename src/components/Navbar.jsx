import React, { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Navbar({ onOpenResume }) {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'HOME', id: 'home' },
    { name: 'ABOUT', id: 'about' },
    { name: 'SKILLS', id: 'skills' },
    { name: 'EXPERIENCE', id: 'experience' },
    { name: 'PROJECTS', id: 'projects' },
    { name: 'EDUCATION', id: 'education' },
    { name: 'CONTACT', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Scroll Spy for active section
      const scrollPos = window.scrollY + 200;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const el = document.getElementById(navItems[i].id);
        if (el && scrollPos >= el.offsetTop) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#050608]/90 backdrop-blur-md border-b-2 border-[#e62429] py-3 shadow-[0_4px_20px_rgba(230,36,41,0.2)]'
          : 'bg-[#050608]/70 backdrop-blur-sm border-b border-[#e62429]/40 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Spider-Web Logo */}
          <button
            onClick={() => scrollTo('home')}
            className="flex items-center gap-2.5 group focus:outline-none"
            aria-label="Home"
          >
            {/* Spider Icon Badge */}
            <div className="w-10 h-10 rounded-xl bg-[#0c0e14] border-2 border-[#e62429] flex items-center justify-center shadow-[3px_3px_0px_#e62429] group-hover:scale-105 group-hover:shadow-[4px_4px_0px_#ff1e27] transition-all">
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#e62429] group-hover:text-white transition-colors" fill="currentColor">
                <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 17.93V15a1 1 0 0 0-2 0v4.93A8 8 0 0 1 4.07 13H9a1 1 0 0 0 0-2H4.07A8 8 0 0 1 11 4.07V9a1 1 0 0 0 2 0V4.07A8 8 0 0 1 19.93 11H15a1 1 0 0 0 0 2h4.93A8 8 0 0 1 13 19.93z"/>
              </svg>
            </div>
            
            <div className="flex flex-col text-left">
              <span className="font-comic text-xl sm:text-2xl text-white tracking-wider group-hover:text-[#e62429] transition-colors uppercase leading-none">
                TEJESWARARAO
              </span>
              <span className="font-mono text-[10px] text-red-400 tracking-widest uppercase">
                SPIDER-DEV // PORTFOLIO
              </span>
            </div>
          </button>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="relative px-3 py-1.5 font-comic text-base tracking-wider uppercase transition-colors group"
                >
                  <span
                    className={`${
                      isActive
                        ? 'text-[#e62429] font-bold'
                        : 'text-white/90 group-hover:text-[#e62429]'
                    } transition-colors`}
                  >
                    {item.name}
                  </span>

                  {/* Web-Line Hover Animation */}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#e62429] transition-all duration-300 group-hover:w-full" />

                  {/* Active Section Underline */}
                  {isActive && (
                    <span className="absolute -bottom-1 left-2 right-2 h-[2.5px] bg-[#e62429] shadow-[0_0_8px_#e62429]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action: Download Resume Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenResume}
              className="comic-btn-red px-4 py-2 rounded-lg text-sm sm:text-base flex items-center gap-1.5 uppercase cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>RESUME</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenResume}
              className="sm:hidden comic-btn-red p-2 rounded-lg text-xs"
              aria-label="Resume"
            >
              <FileText className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white bg-[#0c0e14] border border-[#e62429] rounded-lg focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#e62429]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0c12]/95 border-b-2 border-[#e62429] px-4 pt-3 pb-6 mt-2 animate-fadeIn backdrop-blur-xl">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`text-left px-4 py-2.5 rounded-lg font-comic text-lg uppercase transition-all ${
                    isActive
                      ? 'text-[#e62429] bg-red-950/40 border-l-4 border-[#e62429]'
                      : 'text-white hover:text-[#e62429] hover:bg-slate-900/60'
                  }`}
                >
                  {item.name}
                </button>
              );
            })}
            <div className="pt-3 mt-2 border-t border-red-950">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="comic-btn-red w-full py-2.5 rounded-lg text-center font-comic text-lg uppercase flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4" />
                <span>DOWNLOAD RESUME</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
