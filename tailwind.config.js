/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        spider: {
          red: '#e62429',
          bright: '#ff1e27',
          darkred: '#991b1b',
          crimson: '#7f1d1d',
          dark: '#050608',
          panel: '#0c0e14',
          card: '#12151d',
          border: '#222838',
          blue: '#0284c7',
          cyan: '#38bdf8',
        }
      },
      fontFamily: {
        comic: ['"Bebas Neue"', 'sans-serif'],
        bangers: ['"Bangers"', 'cursive'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace']
      },
      boxShadow: {
        'comic': '4px 4px 0px 0px rgba(230, 36, 41, 1)',
        'comic-white': '4px 4px 0px 0px rgba(255, 255, 255, 1)',
        'comic-lg': '6px 6px 0px 0px rgba(230, 36, 41, 1)',
        'comic-inset': 'inset 0 0 20px rgba(230, 36, 41, 0.25)',
        'web-glow': '0 0 25px rgba(230, 36, 41, 0.4)',
        'web-glow-lg': '0 0 45px rgba(230, 36, 41, 0.6)',
      },
      keyframes: {
        'web-pulse': {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(1.02)' }
        },
        'spider-swing': {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' }
        },
        'comic-glitch': {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' }
        }
      },
      animation: {
        'web-pulse': 'web-pulse 4s ease-in-out infinite',
        'spider-swing': 'spider-swing 6s ease-in-out infinite',
        'comic-glitch': 'comic-glitch 0.3s ease-in-out',
      }
    },
  },
  plugins: [],
};
