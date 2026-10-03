# Gorle Tejeswararao - Developer Portfolio

A modern, responsive personal portfolio website for **Gorle Tejeswararao**, a B.Tech Artificial Intelligence & Data Science student at SITAM and aspiring Software Developer. Built strictly based on his verified resume.

---

## 🛠️ Tech Stack

- **Frontend:** React 18
- **Styling:** Tailwind CSS (Modern dark cyberpunk/glassmorphic theme)
- **Icons:** Lucide React & Custom Developer SVGs
- **Build Tool:** Vite 5

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Production Build
```bash
npm run build
```
Creates an optimized, production-ready bundle in the `dist/` directory.

---

## 📁 Project Architecture

```
my port.port/
├── index.html                 # SEO title & meta description tags
├── package.json               # Dependencies and scripts
├── tailwind.config.js         # Custom dark theme and color extensions
├── postcss.config.js          # Tailwind PostCSS configuration
├── vite.config.js             # Vite configuration
└── src/
    ├── main.jsx               # React entry point
    ├── App.jsx                # Application root with layout & modals
    ├── index.css              # Glassmorphism, animations & print styles
    ├── data/
    │   └── portfolioData.js   # Centralized resume data structure
    └── components/
        ├── Navbar.jsx         # Sticky header with active scroll spy
        ├── Hero.jsx           # Abstract AI canvas & developer introduction
        ├── About.jsx          # Career objective & tech metadata
        ├── Skills.jsx         # Categorized skills with technology icons
        ├── Experience.jsx     # Vertical timeline for PixelWind internship
        ├── Projects.jsx       # 3 verified project cards with details modal
        ├── Education.jsx      # SITAM, Carmel Jr. College, ZPHS School
        ├── Contact.jsx        # Direct contact channels & interactive form
        ├── Footer.jsx         # Identity, social handles & back-to-top
        └── ResumeModal.jsx    # Printable & downloadable resume viewer
```
