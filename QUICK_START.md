# Quick Start Guide

Get your portfolio up and running in 5 minutes.

## 🚀 Installation

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — your portfolio is live locally! 🎉

## ✏️ Customize Content (5 Minutes)

### 1. Update Social Links (2 min)

Open these files and replace `[username]` with your actual handles:

**`components/Work.tsx`**
```tsx
// Line ~40
href="https://dribbble.com/YOUR_USERNAME"
```

**`components/CaseStudies.tsx`**
```tsx
// Line ~40
href="https://behance.net/YOUR_USERNAME"
```

**`components/Connect.tsx`**
```tsx
// Lines ~10-25
href: 'https://linkedin.com/in/YOUR_USERNAME',
href: 'https://twitter.com/YOUR_USERNAME',
href: 'https://instagram.com/YOUR_USERNAME',
```

**`app/layout.tsx`**
```tsx
// Lines ~60-65 (JSON-LD section)
"sameAs": [
  "https://dribbble.com/YOUR_USERNAME",
  "https://behance.net/YOUR_USERNAME",
  "https://linkedin.com/in/YOUR_USERNAME",
  "https://twitter.com/YOUR_USERNAME"
]
```

### 2. Update Email (1 min)

**`components/Connect.tsx`**
```tsx
// Line ~70
href="mailto:YOUR_EMAIL@example.com"
```

**`app/layout.tsx`**
```tsx
// Line ~58 (JSON-LD section)
"email": "YOUR_EMAIL@example.com",
```

### 3. Update Domain (1 min)

**`app/layout.tsx`**
```tsx
// Lines ~20, ~30, ~35, ~55 (metadata and JSON-LD)
url: "https://YOUR_DOMAIN.com"
```

### 4. Add Your Resume (1 min)

Replace `public/resume.pdf` with your actual CV file. Keep the filename as `resume.pdf`.

## 🎨 Create OG Image (Optional but Recommended)

Create a 1200×630px image for social media sharing:

**Quick Option:**
1. Go to [Canva](https://www.canva.com/)
2. Search "Open Graph Image" templates
3. Customize with your name and branding
4. Download as PNG
5. Save as `public/og-image.png`

**See `public/OG-IMAGE-README.md` for detailed instructions.**

## 🧪 Test Your Changes

```bash
# Build for production
npm run build

# Test production build
npm start
```

Visit [http://localhost:3000](http://localhost:3000) and verify:
- ✅ All social links work
- ✅ Email link works
- ✅ Resume downloads correctly
- ✅ Navigation is smooth
- ✅ Mobile menu works

## 🚢 Deploy to Vercel (5 Minutes)

### Option 1: GitHub + Vercel (Recommended)

```bash
# 1. Initialize git (if not already)
git init
git add .
git commit -m "Initial commit"

# 2. Create GitHub repository and push
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

Then:
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Click "Deploy" (Vercel auto-detects Next.js)
5. Done! 🎉

### Option 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

## 📋 Complete Checklist

Use `TODO.md` for a comprehensive pre-launch checklist.

## 🆘 Troubleshooting

### "Module not found" error

```bash
rm -rf node_modules .next
npm install
```

### Build fails

```bash
npm run lint
# Fix any errors shown
```

### Fonts not loading

Ensure you have internet connection during build (fonts load from Google Fonts).

### Resume not downloading

- Check file exists: `public/resume.pdf`
- Check file permissions
- Try different browser

## 📚 Next Steps

1. **Read `DEPLOYMENT.md`** for detailed deployment guide
2. **Check `TODO.md`** for complete pre-launch checklist
3. **Review `DESIGN_SYSTEM.md`** to understand the design system
4. **Run Lighthouse audit** to verify performance and SEO

## 🎯 Quality Checks Before Going Live

```bash
# 1. Build succeeds
npm run build

# 2. No console errors
npm start
# Open browser console, check for errors

# 3. Test on mobile
# Use Chrome DevTools device emulation

# 4. Run Lighthouse
# Chrome DevTools > Lighthouse > Generate report
```

**Target Scores:**
- Performance: ≥ 90
- Accessibility: ≥ 95
- Best Practices: ≥ 90
- SEO: 100

## 🎨 Customization Tips

### Change Colors

Edit `app/globals.css`:
```css
:root {
  --color-accent: #YOUR_COLOR;  /* Change accent color */
}
```

### Change Fonts

Edit `app/layout.tsx`:
```tsx
import { Your_Font } from 'next/font/google'
```

### Add Content

- Edit component files in `components/`
- Follow existing patterns
- Maintain design system consistency

### Add Sections

1. Create new component in `components/`
2. Import in `app/page.tsx`
3. Add to navigation in `components/Header.tsx`

## 📞 Need Help?

- **Documentation:** Check `README.md`, `DEPLOYMENT.md`, `DESIGN_SYSTEM.md`
- **Next.js Issues:** [nextjs.org/docs](https://nextjs.org/docs)
- **Deployment Issues:** [vercel.com/docs](https://vercel.com/docs)

## ⚡ Pro Tips

1. **Test on real devices** — not just browser DevTools
2. **Use Lighthouse** — run audits regularly
3. **Check social previews** — use Facebook Debugger, Twitter Card Validator
4. **Monitor performance** — enable Vercel Analytics after deployment
5. **Keep it simple** — don't over-customize, the design is intentional

## 🎉 You're Ready!

Your portfolio is now:
- ✅ Professionally designed
- ✅ Performance optimized
- ✅ SEO ready
- ✅ Accessibility compliant
- ✅ Mobile responsive
- ✅ Production ready

**Now go win some clients!** 🚀

---

**Time to complete:** ~15 minutes (5 min setup + 5 min customize + 5 min deploy)

**Questions?** Check the other documentation files or search the codebase for `TODO` comments.
