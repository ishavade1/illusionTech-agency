# illusionTech.

A single-page website for a web design & development agency, built with
React, TypeScript, Vite, Tailwind CSS, Framer Motion, and Lucide icons.

## Getting started

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  components/   All page sections (Navbar, Hero, Services, Portfolio, Contact, etc.)
  data/         Content arrays (services, portfolio, testimonials, FAQ, process steps)
  App.tsx       Assembles all sections
  index.css     Tailwind layers + shared utility classes (.btn-primary, .card-lift, etc.)
```

## Notes

- The contact form in `src/components/Contact.tsx` currently simulates a
  submission locally. Wire it up to EmailJS or your own backend endpoint —
  there's a comment marking exactly where to add the call.
- Portfolio and testimonial images are placeholder Unsplash URLs — swap
  them for real project screenshots and client photos before launch.
- Colors, fonts, and spacing tokens live in `tailwind.config.js`.
- `prefers-reduced-motion` is respected globally in `src/index.css`.
