import React from 'react';
import { motion } from 'framer-motion';

export default function SpiderSilhouette() {
  return (
    <div className="relative w-full max-w-lg aspect-square sm:aspect-[4/3] lg:aspect-square flex items-center justify-center select-none">
      
      {/* Red Comic Halftone Aura */}
      <div className="absolute w-[360px] h-[360px] rounded-full bg-gradient-to-tr from-[#e62429]/25 via-red-900/10 to-transparent blur-[80px] pointer-events-none" />

      {/* Spider-Web Graphics extending from character toward edges of screen */}
      <svg
        viewBox="0 0 500 500"
        className="absolute inset-0 w-full h-full pointer-events-none filter drop-shadow-[0_0_8px_rgba(230,36,41,0.4)]"
      >
        {/* Shooting Web Strands from Web-Shooter */}
        <motion.path
          d="M 280 250 Q 380 180 490 80"
          stroke="#ffffff"
          strokeWidth="2.5"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.85 }}
          transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
        />
        <motion.path
          d="M 280 250 Q 360 270 490 290"
          stroke="#e62429"
          strokeWidth="1.8"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.7 }}
          transition={{ duration: 1.1, delay: 0.4, ease: 'easeOut' }}
        />
        <motion.path
          d="M 280 250 Q 330 360 440 480"
          stroke="#ffffff"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.75 }}
          transition={{ duration: 1.3, delay: 0.5, ease: 'easeOut' }}
        />
        <motion.path
          d="M 280 250 Q 210 130 140 10"
          stroke="#e62429"
          strokeWidth="1.8"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{ duration: 1.2, delay: 0.6, ease: 'easeOut' }}
        />

        {/* Cross Web Netting connecting strands */}
        {[
          'M 330 215 Q 350 255 330 280',
          'M 380 170 Q 410 230 380 310',
          'M 430 120 Q 470 200 440 350',
        ].map((d, idx) => (
          <motion.path
            key={idx}
            d={d}
            stroke="#ffffff"
            strokeWidth="1"
            strokeOpacity="0.45"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.5 }}
            transition={{ duration: 0.8, delay: 0.7 + idx * 0.15 }}
          />
        ))}

        {/* Web Shooting Impact Flash Particle */}
        <motion.circle
          cx="280"
          cy="250"
          r="6"
          fill="#ff1e27"
          animate={{
            scale: [1, 1.6, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <circle cx="280" cy="250" r="3" fill="#ffffff" />
      </svg>

      {/* Comic Book SuperHero Silhouette & Panel */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-4/5 max-w-sm flex flex-col items-center"
      >
        {/* Comic Panel Box */}
        <div className="relative w-full rounded-2xl bg-[#0c0e14] border-2 border-red-600/60 p-4 shadow-[6px_6px_0px_0px_#e62429] overflow-hidden">
          
          {/* Subtle Halftone inside panel */}
          <div className="absolute inset-0 comic-halftone opacity-30 pointer-events-none" />

          {/* Top Panel Ribbon */}
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-red-900/60">
            <span className="font-comic text-xs tracking-wider text-red-500 uppercase flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              EARTH-616 // SPECIAL ISSUE #01
            </span>
            <span className="font-mono text-[10px] text-slate-400">
              ACTION COMICS
            </span>
          </div>

          {/* Stylized Spider-Man Silhouette Vector */}
          <div className="relative w-full aspect-square flex items-center justify-center">
            <svg
              viewBox="0 0 320 320"
              className="w-full h-full filter drop-shadow-[0_4px_16px_rgba(230,36,41,0.5)]"
            >
              {/* Radial Web in Silhouette Background */}
              <circle cx="160" cy="160" r="140" fill="#08090d" stroke="#e62429" strokeWidth="1.5" strokeOpacity="0.3" />
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
                const rad = (angle * Math.PI) / 180;
                return (
                  <line
                    key={i}
                    x1="160"
                    y1="160"
                    x2={160 + Math.cos(rad) * 140}
                    y2={160 + Math.sin(rad) * 140}
                    stroke="#e62429"
                    strokeWidth="1"
                    strokeOpacity="0.25"
                  />
                );
              })}

              {/* Spider-Man Character Silhouette (Athletic Comic Hero Pose) */}
              <g className="transition-transform duration-500 hover:scale-105 origin-center">
                {/* Torso & Shoulders Silhouette */}
                <path
                  d="M 160 90 
                     C 140 92, 120 102, 105 120 
                     C 90 140, 85 165, 88 190 
                     C 92 215, 105 235, 125 248
                     C 135 255, 142 270, 148 290
                     L 172 290
                     C 178 270, 185 255, 195 248
                     C 215 235, 228 215, 232 190
                     C 235 165, 230 140, 215 120
                     C 200 102, 180 92, 160 90 Z"
                  fill="#07090e"
                  stroke="#e62429"
                  strokeWidth="2.5"
                />

                {/* Head / Mask Silhouette */}
                <path
                  d="M 160 50 
                     C 135 50, 120 70, 120 100 
                     C 120 125, 135 145, 160 152 
                     C 185 145, 200 125, 200 100 
                     C 200 70, 185 50, 160 50 Z"
                  fill="#0c0e14"
                  stroke="#ff1e27"
                  strokeWidth="2"
                />

                {/* Web Pattern on Mask */}
                <path
                  d="M 160 50 L 160 152 
                     M 120 100 Q 160 115 200 100
                     M 125 80 Q 160 95 195 80
                     M 130 120 Q 160 135 190 120"
                  stroke="#e62429"
                  strokeWidth="1.2"
                  strokeOpacity="0.6"
                  fill="none"
                />

                {/* Iconic Glowing White Angular Eyes */}
                {/* Left Eye */}
                <path
                  d="M 136 92 
                     C 138 85, 146 80, 154 86 
                     C 152 98, 146 108, 132 108 
                     C 132 102, 134 96, 136 92 Z"
                  fill="#ffffff"
                  stroke="#000000"
                  strokeWidth="2.5"
                  className="filter drop-shadow-[0_0_8px_#ffffff]"
                />
                {/* Right Eye */}
                <path
                  d="M 184 92 
                     C 182 85, 174 80, 166 86 
                     C 168 98, 174 108, 188 108 
                     C 188 102, 186 96, 184 92 Z"
                  fill="#ffffff"
                  stroke="#000000"
                  strokeWidth="2.5"
                  className="filter drop-shadow-[0_0_8px_#ffffff]"
                />

                {/* Spider Emblem on Chest */}
                <path
                  d="M 160 180 c-2 0 -4 3 -4 6 c0 4 3 7 4 7 c1 0 4 -3 4 -7 c0 -3 -2 -6 -4 -6 z"
                  fill="#ffffff"
                />
                <path
                  d="M 160 196 c-4 0 -7 4 -7 9 c0 6 4 10 7 10 c3 0 7 -4 7 -10 c0 -5 -3 -9 -7 -9 z"
                  fill="#ffffff"
                />
                <path
                  d="M 154 184 q -12 -10 -20 -4 M 166 184 q 12 -10 20 -4
                     M 152 192 q -16 -4 -22 6 M 168 192 q 16 -4 22 6
                     M 152 202 q -16 6 -20 18 M 168 202 q 16 6 20 18
                     M 154 212 q -12 12 -14 26 M 166 212 q 12 12 14 26"
                  stroke="#ffffff"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  fill="none"
                />
              </g>
            </svg>
          </div>

          {/* Bottom Panel Caption */}
          <div className="mt-2 pt-2 border-t border-red-900/60 flex items-center justify-between text-xs">
            <span className="font-comic text-white tracking-wider">
              "WITH GREAT CODE COMES GREAT RESPONSIBILITY."
            </span>
            <span className="font-mono text-red-500 font-bold text-[11px]">
              &bull; READY
            </span>
          </div>

        </div>

        {/* Floating Comic Action Tag */}
        <div className="absolute -bottom-3 -right-2 px-3 py-1 bg-[#e62429] text-white text-xs font-comic tracking-wider uppercase border border-black shadow-[3px_3px_0px_#000000] transform -rotate-3">
          THWIP! WEB-SLINGER
        </div>

      </motion.div>
    </div>
  );
}
