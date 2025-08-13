# Purix Landing Page - Project Documentation

## Project Overview
A modern, minimalistic landing page for Purix featuring Wonderix - an AI-powered no-code platform for teachers and parents to build educational games through conversation.

## Tech Stack
- **React 18.3** with functional components and hooks
- **Vite** for fast development and optimized builds
- **Tailwind CSS** for utility-first styling
- **React Icons** for iconography

## Development Commands
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## Project Structure
```
src/
├── components/
│   ├── Header.jsx       - Navigation with Wonderix logo
│   ├── Hero.jsx         - Main hero with logo, headline, CTA
│   ├── Features.jsx     - 6 key features grid
│   ├── HowItWorks.jsx   - 3-step process visualization
│   ├── Waitlist.jsx     - Google Form integration for waitlist
│   └── Footer.jsx       - Company info and links
├── App.jsx              - Main app component
├── main.jsx            - React entry point
└── index.css           - Tailwind styles
```

## Key Features
- Responsive design (mobile-first)
- Smooth animations and transitions
- Google Forms integration for waitlist
- Purple/blue gradient color scheme
- Clean, minimalistic design

## Important Configuration

### Google Form Integration
The waitlist uses Google Forms with language-specific forms:
- **Traditional Chinese (zh-TW)**: https://forms.gle/W2ByQBXBbGzwjRP97
- **English (en-US)**: https://forms.gle/B191TLxbes4rnDDn9

The forms are automatically selected based on the user's language setting.
URLs are configured in `src/components/Waitlist.jsx` lines 8-11.

### Logo Files
- Header logo: `/public/logo.png` (small version)
- Hero logo: `/public/logo_1024x1024.png` (large version)

## Hidden Features (Ready to Enable)
- **Demo Video Button**: Commented out in `Hero.jsx:47-52`
- **Demo Video Section**: Commented out in `Hero.jsx:73-82`

Uncomment these sections when demo video is ready.

## Color Scheme
- Primary: Purple (#6B46C1)
- Secondary: Blue (#2563EB)
- Configured in `tailwind.config.js`

## Content Updates
- Target audience: Teachers AND parents (not just educators)
- No curriculum alignment focus
- Launch date: Q4 2025
- Time to first game: 15 minutes
- Waitlist benefits: Early access, lifetime discount, shape the product

## Deployment

### GitHub Pages (Current Setup)
This project is configured to deploy automatically to GitHub Pages using GitHub Actions:

1. **Automatic Deployment**: Every push to `main` branch triggers a build and deploy
2. **Custom Domain**: Configure in repository settings if needed
3. **Base Path**: Currently set to `/company-landing-page/` in `vite.config.js`

**Manual Setup Required:**
1. Go to repository Settings → Pages
2. Set Source to "GitHub Actions"
3. The workflow will handle the rest automatically

### Alternative Deployment Options
- **Vercel**: Connect GitHub repo for automatic deployment
- **Netlify**: Drag and drop `dist/` folder or connect repo  
- **Custom Domain**: Update `base` in `vite.config.js` to `/` for root deployment

Build output will be in `dist/` directory.

## Contact Placeholder
Replace `hello@purix.com` in Footer component with actual contact email.

## Testing Checklist
- [ ] All navigation links work
- [ ] Smooth scrolling to sections
- [ ] Google Form opens correctly
- [ ] Responsive on all devices
- [ ] Images load properly
- [ ] No console errors