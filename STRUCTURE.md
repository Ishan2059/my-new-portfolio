# Project Structure

Visual guide to understanding the portfolio codebase.

## 📁 Directory Tree

```
ishan-portfolio/
│
├── 📄 Documentation
│   ├── WELCOME.md              ⭐ Start here!
│   ├── INDEX.md                📚 Documentation index
│   ├── QUICK_START.md          ⚡ 5-minute setup
│   ├── README.md               📖 Project overview
│   ├── TODO.md                 ✅ Pre-launch checklist
│   ├── DEPLOYMENT.md           🚀 Deployment guide
│   ├── DESIGN_SYSTEM.md        🎨 Design reference
│   ├── PROJECT_SUMMARY.md      📊 Architecture overview
│   └── STRUCTURE.md            📁 This file
│
├── 🎨 Application
│   ├── app/
│   │   ├── layout.tsx          🏗️ Root layout
│   │   │   ├── Metadata (SEO)
│   │   │   ├── Fonts (Syne, DM Sans)
│   │   │   ├── JSON-LD (structured data)
│   │   │   └── Skip-to-content link
│   │   │
│   │   ├── page.tsx            📄 Main page
│   │   │   └── Assembles all sections
│   │   │
│   │   └── globals.css         🎨 Global styles
│   │       ├── CSS variables (colors)
│   │       ├── Base resets
│   │       ├── Grain overlay
│   │       ├── Focus styles
│   │       └── Reduced motion support
│   │
│   ├── components/
│   │   ├── Header.tsx          🧭 Navigation
│   │   │   ├── Fixed positioning
│   │   │   ├── Scroll effects
│   │   │   ├── Active section indicator
│   │   │   └── Mobile menu
│   │   │
│   │   ├── Hero.tsx            🎯 Hero section
│   │   │   ├── Animated headline
│   │   │   ├── CTAs (magnetic button)
│   │   │   └── Geometric SVG
│   │   │
│   │   ├── About.tsx           👤 About section
│   │   │   ├── Introduction
│   │   │   ├── Skills tags
│   │   │   ├── Availability status
│   │   │   └── FAQ (AEO)
│   │   │
│   │   ├── Work.tsx            💼 Work section
│   │   │   └── Dribbble link card
│   │   │
│   │   ├── CaseStudies.tsx     📚 Case studies
│   │   │   └── Behance link card
│   │   │
│   │   ├── Connect.tsx         📧 Contact section
│   │   │   ├── Email link
│   │   │   ├── Social grid
│   │   │   └── Resume download
│   │   │
│   │   ├── Footer.tsx          🦶 Footer
│   │   │   ├── Copyright
│   │   │   └── Back to top
│   │   │
│   │   ├── MagneticButton.tsx  🧲 Reusable component
│   │   │   ├── Magnetic cursor effect
│   │   │   ├── Mouse tracking
│   │   │   └── Spring animation
│   │   │
│   │   └── MotionWrapper.tsx   ✨ Reusable component
│   │       ├── Scroll reveal
│   │       ├── Viewport detection
│   │       └── Reduced motion support
│   │
│   └── public/
│       ├── resume.pdf          ⚠️ REPLACE with actual CV
│       ├── og-image.svg        📐 SVG template
│       ├── og-image.png        ⚠️ CREATE 1200×630 PNG
│       └── OG-IMAGE-README.md  📝 Instructions
│
├── ⚙️ Configuration
│   ├── package.json            📦 Dependencies & scripts
│   ├── tsconfig.json           🔷 TypeScript config
│   ├── tailwind.config.ts      🎨 Tailwind config
│   ├── next.config.js          ⚙️ Next.js config
│   ├── postcss.config.js       🎨 PostCSS config
│   ├── .eslintrc.json          ✅ ESLint config
│   ├── .gitignore              🚫 Git ignore rules
│   └── .env.example            🔐 Environment template
│
└── 🛠️ Scripts
    └── scripts/
        └── find-placeholders.js 🔍 Find placeholder content
```

