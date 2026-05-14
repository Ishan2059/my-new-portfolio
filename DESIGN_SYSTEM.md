# Design System Reference

Quick reference for maintaining design consistency across the portfolio.

## 🎨 Color Palette

### CSS Variables (defined in `app/globals.css`)

```css
--color-bg:         #0A0A0A   /* Near-black site background */
--color-surface:    #141414   /* Card / section surface */
--color-border:     #222222   /* Subtle borders */
--color-accent:     #CAFF00   /* Electric lime — primary accent */
--color-accent-dim: #A8D600   /* Hover state of accent */
--color-text-primary:   #F5F5F5  /* Headlines */
--color-text-secondary: #8A8A8A  /* Body / labels */
--color-text-muted:     #444444  /* Captions / metadata */
```

### Tailwind Classes

Use these classes in components:

```tsx
bg-bg              // Background
bg-surface         // Card surfaces
border-border      // Borders
text-accent        // Accent color
bg-accent          // Accent background
text-text-primary  // Primary text
text-text-secondary // Secondary text
text-text-muted    // Muted text
```

### Usage Guidelines

- **Accent color (#CAFF00):** Use sparingly for CTAs, active states, and key highlights
- **Text hierarchy:** Primary for headlines, secondary for body, muted for metadata
- **Backgrounds:** Use `bg` for main background, `surface` for elevated cards
- **Borders:** Always use `border` color for consistency

## 📝 Typography

### Font Families

```tsx
font-syne  // Headings, display text (Syne 700, 800)
font-dm    // Body text, labels (DM Sans 400, 500)
```

### Type Scale

| Element | Class | Size | Weight | Tracking | Line Height |
|---------|-------|------|--------|----------|-------------|
| Display | `font-syne font-extrabold text-[clamp(52px,8vw,96px)]` | 96px → 52px | 800 | -0.04em | 0.95 |
| H1 | `font-syne font-bold text-[clamp(36px,5vw,64px)]` | 64px → 36px | 700 | -0.03em | 1.05 |
| H2 | `font-syne font-bold text-[40px]` | 40px | 700 | -0.02em | 1.2 |
| H3 | `font-dm font-medium text-[24px]` | 24px | 500 | 0 | 1.4 |
| Body | `font-dm text-[16px]` | 16px | 400 | 0 | 1.65 |
| Body Large | `font-dm text-[18px]` | 18px | 400 | 0 | 1.7 |
| Label | `font-dm font-medium text-[12px] tracking-[0.12em] uppercase` | 12px | 500 | 0.12em | 1.5 |

### Usage Examples

```tsx
// Display headline
<h1 className="font-syne font-extrabold text-[clamp(52px,8vw,96px)] leading-[0.95] tracking-[-0.04em]">
  The guy who solves your problem.
</h1>

// Section heading
<h2 className="font-syne font-bold text-[40px] tracking-[-0.02em]">
  Who I am.
</h2>

// Body text
<p className="font-dm text-[18px] leading-[1.7] text-text-secondary">
  I'm Ishan Mishra, a UI/UX Designer from Nepal.
</p>

// Label
<div className="font-dm font-medium text-[12px] tracking-[0.12em] uppercase text-accent">
  → UI/UX Designer · Nepal
</div>
```

## 📏 Spacing

### 8pt Grid System

Use these spacing values consistently:

```tsx
gap-2   // 8px
gap-4   // 16px
gap-6   // 24px
gap-8   // 32px
gap-12  // 48px
gap-16  // 64px
gap-24  // 96px
gap-32  // 128px

// Same for padding (p-), margin (m-), etc.
```

### Section Spacing

```tsx
// Section padding
py-32 px-6 md:px-12  // Standard section padding

// Content max-width
max-w-[1440px] mx-auto  // Container width

// Element spacing
space-y-8   // Vertical spacing between elements
space-y-12  // Larger vertical spacing
space-y-16  // Section-level spacing
```

## 🔲 Border Radius

```tsx
rounded-sm    // 4px - tags, chips
rounded-md    // 8px - cards
rounded-full  // Pills and buttons
```

## 🌟 Shadows & Effects

### Card Shadow

```tsx
shadow-card  // 0 0 0 1px var(--color-border), 0 8px 32px rgba(0,0,0,0.4)
```

### Glow Effect

```tsx
shadow-glow-accent  // 0 0 24px rgba(202,255,0,0.15)
```

### Usage

```tsx
// Standard card
<div className="bg-surface border border-border rounded-md shadow-card">
  Card content
</div>

// Hover glow (use with Framer Motion)
<motion.div
  whileHover={{ boxShadow: '0 0 24px rgba(202,255,0,0.15)' }}
>
  Glowing card
</motion.div>
```

## 🎭 Animation Guidelines

### Timing

```tsx
duration-200  // Quick interactions (hover, focus)
duration-300  // Standard transitions
duration-700  // Scroll reveals
```

### Easing

```tsx
// Custom easing (use with Framer Motion)
ease: [0.16, 1, 0.3, 1]  // Expo out - smooth, natural
```

### Animated Properties

**✅ DO animate:**
- `transform` (translate, scale, rotate)
- `opacity`

**❌ DON'T animate:**
- `width`, `height`
- `padding`, `margin`
- `top`, `left`, `right`, `bottom`

### Common Patterns

```tsx
// Scroll reveal
<MotionWrapper delay={0.1}>
  <div>Content</div>
</MotionWrapper>

// Hover lift
<motion.div whileHover={{ y: -4 }} transition={{ duration: 0.3 }}>
  Card
</motion.div>

// Hover scale
<motion.div whileHover={{ scale: 1.02 }}>
  Button
</motion.div>

// Magnetic button
<MagneticButton className="...">
  Click me
</MagneticButton>
```

## 🔘 Buttons

### Primary Button

```tsx
<button className="bg-accent text-bg font-syne font-bold text-[14px] px-8 py-4 rounded-full hover:bg-accent-dim transition-colors">
  Primary Action
</button>
```

### Ghost Button

```tsx
<button className="border border-[#333] text-text-primary font-syne font-bold text-[14px] px-8 py-4 rounded-full hover:border-accent hover:text-accent transition-colors">
  Secondary Action
</button>
```

### Link Button

```tsx
<a href="#" className="font-syne font-bold text-[14px] text-accent hover:underline underline-offset-4">
  Text Link
</a>
```

## 🎴 Cards

### Standard Card

```tsx
<div className="bg-surface border border-border rounded-md p-6 hover:border-accent transition-colors">
  Card content
</div>
```

### Interactive Card with Hover

```tsx
<motion.div
  className="bg-surface border border-border rounded-md p-6"
  whileHover={{ y: -4 }}
  transition={{ duration: 0.3 }}
>
  Card content
</motion.div>
```

### Large Feature Card

```tsx
<div className="bg-surface border border-border rounded-md p-12 md:p-16">
  Large card content
</div>
```

## 🏷️ Tags & Pills

### Skill Tag

```tsx
<span className="font-dm text-[14px] px-4 py-2 bg-surface border border-border rounded-sm text-text-secondary hover:border-accent hover:text-accent transition-colors">
  Skill Name
</span>
```

### Status Pill

```tsx
<div className="inline-flex items-center gap-2 bg-accent text-bg font-dm font-medium text-[14px] px-4 py-2 rounded-full">
  <span className="w-2 h-2 rounded-full bg-bg animate-pulse" />
  Available for projects
</div>
```

## 📱 Responsive Breakpoints

```tsx
// Mobile first approach
className="text-base md:text-lg lg:text-xl"

// Breakpoints
sm: 640px   // Small tablets
md: 768px   // Tablets
lg: 1024px  // Laptops
xl: 1280px  // Desktops
2xl: 1536px // Large desktops
```

### Common Responsive Patterns

```tsx
// Grid
grid md:grid-cols-2 lg:grid-cols-3

// Flex direction
flex flex-col md:flex-row

// Spacing
px-6 md:px-12  // Horizontal padding
py-16 md:py-32 // Vertical padding

// Text size
text-[clamp(36px,5vw,64px)]  // Fluid typography
```

## ♿ Accessibility

### Focus States

```css
/* Automatically applied via globals.css */
*:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
}
```

### ARIA Labels

```tsx
// Navigation
<nav aria-label="Main navigation">

// Sections
<section id="about" aria-labelledby="about-heading">
  <h2 id="about-heading">About</h2>
</section>

// Decorative icons
<Icon aria-hidden="true" />

// Icon buttons
<button aria-label="Open menu">
  <MenuIcon />
</button>
```

### Reduced Motion

```tsx
// Automatically handled by MotionWrapper and MagneticButton
// Respects prefers-reduced-motion media query
```

## 🎯 Best Practices

### DO ✅

- Use CSS variables for colors
- Follow 8pt grid for spacing
- Animate only transform and opacity
- Use semantic HTML
- Provide ARIA labels
- Test on multiple screen sizes
- Maintain consistent spacing
- Use Tailwind utility classes

### DON'T ❌

- Hardcode hex colors
- Use arbitrary spacing values
- Animate layout properties
- Skip heading levels
- Forget focus states
- Use emojis as icons
- Mix font families inconsistently
- Override Tailwind with custom CSS

## 📚 Component Library

### Reusable Components

```
components/
├── MotionWrapper.tsx    // Scroll reveal animations
├── MagneticButton.tsx   // Magnetic cursor effect
├── Header.tsx           // Fixed navigation
├── Hero.tsx             // Hero section
├── About.tsx            // About section
├── Work.tsx             // Work section
├── CaseStudies.tsx      // Case studies section
├── Connect.tsx          // Contact section
└── Footer.tsx           // Footer
```

### Usage

```tsx
import MotionWrapper from '@/components/MotionWrapper'
import MagneticButton from '@/components/MagneticButton'

// Scroll reveal
<MotionWrapper delay={0.2}>
  <div>Animated content</div>
</MotionWrapper>

// Magnetic button
<MagneticButton
  href="/resume.pdf"
  className="bg-accent text-bg px-8 py-4 rounded-full"
>
  Download Resume
</MagneticButton>
```

---

**Maintain this system for consistency and quality!** 🎨
