import React from 'react';
import { Link } from 'react-router-dom';
import {
  User,
  Cpu,
  Briefcase,
  FolderGit2,
  GraduationCap,
  MessageSquare,
  ArrowRight,
  Sparkles,
  Download,
  Github,
  Linkedin
} from 'lucide-react';

import { portfolioData } from '../data/portfolioData';

export default function HomePage({ onOpenResume }) {
  const { personalInfo, experience, projects, education, skills } = portfolioData;

  const quickSections = [
    {
      title: "About Me",
      desc: "Career objective, academic foundations at SITAM, and passion for AI & software engineering.",
      path: "/about",
      icon: <User className="w-5 h-5 text-cyan-400" />,
      badge: "Background"
    },
    {
      title: "Technical Skills",
      desc: "Proficiencies in Python, Java, React.js, Node.js, Flask, LLM, RAG, and Git tools.",
      path: "/skills",
      icon: <Cpu className="w-5 h-5 text-indigo-400" />,
      badge: "14 Technologies"
    },
    {
      title: "Work Experience",
      desc: "Generative AI Developer Intern at PixelWind Technologies working with LLMs & APIs.",
      path: "/experience",
      icon: <Briefcase className="w-5 h-5 text-purple-400" />,
      badge: "Internship"
    },
    {
      title: "Featured Projects",
      desc: "AI Career Guidance System, EZ Pass Toll System, and Smart Ambulance Detection.",
      path: "/projects",
      icon: <FolderGit2 className="w-5 h-5 text-emerald-400" />,
      badge: "3 Projects"
    },
    {
      title: "Education",
      desc: "B.Tech in AI & Data Science (7.38 CGPA), Intermediate (86%), and SSC (100%).",
      path: "/education",
      icon: <GraduationCap className="w-5 h-5 text-amber-400" />,
      badge: "SITAM (2023–27)"
    },
    {
      title: "Contact",
      desc: "Direct contact details via Email, Phone, LinkedIn, and interactive messaging.",
      path: "/contact",
      icon: <MessageSquare className="w-5 h-5 text-rose-400" />,
      badge: "Get in Touch"
    }
  ];

  return (
    <div className="min-h-screen bg-[#030305] text-white">

      {/* =========================================================
          HERO / LANDING SECTION
      ========================================================= */}
      <section className="relative min-h-[calc(100vh-80px)] overflow-hidden">

        {/* Background Spider-Web Style Lines */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">

          <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full border border-red-900/20 -translate-x-1/3 -translate-y-1/3" />

          <div className="absolute top-20 right-[-150px] w-[600px] h-[600px] rounded-full border border-red-900/20" />

          <div className="absolute bottom-[-250px] left-[20%] w-[700px] h-[700px] rounded-full border border-red-900/10" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_45%,rgba(220,20,30,0.13),transparent_35%)]" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_50%,rgba(100,0,0,0.12),transparent_40%)]" />

        </div>


        {/* Red top border */}
        <div className="absolute top-0 left-0 right-0 h-px bg-red-600/50" />


        {/* Hero Content */}
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 min-h-[calc(100vh-80px)] flex items-center">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 items-center w-full py-16 lg:py-10">

            {/* =====================================================
                LEFT SIDE - TEXT
            ===================================================== */}
            <div className="relative z-20 order-2 lg:order-1">

              {/* Small label */}
              <div className="inline-flex items-center gap-2 mb-5">

                <span className="px-4 py-2 bg-red-600 text-white text-xs sm:text-sm font-bold tracking-wider uppercase skew-x-[-8deg]">

                  <span className="inline-block skew-x-[8deg]">
                    ISSUE #2026 // WEB DEVELOPER
                  </span>

                </span>

                <span className="text-red-500 font-mono text-sm">
                  {personalInfo?.name || "PORTFOLIO"}
                </span>

              </div>


              {/* Main Heading */}
              <h1 className="font-black uppercase leading-[0.9] tracking-tight">

                <span className="block text-5xl sm:text-6xl md:text-7xl xl:text-8xl text-white">
                  SOFTWARE
                </span>

                <span className="block text-5xl sm:text-6xl md:text-7xl xl:text-8xl text-red-600 drop-shadow-[4px_4px_0px_#350000]">
                  DEVELOPER
                </span>

              </h1>


              {/* Subtitle */}
              <div className="flex items-center gap-4 mt-7">

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-200 uppercase tracking-wide">
                  AI & ML ENTHUSIAST
                </h2>

                <div className="w-12 h-1 bg-red-600" />

              </div>


              {/* Description */}
              <div className="mt-7 max-w-2xl">

                <div className="border-l-4 border-red-600 bg-red-950/20 px-5 py-4">

                  <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                    Building real-world applications with software development,
                    artificial intelligence, and machine learning.
                  </p>

                </div>

              </div>


              {/* Information badges */}
              <div className="flex flex-wrap gap-3 mt-7">

                <span className="px-4 py-2 rounded-md border border-red-900/70 bg-[#09090c] text-sm font-mono text-red-400">
                  ● B.Tech AI & DS • SITAM
                </span>

                <span className="px-4 py-2 rounded-md border border-red-900/70 bg-[#09090c] text-sm font-mono text-slate-300">
                  PixelWind Technologies Intern
                </span>

                <span className="px-4 py-2 rounded-md border border-red-900/70 bg-[#09090c] text-sm font-mono text-slate-300">
                  Srikakulam, India
                </span>

              </div>


              {/* Buttons */}
              <div className="flex flex-wrap items-center gap-4 mt-9">

                {/* View Work */}
                <Link
                  to="/projects"
                  className="
                    group
                    relative
                    inline-flex
                    items-center
                    gap-3
                    px-7
                    py-4
                    bg-red-600
                    hover:bg-red-500
                    text-white
                    font-black
                    uppercase
                    tracking-wide
                    transition-all
                    shadow-[5px_5px_0px_#f1f1f1]
                    hover:shadow-[3px_3px_0px_#f1f1f1]
                    hover:translate-x-[2px]
                    hover:translate-y-[2px]
                  "
                >
                  View My Work

                  <ArrowRight
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  />

                </Link>


                {/* Resume */}
                <button
                  onClick={onOpenResume}
                  className="
                    inline-flex
                    items-center
                    gap-3
                    px-7
                    py-4
                    border-2
                    border-red-600
                    bg-transparent
                    hover:bg-red-600/10
                    text-white
                    font-black
                    uppercase
                    tracking-wide
                    transition-all
                  "
                >

                  <Download className="w-5 h-5 text-red-500" />

                  Download Resume

                </button>


                {/* GitHub */}
                <a
                  href={personalInfo?.github || "#"}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    w-14
                    h-14
                    flex
                    items-center
                    justify-center
                    border-2
                    border-red-600
                    rounded-xl
                    hover:bg-red-600
                    transition-all
                  "
                >

                  <Github className="w-6 h-6" />

                </a>


                {/* LinkedIn */}
                <a
                  href={personalInfo?.linkedin || "#"}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    w-14
                    h-14
                    flex
                    items-center
                    justify-center
                    border-2
                    border-red-600
                    rounded-xl
                    hover:bg-red-600
                    transition-all
                  "
                >

                  <Linkedin className="w-6 h-6" />

                </a>

              </div>

            </div>


            {/* =====================================================
                RIGHT SIDE - SPIDER IMAGE
                SAME POSITION / SAME SIZE
            ===================================================== */}
            <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end items-center">

              {/* Red glow behind Spider-Man */}
              <div
                className="
                  absolute
                  w-[350px]
                  h-[500px]
                  sm:w-[450px]
                  sm:h-[600px]
                  lg:w-[500px]
                  lg:h-[650px]
                  bg-red-600/20
                  blur-[100px]
                  rounded-full
                "
              />


              {/* Decorative circle */}
              <div
                className="
                  absolute
                  w-[300px]
                  h-[300px]
                  sm:w-[430px]
                  sm:h-[430px]
                  lg:w-[520px]
                  lg:h-[520px]
                  rounded-full
                  border
                  border-red-600/20
                "
              />


              {/* Second decorative circle */}
              <div
                className="
                  absolute
                  w-[240px]
                  h-[240px]
                  sm:w-[350px]
                  sm:h-[350px]
                  lg:w-[430px]
                  lg:h-[430px]
                  rounded-full
                  border
                  border-red-600/10
                "
              />


              {/* =================================================
                  NEW SPIDER-MAN IMAGE
                  SAME PLACE + SAME SIZE
              ================================================= */}
              <div className="relative z-10">

                <img
                  src="public\spiderimg.jpeg"
                  alt="Spider-Man"
                  className="
                    relative
                    w-[320px]
                    sm:w-[420px]
                    md:w-[480px]
                    lg:w-[540px]
                    xl:w-[590px]
                    max-h-[700px]
                    object-contain
                    drop-shadow-[0_0_35px_rgba(239,68,68,0.35)]
                    transition-transform
                    duration-700
                    hover:scale-[1.03]
                  "
                />

              </div>


              {/* READY badge */}
              <div
                className="
                  absolute
                  z-20
                  bottom-4
                  right-4
                  sm:right-8
                  lg:right-0
                  bg-red-600
                  text-white
                  px-5
                  py-2
                  font-black
                  text-sm
                  tracking-wider
                  uppercase
                  rotate-[-3deg]
                  shadow-[4px_4px_0px_#fff]
                "
              >
                THWIP! WEB-DEVELOPER
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          PORTFOLIO QUICK SECTIONS
      ========================================================= */}
      <section className="py-16 relative bg-[#050507]">

        <div className="absolute top-0 left-0 right-0 h-px bg-red-900/40" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Heading */}
          <div className="flex flex-col items-center text-center mb-12">

            <div
              className="
                inline-flex
                items-center
                gap-1.5
                px-3
                py-1
                rounded-full
                bg-red-950/40
                border
                border-red-900/60
                text-xs
                font-mono
                text-red-400
                mb-3
              "
            >

              <Sparkles className="w-3.5 h-3.5" />

              <span>EXPLORE PORTFOLIO</span>

            </div>


            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Portfolio Navigation &amp; Highlights
            </h2>


            <p className="mt-2 text-sm text-slate-400 max-w-lg">
              Navigate through dedicated pages detailing academic background,
              technical skills, projects, and work experience.
            </p>

          </div>


          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {quickSections.map((sec, idx) => (

              <Link
                key={idx}
                to={sec.path}
                className="
                  group
                  rounded-2xl
                  p-6
                  flex
                  flex-col
                  justify-between
                  bg-[#09090c]
                  border
                  border-slate-800
                  hover:border-red-600/70
                  hover:bg-red-950/10
                  transition-all
                  duration-300
                "
              >

                <div>

                  {/* Card Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">

                    <div
                      className="
                        w-10
                        h-10
                        rounded-xl
                        bg-slate-900
                        border
                        border-slate-700
                        flex
                        items-center
                        justify-center
                        group-hover:scale-105
                        group-hover:border-red-600
                        transition-transform
                      "
                    >
                      {sec.icon}
                    </div>


                    <span
                      className="
                        text-[11px]
                        font-mono
                        text-red-400
                        px-2.5
                        py-0.5
                        rounded-full
                        bg-red-950/40
                        border
                        border-red-500/20
                      "
                    >
                      {sec.badge}
                    </span>

                  </div>


                  {/* Title */}
                  <h3 className="mt-4 text-lg font-bold text-white group-hover:text-red-400 transition-colors">
                    {sec.title}
                  </h3>


                  {/* Description */}
                  <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {sec.desc}
                  </p>

                </div>


                {/* Bottom */}
                <div
                  className="
                    mt-6
                    pt-3
                    border-t
                    border-slate-800/80
                    flex
                    items-center
                    justify-between
                    text-xs
                    font-medium
                    text-red-400
                    group-hover:text-red-300
                  "
                >

                  <span>View Full Page</span>

                  <ArrowRight
                    className="
                      w-4
                      h-4
                      transform
                      group-hover:translate-x-1
                      transition-transform
                    "
                  />

                </div>

              </Link>

            ))}

          </div>

        </div>

      </section>

    </div>
  );
}