## 🔄 Data Flow

```
User visits site
    ↓
app/layout.tsx (loads fonts, metadata)
    ↓
app/page.tsx (main page)
    ↓
┌─────────────────────────────────────┐
│ <Header />          (fixed nav)     │
├─────────────────────────────────────┤
│ <main>                              │
│   ├── <Hero />      (#home)         │
│   ├── <About />     (#about)        │
│   ├── <Work />      (#work)         │
│   ├── <CaseStudies /> (#case-studies) │
│   └── <Connect />   (#connect)     │
│ </main>                             │
├─────────────────────────────────────┤
│ <Footer />          (copyright)     │
└─────────────────────────────────────┘
```

## 🎨 Component Hierarchy

```
page.tsx
├── Header
│   ├── Logo (link to #home)
│   ├── Navigation
│   │   ├── About link
│   │   ├── Work link
│   │   ├── Case Studies link
│   │   └── Connect link
│   └── Mobile Menu
│       └── Full-screen overlay
│
├── Hero
│   ├── Label (UI/UX Designer · Nepal)
│   ├── Headline (animated words)
│   ├── Subheading
│   ├── CTAs
│   │   ├── MagneticButton (See My Work)
│   │   └── Ghost Button (Download Resume)
│   └── Geometric SVG (rotating)
│
├── About
│   ├── MotionWrapper
│   │   ├── Heading
│   │   ├── Body text
│   │   ├── Skills tags
│   │   ├── Availability pill
│   │   └── FAQ section (AEO)
│   └── Decorative label (01 ABOUT)
│
├── Work
│   ├── MotionWrapper
│   │   ├── Label (02 · VISUAL WORK)
│   │   ├── Heading
│   │   ├── Body text
│   │   └── Large card → Dribbble
│   └── Hover effects
│
├── CaseStudies
│   ├── MotionWrapper
│   │   ├── Label (03 · CASE STUDIES)
│   │   ├── Heading
│   │   ├── Body text
│   │   └── Large card → Behance
│   └── Glow effects
│
├── Connect
│   ├── MotionWrapper
│   │   ├── Label (04 · CONNECT)
│   │   ├── Heading
│   │   ├── Body text
│   │   ├── Email link
│   │   └── Social grid
│   │       ├── LinkedIn card
│   │       ├── Twitter card
│   │       ├── Instagram card
│   │       └── Resume card (accent)
│   └── Hover effects
│
└── Footer
    ├── Copyright
    └── Back to top link
```

## 🎭 Animation System

```
Page Load Sequence:
0ms    → Grain overlay fades in
100ms  → Header slides in
300ms  → Hero label fades in
500ms  → Hero headline words stagger in
900ms  → Hero subtext + CTAs fade in

Scroll Animations:
User scrolls → MotionWrapper detects viewport
            → Content reveals with stagger
            → Smooth transitions

Interactions:
Hover → Card lifts (y: -4px)
      → Border color changes
      → Glow effect appears

Magnetic Button:
Mouse move → Track position
          → Calculate offset
          → Apply spring animation
          → Translate button (±12px)
```

## 🎨 Styling Architecture

```
globals.css
├── CSS Variables
│   ├── Colors (--color-*)
│   ├── Shadows (--shadow-*)
│   └── Effects (--glow-*)
│
├── Base Styles
│   ├── Box sizing
│   ├── Smooth scroll
│   └── Font smoothing
│
├── Grain Overlay
│   └── body::before (SVG noise)
│
├── Skip to Content
│   └── .skip-to-content
│
├── Focus Styles
│   └── *:focus-visible
│
└── Reduced Motion
    └── @media (prefers-reduced-motion)

tailwind.config.ts
├── Extend Colors
│   └── Map to CSS variables
│
├── Extend Fonts
│   ├── font-syne
│   └── font-dm
│
├── Extend Spacing
│   └── 8pt grid values
│
└── Extend Shadows
    ├── shadow-card
    └── shadow-glow-accent
```

## 📊 File Sizes (Approximate)

