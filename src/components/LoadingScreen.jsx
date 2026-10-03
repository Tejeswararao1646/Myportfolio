import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen({ onComplete }) {
  const [phase, setPhase] = useState('web'); // 'web' -> 'text' -> 'complete'

  useEffect(() => {
    // Phase 1: Web drawing for 0.9s
    const timer1 = setTimeout(() => {
      setPhase('text');
    }, 900);

    // Phase 2: Reveal "TEJESWARARAO" and complete after 1.8s
    const timer2 = setTimeout(() => {
      setPhase('complete');
      if (onComplete) onComplete();
    }, 2000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== 'complete' && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 bg-[#050608] flex flex-col items-center justify-center overflow-hidden cursor-pointer"
          onClick={() => {
            setPhase('complete');
            if (onComplete) onComplete();
          }}
        >
          {/* Subtle Halftone & Radial Glow */}
          <div className="absolute inset-0 comic-halftone opacity-40 pointer-events-none" />
          <div className="absolute w-[450px] h-[450px] rounded-full bg-red-600/15 blur-[120px] pointer-events-none" />

          {/* Animated Spider-Web Formation SVG */}
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 flex items-center justify-center">
            <svg
              viewBox="0 0 200 200"
              className="w-full h-full filter drop-shadow-[0_0_12px_rgba(230,36,41,0.6)]"
            >
              {/* Radial Web Spoke Lines */}
              {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg, i) => {
                const rad = (deg * Math.PI) / 180;
                const x2 = 100 + Math.cos(rad) * 90;
                const y2 = 100 + Math.sin(rad) * 90;
                return (
                  <motion.line
                    key={i}
                    x1="100"
                    y1="100"
                    x2={x2}
                    y2={y2}
                    stroke="#e62429"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.85 }}
                    transition={{ duration: 0.7, delay: i * 0.03, ease: 'easeOut' }}
                  />
                );
              })}

              {/* Concentric Web Rings */}
              {[25, 45, 65, 85].map((radius, rIdx) => (
                <motion.polygon
                  key={`ring-${rIdx}`}
                  points={[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330]
                    .map((deg) => {
                      const rad = (deg * Math.PI) / 180;
                      return `${100 + Math.cos(rad) * radius},${100 + Math.sin(rad) * radius}`;
                    })
                    .join(' ')}
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="1.2"
                  strokeOpacity="0.75"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.8 }}
                  transition={{ duration: 0.8, delay: 0.3 + rIdx * 0.15, ease: 'easeInOut' }}
                />
              ))}

              {/* Center Glowing Spider Icon */}
              <motion.g
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.5, type: 'spring', stiffness: 300 }}
              >
                <circle cx="100" cy="100" r="16" fill="#e62429" />
                <circle cx="100" cy="100" r="14" fill="#0c0e14" stroke="#ff1e27" strokeWidth="1.5" />
                {/* Spider Symbol Path */}
                <path
                  d="M100 92 c-2 0 -4 2 -4 4 c0 3 2 5 4 5 c2 0 4 -2 4 -5 c0 -2 -2 -4 -4 -4 z M100 102 c-3 0 -6 3 -6 6 c0 4 3 6 6 6 c3 0 6 -2 6 -6 c0 -3 -3 -6 -6 -6 z"
                  fill="#ffffff"
                />
                <path
                  d="M96 95 q -6 -6 -10 -2 M104 95 q 6 -6 10 -2 M95 99 q -8 -2 -11 4 M105 99 q 8 -2 11 4 M95 105 q -8 4 -10 10 M105 105 q 8 4 10 10"
                  stroke="#e62429"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  fill="none"
                />
              </motion.g>
            </svg>
          </div>

          {/* Dramatic Comic-Style Reveal: "TEJESWARARAO" */}
          <div className="mt-8 text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.85 }}
              animate={phase === 'text' || phase === 'complete' ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-block px-4 py-1 bg-[#e62429] text-white text-xs sm:text-sm font-comic tracking-widest uppercase transform -skew-x-6 border border-black shadow-[3px_3px_0px_#ffffff] mb-2">
                MARVEL AT THE CODE
              </div>
              
              <h1 className="text-4xl sm:text-6xl font-comic tracking-wider text-white uppercase drop-shadow-[0_4px_0_#e62429]">
                TEJESWARARAO
              </h1>

              <div className="flex items-center justify-center gap-3 mt-2 text-xs sm:text-sm font-mono text-red-400">
                <span className="w-6 h-[1.5px] bg-red-600" />
                <span>SOFTWARE DEVELOPER &bull; AI/ML ENTHUSIAST</span>
                <span className="w-6 h-[1.5px] bg-red-600" />
              </div>
            </motion.div>

            {/* Skip hint */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ delay: 0.8 }}
              className="mt-6 text-[11px] font-mono text-slate-500 uppercase tracking-widest"
            >
              Click anywhere to swing in &rarr;
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
