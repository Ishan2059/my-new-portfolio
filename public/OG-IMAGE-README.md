# OG Image Instructions

## Current Status

- ✅ `og-image.svg` - SVG template (placeholder)
- ❌ `og-image.png` - **REQUIRED** - Not yet created

## What You Need

Create a **1200×630px PNG image** for social media sharing (Open Graph).

## Option 1: Convert the SVG Template

1. Open `og-image.svg` in a design tool:
   - Figma (import SVG)
   - Adobe Illustrator
   - Inkscape (free)
   - Online: [Photopea](https://www.photopea.com/)

2. Customize the design:
   - Update text if needed
   - Adjust colors
   - Add your personal branding

3. Export as PNG:
   - Width: 1200px
   - Height: 630px
   - Format: PNG
   - Name: `og-image.png`

4. Save to this directory (`public/`)

## Option 2: Create from Scratch

### Design Specifications

- **Dimensions:** 1200×630px (required by social platforms)
- **Format:** PNG (JPG also works but PNG preferred)
- **File size:** Keep under 1MB for fast loading
- **Safe zone:** Keep important content 100px from edges

### Design Guidelines

**Colors (from site):**
- Background: `#0A0A0A` (near-black)
- Accent: `#CAFF00` (electric lime)
- Text: `#F5F5F5` (off-white)
- Secondary: `#8A8A8A` (gray)

**Typography:**
- Heading: Syne Bold/ExtraBold
- Body: DM Sans Regular/Medium
- Keep text large and readable

**Content to Include:**
- Your name: "ISHAN MISHRA"
- Title: "UI/UX Designer · Nepal"
- Optional tagline: "Designing digital products that work"
- Optional: Geometric accent element

### Tools You Can Use

**Free Online Tools:**
- [Canva](https://www.canva.com/) - OG image templates
- [Figma](https://www.figma.com/) - Professional design tool
- [Photopea](https://www.photopea.com/) - Photoshop alternative

**Figma Plugins:**
- "OG Image Generator"
- "Social Media Templates"

**Quick Generators:**
- [og-image.vercel.app](https://og-image.vercel.app/) - Generate from text
- [Bannerbear](https://www.bannerbear.com/tools/og-image-generator/) - Free generator

## Option 3: Use a Generator

### Using Vercel OG Image Generator

1. Go to [og-image.vercel.app](https://og-image.vercel.app/)
2. Enter your text:
   ```
   ISHAN MISHRA
   UI/UX Designer · Nepal
   ```
3. Customize:
   - Font: Syne or similar bold font
   - Background: Dark (#0A0A0A)
   - Text color: Light (#F5F5F5)
4. Download as PNG
5. Resize to exactly 1200×630px if needed
6. Save as `og-image.png` in this directory

## Testing Your OG Image

After creating `og-image.png`:

1. **Local test:**
   - Place file in `public/` directory
   - Build and run: `npm run build && npm start`
   - View page source, look for `<meta property="og:image">`

2. **After deployment, test with:**
   - [Facebook Debugger](https://developers.facebook.com/tools/debug/)
   - [Twitter Card Validator](https://cards-dev.twitter.com/validator)
   - [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)

## Requirements Checklist

- [ ] Image is exactly 1200×630px
- [ ] File format is PNG
- [ ] File is named `og-image.png`
- [ ] File is in `public/` directory
- [ ] File size is under 1MB
- [ ] Text is readable at small sizes
- [ ] Design matches site branding
- [ ] Tested on social media debuggers

## Example Design Layout

```
┌─────────────────────────────────────────┐
│  [Accent Square]                        │
│                                         │
│                                         │
│  ISHAN MISHRA                          │
│                                         │
│  UI/UX Designer · Nepal                │
│                                         │
│  Designing digital products that work — │
│  clearly, beautifully, and without     │
│  confusion.                             │
│                                         │
└─────────────────────────────────────────┘
```

## Need Help?

If you're stuck:

1. Use the SVG template as-is and convert it
2. Use Canva's free OG image templates
3. Hire a designer on Fiverr (search "OG image design")
4. Ask a designer friend for help

## After Creating the Image

1. Delete `og-image.svg` (optional, keep as backup)
2. Delete this README (optional)
3. Test social sharing
4. Update TODO.md checklist

---

**Remember:** This image is the first impression when someone shares your portfolio on social media. Make it count! 🎨
