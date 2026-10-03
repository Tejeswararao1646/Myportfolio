import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, CreditCard, AlertCircle, ArrowUpRight, Github, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ProjectModal({ project, isOpen, onClose }) {
  if (!isOpen || !project) return null;

  const { personalInfo } = portfolioData;

  const getModalDetails = (id) => {
    switch (id) {
      case 'ai-career-guidance':
        return {
          num: '01',
          purpose: 'Empowering students and job seekers with data-driven career recommendations tailored to individual skill profiles and assessments.',
          technologies: ['AI / Machine Learning Concepts', 'Data-Driven Recommendation System', 'Skill & Assessment Analytics'],
          features: [
            'Analyzes user skills and assessment metrics',
            'Predicts suitable career paths and growth insights',
            'Evaluates user profiles for personalized career guidance',
            'Data-driven recommendation modeling'
          ]
        };
      case 'ez-pass':
        return {
          num: '02',
          purpose: 'Eliminating toll queue congestion through digital web-based toll payments, vehicle registrations, and real-time transaction processing.',
          technologies: ['Web Application Development', 'Digital Payment System', 'Vehicle Registration & Transaction Tracking'],
          features: [
            'Web-based toll fee management and digital payments',
            'User-friendly interfaces for vehicle registration',
            'Transaction history and payment tracking',
            'Reduces manual highway toll delays through automation'
          ]
        };
      case 'smart-ambulance-detection':
        return {
          num: '03',
          purpose: 'Saving critical patient transit time by detecting approaching emergency ambulances and automating priority green signal clearance in traffic.',
          technologies: ['Simulation-Based System', 'Traffic Automation Flow', 'Emergency Vehicle Detection Workflow'],
          features: [
            'Simulation of ambulance detection in congested traffic scenarios',
            'Priority movement workflow for rapid emergency clearance',
            'Automation designed to reduce transit delays for emergency vehicles',
            'Working flow showcased for priority lane scheduling'
          ]
        };
      default:
        return {
          num: '00',
          purpose: 'Software engineering initiative.',
          technologies: ['Software Development'],
          features: []
        };
    }
  };

  const details = getModalDetails(project.id);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md overflow-y-auto">
        
        {/* Comic Book Page Turn / Opening Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, rotateY: -35 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          exit={{ opacity: 0, scale: 0.85, rotateY: 35 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl my-6 bg-[#0c0e16] border-3 border-[#e62429] rounded-3xl p-6 sm:p-10 shadow-[8px_8px_0px_0px_#e62429,0_0_35px_rgba(230,36,41,0.5)] overflow-hidden"
        >
          {/* Subtle Halftone Pattern */}
          <div className="absolute inset-0 comic-halftone opacity-35 pointer-events-none" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-xl bg-[#07080d] border-2 border-red-600 text-white hover:bg-[#e62429] transition-colors shadow-[3px_3px_0px_#000000] z-20 cursor-pointer"
            aria-label="Close Project Modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Top Comic Issue Header */}
          <div className="relative z-10 flex items-center gap-3 pb-4 mb-6 border-b-2 border-red-950">
            <span className="comic-badge text-sm sm:text-base font-comic">
              MISSION #{details.num}
            </span>
            <span className="font-mono text-xs text-red-400 uppercase tracking-widest">
              {project.category}
            </span>
          </div>

          {/* PROJECT TITLE */}
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-comic tracking-wider uppercase text-white drop-shadow-[0_2px_0_#e62429]">
              {project.title}
            </h2>
          </div>

          {/* OVERVIEW */}
          <div className="relative z-10 mt-6 p-4 rounded-2xl bg-red-950/20 border-l-4 border-[#e62429]">
            <h4 className="font-comic text-xs tracking-wider text-[#e62429] uppercase mb-1">
              OVERVIEW
            </h4>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-sans">
              {project.shortDescription}
            </p>
          </div>

          {/* PROBLEM / PURPOSE */}
          <div className="relative z-10 mt-6">
            <h4 className="font-comic text-xs tracking-wider text-[#e62429] uppercase mb-2">
              PROBLEM &bull; PURPOSE
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-[#07090e] p-4 rounded-xl border border-red-950">
              {details.purpose}
            </p>
          </div>

          {/* DESCRIPTION */}
          <div className="relative z-10 mt-6">
            <h4 className="font-comic text-xs tracking-wider text-[#e62429] uppercase mb-2">
              DESCRIPTION
            </h4>
            <div className="space-y-2 text-xs sm:text-sm text-slate-300">
              {project.details.map((d, dIdx) => (
                <div key={dIdx} className="flex items-start gap-2.5">
                  <span className="text-[#e62429] font-bold">&bull;</span>
                  <span>{d}</span>
                </div>
              ))}
            </div>
          </div>

          {/* TECHNOLOGIES */}
          <div className="relative z-10 mt-6">
            <h4 className="font-comic text-xs tracking-wider text-[#e62429] uppercase mb-2">
              TECHNOLOGIES
            </h4>
            <div className="flex flex-wrap gap-2">
              {details.technologies.map((tech, tIdx) => (
                <span
                  key={tIdx}
                  className="px-3 py-1 rounded-lg bg-[#07090e] text-xs font-mono text-white border border-red-800 shadow-[2px_2px_0px_#000000]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* FEATURES */}
          <div className="relative z-10 mt-6">
            <h4 className="font-comic text-xs tracking-wider text-[#e62429] uppercase mb-2">
              KEY ARCHITECTURAL FEATURES
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
              {details.features.map((feat, fIdx) => (
                <div key={fIdx} className="flex items-center gap-2 p-2 rounded-lg bg-[#07090e] border border-red-950">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#e62429] shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* GITHUB / DEMO */}
          <div className="relative z-10 mt-8 pt-6 border-t-2 border-red-950 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <span>SOURCE CODE REPOSITORIES HOSTED ON:</span>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="comic-btn-red px-5 py-2.5 rounded-xl text-base flex items-center gap-2 uppercase"
              >
                <Github className="w-4 h-4" />
                <span>VIEW GITHUB PROFILE</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
