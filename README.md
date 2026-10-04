# Tulas International School (TIS) — Homepage Redesign

A production-minded single-page redesign for the TIS frontend recruitment assessment. The experience retains recognizable TIS positioning and content while introducing a cleaner editorial hierarchy, responsive layouts, conversion-focused admissions CTAs, and restrained motion.

## Tech stack
- React 18
- Vite
- Framer Motion
- Lucide React
- CSS design system with responsive breakpoints

## Standout features
1. Scroll-triggered reveals with Framer Motion
2. Desktop custom cursor with hover state
3. Smooth scroll-progress indicator
4. Animated light/dark theme switcher persisted in localStorage
5. Responsive mobile navigation with focus-friendly native controls
6. `prefers-reduced-motion` support

## Architecture
```text
src/
├── components/
│   ├── animation/   # Reveal, cursor, scroll progress
│   ├── layout/      # Navbar, Footer
│   └── ui/          # Reusable buttons and section labels
├── data/             # Navigation, statistics, sports, testimonials
├── hooks/            # Theme and mobile-menu state
├── sections/         # Hero, About, Academics, Life, Sports, Campus, Quote, Testimonials, Admissions
├── App.jsx
├── main.jsx
└── styles.css
```

## Run locally
```bash
npm install
npm run dev
```

## Production build
```bash
npm run build
npm run preview
```

## Deployment
The project is Vercel-ready. Import the GitHub repository into Vercel and use the default Vite build settings (`npm run build`, output `dist`).

## QA checklist
Before submission, verify 1440px, 1280px, 1024px, 768px, 480px, 390px and 360px widths; run the production build; check browser console; verify all navigation/CTA links; and test reduced-motion behavior.

## Content basis
The redesign uses the provided assessment brief and the current Tulas International School website as the brand/content reference. Verify time-sensitive admissions details against the live TIS site immediately before submitting the assessment.
