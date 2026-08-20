# Sreenidhi Portfolio

A premium, dark-themed personal portfolio built with React, Vite, and Tailwind CSS.

## Overview

This portfolio communicates:
- **Curiosity** — actively learning and exploring
- **Growth** — continuous improvement mindset
- **Creativity** — thoughtful design and interactions
- **Technical potential** — real projects and honest skills
- **Authenticity** — no exaggerated claims

## Technologies

- **React 18** — UI library
- **Vite** — Build tool and dev server
- **Tailwind CSS** — Utility-first styling
- **Framer Motion** — Animations and interactions
- **Lucide React** — Icons

## Installation

```bash
cd Sreenidhi-Portfolio
npm install
```

## Development

```bash
npm run dev
```

The development server will start at `http://localhost:5173`

## Production Build

```bash
npm run build
```

The optimized build will be output to the `dist/` folder.

## Customization Guide

### 1. Profile Photo
Replace the placeholder at:
```
/public/assets/profile.jpg
```
No code changes needed. The image will auto-load.

### 2. Social Links
Edit:
```
/src/data/social.js
```
Update GitHub, LinkedIn, and email with your actual URLs.

### 3. Personal Information
Edit:
```
/src/data/personal.js
```
Update name, bio, education details, CGPA, etc.

### 4. Projects
Edit:
```
/src/data/projects.js
```
- Update descriptions, technologies, and links
- Add GitHub URLs for MediTwin and ServiceHub
- Replace `[PASTE ... URL HERE]` placeholders
- Add project preview images to `/public/assets/projects/{project-name}/cover.jpg`

### 5. Certificates
Add certificate files to:
- `/public/assets/certificates/courses/` — for course certificates
- `/public/assets/certificates/college-events/` — for event certificates

Then update:
```
/src/data/certificates.js
```
Add entries with correct file paths, titles, organizations, and dates.

### 6. Skills
Edit:
```
/src/data/skills.js
```
Add, remove, or update skills and their status labels.

## Project Structure

```
Sreenidhi-Portfolio/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── README.md
├── public/
│   └── assets/
│       ├── profile.jpg
│       ├── certificates/
│       │   ├── courses/
│       │   └── college-events/
│       └── projects/
│           ├── visionsync/
│           ├── meditwin/
│           └── servicehub/
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── data/
    │   ├── projects.js
    │   ├── certificates.js
    │   ├── skills.js
    │   ├── social.js
    │   └── personal.js
    ├── hooks/
    │   ├── useMousePosition.js
    │   └── useReducedMotion.js
    ├── components/
    │   ├── Navbar.jsx
    │   ├── CustomCursor.jsx
    │   ├── MagneticButton.jsx
    │   ├── SectionReveal.jsx
    │   ├── ProjectCard.jsx
    │   ├── ProjectModal.jsx
    │   ├── CertificateCard.jsx
    │   ├── CertificateModal.jsx
    │   └── Footer.jsx
    └── sections/
        ├── Hero.jsx
        ├── About.jsx
        ├── Learning.jsx
        ├── Projects.jsx
        ├── Skills.jsx
        ├── Experience.jsx
        ├── Education.jsx
        ├── Certifications.jsx
        └── Contact.jsx
```

## Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import repo on [vercel.com](https://vercel.com)
3. Framework preset: **Vite**
4. Deploy

### Netlify
1. Build the project: `npm run build`
2. Deploy the `dist/` folder

## Features

- Custom cursor with hover states
- Magnetic buttons
- Scroll-triggered section reveals
- Project modal with full details
- Certificate gallery with zoom & navigation
- Keyboard navigation (ESC, arrow keys)
- Reduced motion support
- Fully responsive (mobile, tablet, desktop)
- Accessible focus states and ARIA labels
- Semantic HTML structure
- SEO meta tags and Open Graph