```
Component Files:
├── Header.tsx          ~4 KB
├── Hero.tsx            ~5 KB
├── About.tsx           ~6 KB
├── Work.tsx            ~2 KB
├── CaseStudies.tsx     ~2 KB
├── Connect.tsx         ~4 KB
├── Footer.tsx          ~1 KB
├── MagneticButton.tsx  ~2 KB
└── MotionWrapper.tsx   ~1 KB

Configuration:
├── globals.css         ~2 KB
├── layout.tsx          ~3 KB
├── page.tsx            ~1 KB
└── tailwind.config.ts  ~1 KB

Total (uncompiled):     ~34 KB
```

## 🔗 Dependencies

```
Production:
├── next                (Framework)
├── react               (UI library)
├── react-dom           (React renderer)
├── framer-motion       (Animations)
└── lucide-react        (Icons)

Development:
├── typescript          (Type checking)
├── tailwindcss         (Styling)
├── postcss             (CSS processing)
├── autoprefixer        (CSS prefixing)
└── eslint              (Linting)
```

## 🎯 Key Features by File

| File | Key Features |
|------|--------------|
| `layout.tsx` | SEO metadata, fonts, JSON-LD, skip link |
| `page.tsx` | Section assembly, semantic HTML |
| `globals.css` | CSS variables, grain overlay, focus styles |
| `Header.tsx` | Scroll effects, mobile menu, active indicator |
| `Hero.tsx` | Staggered animation, magnetic button, SVG |
| `About.tsx` | FAQ for AEO, skills tags, availability |
| `Work.tsx` | Hover effects, external link |
| `CaseStudies.tsx` | Glow effects, external link |
| `Connect.tsx` | Social grid, resume download |
| `Footer.tsx` | Smooth scroll to top |
| `MagneticButton.tsx` | Mouse tracking, spring animation |
| `MotionWrapper.tsx` | Scroll reveal, reduced motion |

## 🔄 Update Flow

```
1. User updates content
   ├── Social links in components/
   ├── Email in Connect.tsx & layout.tsx
   ├── Domain in layout.tsx
   └── Files in public/

2. Run find-placeholders
   └── npm run find-placeholders

3. Test locally
   ├── npm run dev
   └── Verify changes

4. Build for production
   ├── npm run build
   └── Fix any errors

5. Deploy
   ├── Push to GitHub
   └── Vercel auto-deploys
```

## 📱 Responsive Breakpoints

```
Mobile First Approach:

Base (375px+)
├── Single column
├── Stacked sections
└── Mobile menu

md (768px+)
├── Two columns
├── Horizontal nav
└── Larger typography

lg (1024px+)
├── Wider spacing
└── Larger components

xl (1280px+)
├── Max container width
└── Optimal reading length

2xl (1440px+)
└── Same as xl (capped)
```

## 🎨 Color Usage Map

```
Background (#0A0A0A)
└── Used for: body, dark areas

Surface (#141414)
└── Used for: cards, elevated elements

Border (#222222)
└── Used for: card borders, dividers

Accent (#CAFF00)
└── Used for: CTAs, highlights, active states

Text Primary (#F5F5F5)
└── Used for: headlines, important text

Text Secondary (#8A8A8A)
└── Used for: body text, descriptions

Text Muted (#444444)
└── Used for: captions, metadata
```

## 🚀 Performance Optimizations

```
Fonts:
├── next/font/google (automatic optimization)
├── font-display: swap (no FOIT)
└── Preload critical fonts

Images:
├── SVG for graphics (scalable, small)
└── Optimized OG image (< 1MB)

Animations:
├── Only transform & opacity (GPU accelerated)
├── Reduced motion support
└── Viewport-based loading

Code:
├── TypeScript (type safety)
├── Tree shaking (unused code removed)
├── Static generation (fast loading)
└── Minimal JavaScript bundle
```

---

**Need more details?** Check [INDEX.md](INDEX.md) for complete documentation.

**Want to customize?** See [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md) for guidelines.
