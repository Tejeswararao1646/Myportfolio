import React from 'react';
import { X, Printer, Download, Mail, Phone, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const { personalInfo, education, experience, skills, projects } = portfolioData;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadTxt = () => {
    const content = `
============================================================
GORLE TEJESWARARAO
${personalInfo.role}
============================================================
Phone: ${personalInfo.phone}
Email: ${personalInfo.email}
Location: ${personalInfo.location}
LinkedIn: ${personalInfo.linkedin}
GitHub: ${personalInfo.github}

------------------------------------------------------------
CAREER OBJECTIVE
------------------------------------------------------------
${personalInfo.careerObjective}

------------------------------------------------------------
EDUCATION
------------------------------------------------------------
* ${education[0].degree}
  ${education[0].institution} | ${education[0].period}
  Grade: ${education[0].score}

* ${education[1].degree}
  ${education[1].institution} | ${education[1].period}
  Grade: ${education[1].score}

* ${education[2].degree}
  ${education[2].institution} | ${education[2].period}
  Grade: ${education[2].score}

------------------------------------------------------------
EXPERIENCE
------------------------------------------------------------
* ${experience[0].role}
  ${experience[0].company} | ${experience[0].period}
  - ${experience[0].responsibilities[0]}
  - ${experience[0].responsibilities[1]}
  - ${experience[0].responsibilities[2]}

------------------------------------------------------------
TECHNICAL SKILLS
------------------------------------------------------------
Programming: Python, Java
Frontend Development: HTML, CSS, React.js
Backend Development: Node.js, Flask
AI & Machine Learning: Scikit-learn, NLP, LLM, RAG
Tools & Platforms: GitHub, VS Code, Git

------------------------------------------------------------
PROJECTS
------------------------------------------------------------
1. ${projects[0].title}
   ${projects[0].shortDescription}
   Details:
   - ${projects[0].details[0]}
   - ${projects[0].details[1]}

2. ${projects[1].title}
   ${projects[1].shortDescription}
   Details:
   - ${projects[1].details[0]}
   - ${projects[1].details[1]}
   - ${projects[1].details[2]}

3. ${projects[2].title}
   ${projects[2].shortDescription}
   Details:
   - ${projects[2].details[0]}
   - ${projects[2].details[1]}
   - ${projects[2].details[2]}
============================================================
`;
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Gorle_Tejeswararao_Resume.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      {/* Modal Card */}
      <div className="relative w-full max-w-4xl bg-[#0c0e16] border-3 border-[#e62429] rounded-3xl shadow-[8px_8px_0px_#e62429] overflow-hidden my-6">
        
        {/* Top Comic Control Bar */}
        <div className="no-print bg-[#06070a] px-6 py-4 border-b-2 border-red-950 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#e62429] inline-block animate-pulse" />
            <h3 className="font-comic text-lg sm:text-xl text-white tracking-wider uppercase">
              DOSSIER PREVIEW &bull; {personalInfo.name}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="comic-btn-red px-3.5 py-1.5 rounded-lg text-sm flex items-center gap-1.5 uppercase cursor-pointer"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>PRINT / PDF</span>
            </button>

            <button
              onClick={handleDownloadTxt}
              className="comic-btn-black px-3.5 py-1.5 rounded-lg text-sm flex items-center gap-1.5 uppercase cursor-pointer"
              title="Download text file"
            >
              <Download className="w-3.5 h-3.5" />
              <span>.TXT</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors ml-2 cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Body */}
        <div id="printable-resume" className="p-6 sm:p-10 max-h-[80vh] overflow-y-auto bg-[#07090e] text-slate-200 print:bg-white print:text-black print:max-h-none print:p-0">
          
          {/* Header */}
          <div className="border-b border-red-950 print:border-black pb-6 text-center sm:text-left">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white print:text-black tracking-tight">
              {personalInfo.name}
            </h1>
            <p className="text-sm sm:text-base font-medium text-[#e62429] print:text-gray-800 mt-1 font-mono">
              {personalInfo.role}
            </p>
            
            <div className="mt-3 flex flex-wrap items-center justify-center sm:justify-start gap-y-1 gap-x-4 text-xs font-mono text-slate-400 print:text-gray-700">
              <span className="flex items-center gap-1">
                <Phone className="w-3 h-3 text-[#e62429] print:hidden" /> {personalInfo.phone}
              </span>
              <span>&bull;</span>
              <span className="flex items-center gap-1">
                <Mail className="w-3 h-3 text-[#e62429] print:hidden" /> {personalInfo.email}
              </span>
              <span>&bull;</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#e62429] print:hidden" /> {personalInfo.location}
              </span>
              <span>&bull;</span>
              <span>{personalInfo.linkedin}</span>
              <span>&bull;</span>
              <span>{personalInfo.github}</span>
            </div>
          </div>

          {/* Career Objective */}
          <div className="mt-6">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#e62429] print:text-black border-b border-red-950 print:border-gray-400 pb-1 mb-2">
              Career Objective
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 print:text-gray-800 leading-relaxed">
              {personalInfo.careerObjective}
            </p>
          </div>

          {/* Education */}
          <div className="mt-6">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#e62429] print:text-black border-b border-red-950 print:border-gray-400 pb-1 mb-3">
              Education
            </h2>
            <div className="space-y-3">
              {education.map((edu, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs sm:text-sm">
                  <div>
                    <span className="font-semibold text-white print:text-black">{edu.degree}</span>
                    <span className="block text-slate-400 print:text-gray-600 text-xs">{edu.institution}</span>
                  </div>
                  <div className="text-right sm:text-right mt-1 sm:mt-0 font-mono text-xs">
                    <span className="text-[#e62429] print:text-black font-semibold">{edu.score}</span>
                    <span className="text-slate-500 print:text-gray-600 block">{edu.period}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="mt-6">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#e62429] print:text-black border-b border-red-950 print:border-gray-400 pb-1 mb-3">
              Experience
            </h2>
            {experience.map((exp, idx) => (
              <div key={idx} className="text-xs sm:text-sm">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                  <span className="font-semibold text-white print:text-black">
                    {exp.role} &ndash; <span className="font-normal text-slate-300 print:text-gray-700">{exp.company}</span>
                  </span>
                  <span className="font-mono text-xs text-slate-400 print:text-gray-600">{exp.period}</span>
                </div>
                <ul className="mt-2 list-disc list-inside space-y-1 text-slate-300 print:text-gray-800 text-xs sm:text-sm">
                  {exp.responsibilities.map((r, rIdx) => (
                    <li key={rIdx}>{r}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Technical Skills */}
          <div className="mt-6">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#e62429] print:text-black border-b border-red-950 print:border-gray-400 pb-1 mb-3">
              Technical Skills
            </h2>
            <div className="space-y-1.5 text-xs sm:text-sm">
              <div>
                <strong className="text-white print:text-black">Programming: </strong>
                <span className="text-slate-300 print:text-gray-800">Python, Java</span>
              </div>
              <div>
                <strong className="text-white print:text-black">Frontend Development: </strong>
                <span className="text-slate-300 print:text-gray-800">HTML, CSS, React.js</span>
              </div>
              <div>
                <strong className="text-white print:text-black">Backend Development: </strong>
                <span className="text-slate-300 print:text-gray-800">Node.js, Flask</span>
              </div>
              <div>
                <strong className="text-white print:text-black">AI &amp; Machine Learning: </strong>
                <span className="text-slate-300 print:text-gray-800">Scikit-learn, NLP, LLM, RAG</span>
              </div>
              <div>
                <strong className="text-white print:text-black">Tools &amp; Platforms: </strong>
                <span className="text-slate-300 print:text-gray-800">GitHub, VS Code, Git</span>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="mt-6">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#e62429] print:text-black border-b border-red-950 print:border-gray-400 pb-1 mb-3">
              Projects
            </h2>
            <div className="space-y-4 text-xs sm:text-sm">
              {projects.map((proj, idx) => (
                <div key={idx}>
                  <div className="font-semibold text-white print:text-black">
                    {idx + 1}. {proj.title}
                  </div>
                  <div className="mt-1 space-y-1 text-slate-300 print:text-gray-800 text-xs sm:text-sm">
                    {proj.details.map((d, dIdx) => (
                      <p key={dIdx} className="leading-relaxed">&bull; {d}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="no-print bg-[#06070a] px-6 py-3 border-t-2 border-red-950 text-center text-xs text-slate-500 font-mono">
          Strictly verified against Gorle Tejeswararao's resume data.
        </div>
      </div>
    </div>
  );
}
