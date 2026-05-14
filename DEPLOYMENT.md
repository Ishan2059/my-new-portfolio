# Deployment Guide

## Pre-Deployment Checklist

### 1. Update All Placeholder Content

Search for `[username]` and replace with actual social media handles:

```bash
# Search for placeholders
grep -r "\[username\]" components/ app/
```

**Files to update:**
- `components/Work.tsx` - Dribbble URL
- `components/CaseStudies.tsx` - Behance URL
- `components/Connect.tsx` - LinkedIn, Twitter, Instagram URLs
- `app/layout.tsx` - All social URLs in JSON-LD

### 2. Replace Email Address

Update `hello@ishanmishra.com` in:
- `components/Connect.tsx`
- `app/layout.tsx` (JSON-LD)

### 3. Update Domain

Replace `ishanmishra.com` with your actual domain in:
- `app/layout.tsx` (metadata and JSON-LD)

### 4. Replace Resume PDF

Replace `public/resume.pdf` with your actual CV file. Ensure:
- File is named `resume.pdf`
- File size is reasonable (< 5MB recommended)
- PDF is properly formatted and readable

### 5. Create OG Image

Create a 1200×630px PNG image for social media sharing:

**Option A: Use the SVG template**
- Open `public/og-image.svg` in a design tool (Figma, Illustrator, etc.)
- Customize with your branding
- Export as `og-image.png` (1200×630px)

**Option B: Create from scratch**
- Design a 1200×630px image
- Include your name, title, and branding
- Use the color scheme from the site (#0A0A0A background, #CAFF00 accent)
- Save as `public/og-image.png`

**Online tools:**
- [Canva OG Image Templates](https://www.canva.com/create/og-images/)
- [Figma OG Image Plugin](https://www.figma.com/community/plugin/1159123024924461424/og-image-generator)

### 6. Test Locally

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Test production build
npm start
```

Visit `http://localhost:3000` and verify:
- All sections load correctly
- Navigation works smoothly
- Resume downloads properly
- All external links open in new tabs
- Mobile menu works on small screens
- Animations are smooth

### 7. Run Lighthouse Audit

1. Open Chrome DevTools (F12)
2. Go to "Lighthouse" tab
3. Select "Desktop" and "Mobile"
4. Run audit for:
   - Performance
   - Accessibility
   - Best Practices
   - SEO

**Target Scores:**
- Performance: ≥ 90
- Accessibility: ≥ 95
- Best Practices: ≥ 90
- SEO: 100

### 8. Validate Structured Data

1. Visit [Google Rich Results Test](https://search.google.com/test/rich-results)
2. Enter your deployed URL
3. Verify Person schema is detected correctly

Or use [Schema.org Validator](https://validator.schema.org/)

## Deployment to Vercel

### Method 1: GitHub Integration (Recommended)

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Configure:
   - Framework Preset: Next.js
   - Root Directory: ./
   - Build Command: `npm run build`
   - Output Directory: (leave default)
6. Click "Deploy"

### Method 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Environment Variables

No environment variables are required for this project. All configuration is in the code.

### Custom Domain

1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions
5. Wait for DNS propagation (can take up to 48 hours)

## Deployment to Netlify

1. Push code to GitHub (see above)
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect to GitHub and select your repository
5. Configure:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Click "Deploy site"

## Post-Deployment

### 1. Test Social Sharing

Use these tools to verify OG image and meta tags:

- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)

### 2. Submit to Search Engines

- [Google Search Console](https://search.google.com/search-console)
- [Bing Webmaster Tools](https://www.bing.com/webmasters)

### 3. Monitor Performance

- Set up [Vercel Analytics](https://vercel.com/analytics)
- Enable [Vercel Speed Insights](https://vercel.com/docs/speed-insights)
- Monitor Core Web Vitals

### 4. Set Up Analytics (Optional)

If you want to track visitors:

**Google Analytics 4:**
1. Create GA4 property
2. Add tracking code to `app/layout.tsx`

**Plausible Analytics (Privacy-friendly):**
1. Sign up at [plausible.io](https://plausible.io)
2. Add script tag to `app/layout.tsx`

## Troubleshooting

### Build Fails

**Error: Module not found**
```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
npm run build
```

**TypeScript errors**
```bash
# Check for type errors
npm run lint
```

### Images Not Loading

- Ensure all images are in `public/` directory
- Check file names match exactly (case-sensitive)
- Verify image paths start with `/` (e.g., `/og-image.png`)

### Fonts Not Loading

- Fonts are loaded via `next/font/google` in `app/layout.tsx`
- Ensure you have internet connection during build
- Check Vercel build logs for font loading errors

### Resume Not Downloading

- Verify `public/resume.pdf` exists
- Check file permissions
- Test download attribute in different browsers

## Maintenance

### Updating Content

To update portfolio content:

1. Edit component files in `components/`
2. Test locally: `npm run dev`
3. Commit and push to GitHub
4. Vercel will auto-deploy (if using GitHub integration)

### Updating Dependencies

```bash
# Check for updates
npm outdated

# Update all dependencies
npm update

# Update Next.js specifically
npm install next@latest react@latest react-dom@latest

# Test after updates
npm run build
npm start
```

### Performance Optimization

If Lighthouse scores drop:

1. **Images:** Ensure using Next.js `<Image>` component (if adding images)
2. **Fonts:** Already optimized with `next/font`
3. **JavaScript:** Check bundle size with `npm run build`
4. **Animations:** Verify only animating `transform` and `opacity`

## Support

For Next.js issues:
- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js GitHub Discussions](https://github.com/vercel/next.js/discussions)

For Vercel deployment:
- [Vercel Documentation](https://vercel.com/docs)
- [Vercel Support](https://vercel.com/support)

---

**Ready to launch?** Follow the checklist above and deploy with confidence! 🚀
