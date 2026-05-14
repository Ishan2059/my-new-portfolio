# Pre-Launch TODO Checklist

## 🔴 Critical (Must Complete Before Launch)

- [ ] **Replace Resume PDF**
  - Location: `public/resume.pdf`
  - Current: Placeholder PDF
  - Action: Replace with actual CV file

- [ ] **Create OG Image**
  - Location: `public/og-image.png`
  - Current: SVG template only
  - Size: 1200×630px
  - Action: Design and export PNG version

- [ ] **Update Email Address**
  - Files: `components/Connect.tsx`, `app/layout.tsx`
  - Current: `hello@ishanmishra.com`
  - Action: Replace with real email

- [ ] **Update Domain**
  - File: `app/layout.tsx`
  - Current: `ishanmishra.com`
  - Action: Replace with actual domain

## 🟡 Important (Update Social Links)

- [ ] **Dribbble URL**
  - File: `components/Work.tsx`
  - Current: `https://dribbble.com/[username]`
  - Action: Replace `[username]` with actual handle

- [ ] **Behance URL**
  - File: `components/CaseStudies.tsx`
  - Current: `https://behance.net/[username]`
  - Action: Replace `[username]` with actual handle

- [ ] **LinkedIn URL**
  - Files: `components/Connect.tsx`, `app/layout.tsx`
  - Current: `https://linkedin.com/in/[username]`
  - Action: Replace `[username]` with actual handle

- [ ] **Twitter URL**
  - Files: `components/Connect.tsx`, `app/layout.tsx`
  - Current: `https://twitter.com/[username]`
  - Action: Replace `[username]` with actual handle

- [ ] **Instagram URL**
  - Files: `components/Connect.tsx`, `app/layout.tsx`
  - Current: `https://instagram.com/[username]`
  - Action: Replace `[username]` with actual handle

## 🟢 Testing (Before Deployment)

- [ ] **Local Testing**
  - [ ] Run `npm install`
  - [ ] Run `npm run dev`
  - [ ] Test all sections load correctly
  - [ ] Test navigation (header links, smooth scroll)
  - [ ] Test resume download
  - [ ] Test all external links open in new tabs
  - [ ] Test mobile menu (hamburger)

- [ ] **Responsive Testing**
  - [ ] Test at 375px (mobile)
  - [ ] Test at 768px (tablet)
  - [ ] Test at 1280px (laptop)
  - [ ] Test at 1440px (desktop)
  - [ ] Verify no horizontal scroll on any size

- [ ] **Build Testing**
  - [ ] Run `npm run build`
  - [ ] Fix any build errors
  - [ ] Run `npm start`
  - [ ] Test production build locally

- [ ] **Lighthouse Audit**
  - [ ] Performance ≥ 90
  - [ ] Accessibility ≥ 95
  - [ ] Best Practices ≥ 90
  - [ ] SEO = 100

- [ ] **Accessibility Testing**
  - [ ] Tab through all interactive elements
  - [ ] Verify focus rings are visible
  - [ ] Test skip-to-content link
  - [ ] Test with screen reader (optional but recommended)
  - [ ] Verify `prefers-reduced-motion` works

## 🔵 SEO & Validation

- [ ] **Structured Data**
  - [ ] Validate JSON-LD at [schema.org/validator](https://validator.schema.org/)
  - [ ] Verify Person schema is correct

- [ ] **Social Media Preview**
  - [ ] Test OG image at [Facebook Debugger](https://developers.facebook.com/tools/debug/)
  - [ ] Test Twitter Card at [Twitter Validator](https://cards-dev.twitter.com/validator)
  - [ ] Test LinkedIn preview at [Post Inspector](https://www.linkedin.com/post-inspector/)

- [ ] **Meta Tags**
  - [ ] Verify title is correct
  - [ ] Verify description is compelling
  - [ ] Verify keywords are relevant
  - [ ] Verify canonical URL is correct

## 🚀 Deployment

- [ ] **Pre-Deployment**
  - [ ] All critical items completed
  - [ ] All social links updated
  - [ ] All tests passing
  - [ ] Build succeeds without errors

- [ ] **Deploy**
  - [ ] Push to GitHub
  - [ ] Deploy to Vercel/Netlify
  - [ ] Verify deployment succeeded
  - [ ] Test live site

- [ ] **Post-Deployment**
  - [ ] Test all functionality on live site
  - [ ] Verify custom domain works (if applicable)
  - [ ] Test social sharing on live URL
  - [ ] Submit to Google Search Console
  - [ ] Submit to Bing Webmaster Tools

## 📊 Optional Enhancements

- [ ] Set up analytics (Google Analytics, Plausible, etc.)
- [ ] Set up Vercel Analytics
- [ ] Enable Vercel Speed Insights
- [ ] Add sitemap.xml
- [ ] Add robots.txt
- [ ] Set up email forwarding for contact email
- [ ] Create custom 404 page
- [ ] Add loading states for resume download
- [ ] Add success message after resume download

## 🎨 Future Improvements

- [ ] Add actual project images to Work section
- [ ] Create case study preview cards
- [ ] Add testimonials section
- [ ] Add blog/articles section
- [ ] Implement dark/light mode toggle (currently dark only)
- [ ] Add more micro-interactions
- [ ] Create custom cursor
- [ ] Add page transitions
- [ ] Implement contact form (alternative to email link)

---

## Quick Search Commands

Find all placeholders:
```bash
grep -r "\[username\]" .
grep -r "hello@ishanmishra.com" .
grep -r "ishanmishra.com" .
grep -r "TODO" .
```

## Notes

- Keep this file updated as you complete items
- Mark items with `[x]` when completed
- Add new items as needed
- Delete this file before final deployment (optional)

---

**Last Updated:** 2025-05-14
