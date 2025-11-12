# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
A modern, minimalistic landing page for Purix featuring Wonderix - an AI-powered no-code platform for teachers and parents to build educational games through conversation.

## Tech Stack
- **React 18.3** with functional components and hooks
- **Vite** for fast development and optimized builds
- **Tailwind CSS** for utility-first styling
- **React Icons** for iconography
- **React Router** v7.8 for routing
- **i18next** for internationalization (en-US, zh-TW)
- **Contentful** CMS for blog content
- **Vitest** + React Testing Library for testing

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

# Run tests
npm run test           # Run tests in watch mode
npm run test:run       # Run tests once
npm run test:ui        # Run tests with UI
npm run test:coverage  # Run tests with coverage
```

## Project Structure
```
src/
├── components/
│   ├── Header.jsx       - Navigation with Wonderix logo
│   ├── Hero.jsx         - Main hero with headline, stats, CTA
│   ├── Features.jsx     - 3 pillars: True Gamification, AI Tutoring, Parent Dashboard
│   ├── HowItWorks.jsx   - 3-step science-based approach
│   ├── Waitlist.jsx     - Google Form integration for Founding Family Program
│   ├── Blog.jsx         - Blog listing page
│   ├── BlogPost.jsx     - Individual blog post view
│   ├── Footer.jsx       - Company info and links
│   ├── SEO.jsx          - Dynamic meta tags with React Helmet
│   ├── StructuredData.jsx - JSON-LD structured data
│   └── ScrollToTop.jsx  - Auto scroll on route change
├── pages/
│   ├── About.jsx        - About Us page (founder: Bruce)
│   ├── Privacy.jsx      - Privacy Policy
│   ├── Terms.jsx        - Terms of Service
│   └── Cookies.jsx      - Cookie Policy
├── services/
│   └── contentful.js   - Contentful CMS integration
├── locales/
│   ├── en-US.json      - English translations
│   └── zh-TW.json      - Traditional Chinese translations
├── test/
│   ├── setup.js        - Test environment setup
│   ├── testUtils.jsx   - Custom render with providers
│   └── CLAUDE.md       - Test documentation
├── __tests__/          - Integration tests
├── App.jsx             - Main app component with routing
├── main.jsx            - React entry point with HelmetProvider
├── i18n.js             - i18n configuration
└── index.css           - Tailwind styles
```

## Key Features
- Responsive design (mobile-first)
- Smooth animations and transitions
- Google Forms integration for Founding Family Program
- Purple/blue gradient color scheme
- Clean, minimalistic design
- Science-backed messaging (50% learning boost, 7x active time)
- Three-pillar approach: True Gamification, AI Tutoring, Parent Dashboard

## Important Configuration

### Contact Information
- **Email**: contact@purix.ai (not hello@purix.com)
- **LinkedIn**: https://www.linkedin.com/company/105497266

### Google Form Integration
The Founding Family Program uses a unified Google Form:
- **Founding Family Program Application**: https://forms.gle/NXSDvaYcy92VEs1d7

This form is used for both English and Traditional Chinese languages.
The URL is configured in `src/components/Waitlist.jsx` line 8.

### Logo Files
- Header logo: `/public/logo.png` (small version)
- Hero logo: `/public/logo_1024x1024.png` (large version)

## Hidden Features (Ready to Enable)
- **Demo Video Button**: Commented out in `Hero.jsx:47-52`
- **Demo Video Section**: Commented out in `Hero.jsx:73-82`

Uncomment these sections when demo video is ready.

## Color Scheme
- Primary: Blue (#3c8afc) - Main brand color for CTAs and headlines
- Secondary: Orange (#f48d25) - Accent color for gradients and highlights
- Accent: Teal (#4bd6b2) - Supporting color for variety
- Configured in `tailwind.config.js` with multiple shades (50, 100, 500, 600, 700)

## Content Updates
- **Primary audience**: Parents (focus on children's learning pain points)
- **Secondary audience**: Teachers and educators
- **Key positioning**: Results-oriented (50% boost, 7x time) vs. tool-oriented
- **Differentiation**: True gamification (learning IS gameplay) vs. false gamification (quizzes with rewards)
- **Launch date**: Q4 2025
- **Founding Family Program**: Limited to 10 families
  - Completely free early access
  - Lifetime 20% discount (8折)
  - 30-minute co-creation session 2-3 weeks post-launch

## Architecture

### Routing
- Uses React Router v7.8 with browser router
- Routes:
  - `/` - Home page with Hero, Features, HowItWorks, Waitlist sections
  - `/blog` - Blog listing page powered by Contentful CMS
  - `/blog/:slug` - Individual blog post pages
  - `/about` - About Us page with team info
  - `/privacy` - Privacy Policy
  - `/terms` - Terms of Service
  - `/cookies` - Cookie Policy
- Auto scroll to top on route change via ScrollToTop component

### Internationalization
- Custom Taiwan-specific language detection (defaults to English for all non-Taiwan users)
- Languages: `en-US` (default), `zh-TW` (Traditional Chinese for Taiwan users only)
- Language stored in localStorage when user manually selects
- Translation files in `src/locales/`

### Blog/CMS Integration
- **Contentful CMS** for blog content management
- Content type: `wonderix-blog-post`
- Environment variables required:
  - `VITE_CONTENTFUL_SPACE_ID`
  - `VITE_CONTENTFUL_ACCESS_TOKEN`
- Rich text content rendered with `@contentful/rich-text-react-renderer`

### Testing
- Vitest configured with jsdom environment
- Test setup in `src/test/setup.js`
- Component tests in `src/__tests__/` and `src/components/__tests__/`
- Mocks for Contentful service and rich text renderer

## Deployment

### GitHub Pages with Custom Domain
This project is configured to deploy automatically to GitHub Pages using GitHub Actions:

1. **Automatic Deployment**: Every push to `main` branch triggers tests, build and deploy
2. **Custom Domain**: www.purix.ai (configured via CNAME file)
3. **Base Path**: Set to `/` in `vite.config.js` for custom domain

**GitHub Actions Workflow** (`.github/workflows/deploy.yml`):
- Runs tests before deployment
- Builds with Contentful environment variables from GitHub secrets
- Copies CNAME file to dist for custom domain support

### Alternative Deployment Options
- **Vercel**: Connect GitHub repo for automatic deployment
- **Netlify**: Drag and drop `dist/` folder or connect repo  
- **Custom Domain**: Update `base` in `vite.config.js` to `/` for root deployment

Build output will be in `dist/` directory.

## Important Notes

### Environment Variables
For local development, create a `.env` file with:
```
VITE_CONTENTFUL_SPACE_ID=your_space_id
VITE_CONTENTFUL_ACCESS_TOKEN=your_access_token
```

### SEO Implementation
- React Helmet Async for dynamic meta tags
- Structured data (JSON-LD) for Organization, Software, Article schemas
- XML sitemap at `/public/sitemap.xml`
- Robots.txt for crawler guidance
- Open Graph and Twitter Card meta tags

### Team Information
- Founder: Bruce Chou
- Technical founder and father
- AI applications expert (10+ years)
- Backed by educator consultants

### Code Style
- Use functional React components with hooks
- Follow existing patterns for state management
- Use Tailwind CSS utilities for styling
- Maintain responsive design principles