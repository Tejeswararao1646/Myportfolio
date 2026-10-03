import React, { useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import SpiderWebCanvas from './components/SpiderWebCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import FinalScreen from './components/FinalScreen';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [loadingDone, setLoadingDone] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#050608] text-white selection:bg-[#e62429] selection:text-white overflow-x-hidden font-sans">
      
      {/* Spider-Man Initial Loading Screen */}
      <LoadingScreen onComplete={() => setLoadingDone(true)} />

      {/* Subtle Interactive Spider-Web Canvas (Tracks Mouse) */}
      <SpiderWebCanvas />

      {/* Sticky Comic Navigation Bar */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Comic-Book Sequential Flow */}
      <main className="relative z-10 flex flex-col">
        {/* Cinematic Landing Screen */}
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        {/* Diagonal Comic Transition Divider */}
        <div className="w-full h-4 bg-gradient-to-r from-transparent via-[#e62429] to-transparent opacity-60 pointer-events-none" />

        {/* Chapter 01: ORIGIN STORY */}
        <About />

        <div className="w-full h-3 bg-gradient-to-r from-transparent via-[#e62429]/50 to-transparent opacity-50 pointer-events-none" />

        {/* Chapter 02: MY POWERS (TECHNICAL SKILLS) */}
        <Skills />

        <div className="w-full h-3 bg-gradient-to-r from-transparent via-[#e62429]/50 to-transparent opacity-50 pointer-events-none" />

        {/* Chapter 03: THE JOURNEY (EXPERIENCE) */}
        <Experience />

        <div className="w-full h-3 bg-gradient-to-r from-transparent via-[#e62429]/50 to-transparent opacity-50 pointer-events-none" />

        {/* Chapter 04: MY MISSIONS (PROJECTS) */}
        <Projects />

        <div className="w-full h-3 bg-gradient-to-r from-transparent via-[#e62429]/50 to-transparent opacity-50 pointer-events-none" />

        {/* Chapter 05: TRAINING ARC (EDUCATION) */}
        <Education />

        <div className="w-full h-3 bg-gradient-to-r from-transparent via-[#e62429]/50 to-transparent opacity-50 pointer-events-none" />

        {/* Chapter 06: NEED A DEVELOPER? (CONTACT) */}
        <Contact />

        {/* Chapter 07: FINAL SCREEN ("EVERY GREAT DEVELOPER HAS A STORY...") */}
        <FinalScreen />
      </main>

      {/* Printable / Downloadable Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
