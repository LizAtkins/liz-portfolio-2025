# Liz Atkins Portfolio

A professional portfolio showcasing web development and visual design work. Built with React and Vite, with a clean layout and dedicated project pages.

## Features

- **Animated intro** — Typing effect on the homepage greeting (“Hi, I’m Liz”)
- **Web Development** — Project cards and detail pages (e.g. EV Charging Map, University Connect, NA-WAMS, PI Portal)
- **Visual Design** — Email blasts, social campaigns, and design work with dedicated project pages
- **Responsive layout** — Works on desktop, tablet, and mobile
- **Contact form** — Formspree integration

## Tech Stack

- React 18
- Vite
- React Router v6
- SCSS/Sass
- Framer Motion
- React Icons

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/lizatkins/liz-portfolio-2025.git
   cd liz-portfolio-2025
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) (or the URL Vite prints).

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## Project Structure

```
src/
├── components/     # Reusable UI (ProjectCard, Footer, ContactForm, etc.)
├── pages/         # Route pages (Resume, project detail pages)
├── context/       # Theme context
├── data/          # projects.js (web & visual project data)
├── styles/        # SCSS (main, theme, footer, etc.)
├── assets/img/    # Images and screenshots
├── App.jsx        # Routes, intro, Web & Visual sections
└── main.jsx       # Entry point
```

## Content Overview

- **Home** — Intro with typing animation, profile photo, and sections for Web and Visual projects
- **Web** — EV Charging Map, University Connect, NA-WAMS, PI Portal, Windows Desktop Portfolio, The Clarion
- **Visual** — HTML Email Blasts, Etsy Digital Print Shop, Social Media Campaign
- **Resume** — Interactive resume with links to project pages

## Deploy (GitHub Pages)

```bash
npm run build
npm run deploy
```

Uses `gh-pages` to publish the `dist` folder. The app uses `basename: "/liz-portfolio-2025"` for client-side routing on GitHub Pages.

## License

MIT License — feel free to use this as a template for your own portfolio.
