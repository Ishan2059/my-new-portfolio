# Ishan Mishra — Portfolio Website

A production-ready, single-page personal portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

> **👋 New here?** Start with [WELCOME.md](WELCOME.md) or [QUICK_START.md](QUICK_START.md)
> 
> **📚 Full documentation:** See [INDEX.md](INDEX.md) for complete guide

## 🚀 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Syne (headings) & DM Sans (body)
- **Language:** TypeScript

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## ✅ Before Launch Checklist

### Required Content Updates

Replace all placeholder content with actual information:

| Item | Location | Action |
|------|----------|--------|
| Email | `components/Connect.tsx` | Replace `hello@ishanmishra.com` |
| Dribbble URL | `components/Work.tsx` | Replace `[username]` with actual handle |
| Behance URL | `components/CaseStudies.tsx` | Replace `[username]` with actual handle |
| LinkedIn URL | `components/Connect.tsx` | Replace `[username]` with actual handle |
| Twitter URL | `components/Connect.tsx` | Replace `[username]` with actual handle |
| Instagram URL | `components/Connect.tsx` | Replace `[username]` with actual handle |
| Resume PDF | `public/resume.pdf` | Replace with actual CV file |
| OG Image | `public/og-image.png` | Create 1200×630 branded image |
| Domain | `app/layout.tsx` | Update `ishanmishra.com` in metadata |
| JSON-LD URLs | `app/layout.tsx` | Update all social URLs in structured data |

### Quality Gates

Before deploying, verify:

- [ ] Lighthouse Performance score ≥ 90
- [ ] Lighthouse SEO score = 100
- [ ] Lighthouse Accessibility score ≥ 95
- [ ] No horizontal scroll on mobile (375px viewport)
- [ ] Hero renders correctly at 375px, 768px, 1280px, 1440px
- [ ] Resume download works (correct filename, downloads not navigates)
- [ ] All external links open in new tab with correct `rel` attributes
- [ ] JSON-LD validates at [schema.org/validator](https://validator.schema.org/)
- [ ] No emojis used as icons anywhere
- [ ] `prefers-reduced-motion` reduces animations to opacity-only
- [ ] Grain overlay is visible but subtle (3–5% opacity)
- [ ] Font loads with `font-display: swap` — no invisible text flash
- [ ] Focus ring visible on every interactive element

## 🎨 Design System

### Color Tokens

All colors are defined as CSS custom properties in `app/globals.css`:

- `--color-bg`: #0A0A0A (Near-black background)
- `--color-surface`: #141414 (Card surfaces)
- `--color-border`: #222222 (Subtle borders)
- `--color-accent`: #CAFF00 (Electric lime accent)
- `--color-accent-dim`: #A8D600 (Hover state)
- `--color-text-primary`: #F5F5F5 (Headlines)
- `--color-text-secondary`: #8A8A8A (Body text)
- `--color-text-muted`: #444444 (Captions)

### Typography Scale

- **Display:** Syne 800, 96px (clamped)
- **H1:** Syne 700, 64px (clamped)
- **H2:** Syne 700, 40px
- **H3:** DM Sans 500, 24px
- **Body:** DM Sans 400, 16px
- **Label:** DM Sans 500, 12px (uppercase)

### Spacing

Uses 8pt grid: 8 / 16 / 24 / 32 / 48 / 64 / 96 / 128px

## 🎭 Animation System

### Components

- **MotionWrapper:** Scroll-triggered reveal animations
- **MagneticButton:** Magnetic cursor effect for CTAs

### Performance

- Animates only `transform` and `opacity`
- Respects `prefers-reduced-motion`
- Smooth scroll behavior throughout

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: 375px, 768px, 1280px, 1440px
- Hamburger menu on mobile with full-screen overlay
- All sections adapt gracefully to different screen sizes

## ♿ Accessibility

- WCAG AA compliant contrast ratios
- Keyboard navigation support
- Focus rings on all interactive elements
- Skip-to-content link
- Semantic HTML structure
- Proper ARIA labels
- `prefers-reduced-motion` support

## 🔍 SEO & AEO

- Complete meta tags (Open Graph, Twitter Cards)
- JSON-LD structured data (Person schema)
- FAQ section for Answer Engine Optimization
- Semantic HTML with proper heading hierarchy
- Canonical URLs
- Sitemap-ready structure

## 🚢 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

### Other Platforms

The site is a standard Next.js 14 app and can be deployed to:
- Netlify
- AWS Amplify
- Cloudflare Pages
- Any Node.js hosting

## 📝 Notes

- **TODO Comments:** Search for `TODO` in the codebase for items requiring attention
- **OG Image:** Convert `public/og-image.svg` to PNG (1200×630) or create a custom branded image
- **Resume:** Replace the placeholder PDF with your actual resume
- **Social Links:** Update all `[username]` placeholders with real handles

## 📄 License

Built for Ishan Mishra. Designed to win clients.

---

**Built with:** Next.js 14 · TypeScript · Tailwind CSS · Framer Motion
