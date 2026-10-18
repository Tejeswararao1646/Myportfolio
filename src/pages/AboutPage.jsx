import React from 'react';
import { Link } from 'react-router-dom';
import { 
  User, 
  Brain, 
  Lightbulb, 
  Compass, 
  MapPin, 
  GraduationCap, 
  Briefcase, 
  Award,
  ArrowRight,
  ChevronRight,
  Code
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import tejaProfileImg from '../assets/teja-profile.png';

export default function AboutPage() {
  const { personalInfo } = portfolioData;

  const corePillars = [
    {
      title: "Strong Foundations",
      desc: "Sound grounding in core programming (Python, Java), data structures, and web technologies.",
      icon: <Brain className="w-5 h-5 text-cyan-400" />
    },
    {
      title: "Real-World Focus",
      desc: "Committed to building scalable, real-world applications and solving complex problems through technology.",
      icon: <Lightbulb className="w-5 h-5 text-indigo-400" />
    },
    {
      title: "Continuous Learner",
      desc: "Quick learner with strong analytical skills, seeking to contribute effectively in professional environments.",
      icon: <Compass className="w-5 h-5 text-purple-400" />
    }
  ];

  return (
    <div className="pt-28 pb-20 min-h-screen relative">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-6">
          <Link to="/" className="hover:text-cyan-400 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-cyan-400">About Me</span>
        </div>

        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/80 border border-slate-700/60 text-xs font-mono text-cyan-400 mb-3">
            <User className="w-3.5 h-3.5" />
            <span>ABOUT GORLE TEJESWARARAO</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Background &amp; Career Objective
          </h1>
          <p className="mt-3 text-slate-400 text-base sm:text-lg max-w-2xl">
            Passionate software developer and AI/ML undergraduate with hands-on experience in Generative AI, web development, and problem solving.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full mt-4" />
        </div>

        {/* Profile Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Portrait & Snapshot */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="glass-panel rounded-2xl p-4 border border-cyan-500/20 shadow-xl">
              <div className="rounded-xl overflow-hidden aspect-[4/5] bg-slate-950">
                <img
                  src={tejaProfileImg}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div className="mt-4 text-center">
                <h3 className="text-lg font-bold text-white">{personalInfo.name}</h3>
                <p className="text-xs font-mono text-cyan-400 mt-0.5">{personalInfo.role}</p>
                <div className="mt-3 flex items-center justify-center gap-1.5 text-xs text-slate-400 font-mono">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{personalInfo.location}</span>
                </div>
              </div>
            </div>

            {/* Quick Specs */}
            <div className="glass-panel rounded-2xl p-5 border border-slate-800 space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                <span className="text-slate-400">Undergraduate Degree</span>
                <span className="text-slate-200 font-semibold">B.Tech AI &amp; DS</span>
              </div>
              <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                <span className="text-slate-400">Institution</span>
                <span className="text-cyan-300 font-semibold">SITAM, Vizianagaram</span>
              </div>
              <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                <span className="text-slate-400">Academic Score</span>
                <span className="text-amber-400 font-semibold">CGPA: 7.38 / 10</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Internship</span>
                <span className="text-indigo-300 font-semibold">PixelWind Technologies</span>
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Narrative */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Career Objective Box */}
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800">
              <h3 className="text-lg font-bold text-cyan-300 flex items-center gap-2 mb-3">
                <Brain className="w-5 h-5 text-cyan-400" />
                <span>Career Objective</span>
              </h3>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed italic bg-slate-900/60 p-5 rounded-xl border border-slate-800/80">
                "{personalInfo.careerObjective}"
              </p>
            </div>

            {/* In-depth background description strictly verified from resume */}
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800 space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <h3 className="text-xl font-bold text-white mb-2">
                Educational Journey &amp; Technical Discipline
              </h3>
              
              <p>
                I am a B.Tech Artificial Intelligence and Data Science undergraduate at <strong>Satya Institute of Technology and Management (SITAM)</strong> in Vizianagaram (batch 2023–2027). Prior to my engineering degree, I completed my Intermediate (MPC) at <strong>Carmel Jr. College</strong> with <strong>86%</strong> and secondary schooling at <strong>ZPHS School</strong> with <strong>100%</strong>.
              </p>

              <p>
                During my professional internship as a <strong>Generative AI Developer Intern</strong> at <strong>PixelWind Technologies</strong> (April 2026 – June 2026), I worked directly on Generative AI applications utilizing Large Language Models (LLMs), prompt engineering, and modern AI development tools. My responsibilities included assisting in developing and testing AI-powered solutions, as well as integrating APIs to enhance application functionality.
              </p>

              <p>
                My project work spans building data-driven recommendation systems like the <em>AI Career Guidance System</em>, full-stack web platforms like <em>EZ Pass</em> for digital toll processing, and automated simulations such as the <em>Smart Ambulance Detection System</em> for emergency traffic prioritization.
              </p>
            </div>

            {/* Three Foundational Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {corePillars.map((pillar, idx) => (
                <div key={idx} className="glass-panel p-4 rounded-xl border border-slate-800 flex flex-col gap-2">
                  <div className="w-8 h-8 rounded-lg bg-slate-800/80 flex items-center justify-center">
                    {pillar.icon}
                  </div>
                  <h4 className="text-sm font-semibold text-slate-200">{pillar.title}</h4>
                  <p className="text-xs text-slate-400 leading-snug">{pillar.desc}</p>
                </div>
              ))}
            </div>

            {/* Navigation links to other pages */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                to="/skills"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-950/50 hover:bg-cyan-900/60 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-medium transition-all"
              >
                <span>View Technical Skills</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/experience"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 text-xs sm:text-sm font-medium transition-all"
              >
                <span>View Internship Experience</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
