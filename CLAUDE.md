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
│   ├── Hero.jsx         - Main hero with logo, headline, CTA
│   ├── Features.jsx     - 6 key features grid
│   ├── HowItWorks.jsx   - 3-step process visualization
│   ├── Waitlist.jsx     - Google Form integration for waitlist
│   ├── Blog.jsx         - Blog listing page
│   └── Footer.jsx       - Company info and links
├── services/
│   └── contentful.js   - Contentful CMS integration
├── locales/
│   ├── en-US.json      - English translations
│   └── zh-TW.json      - Traditional Chinese translations
├── __tests__/          - Component tests
├── App.jsx             - Main app component with routing
├── main.jsx            - React entry point
├── i18n.js             - i18n configuration
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

## Architecture

### Routing
- Uses React Router v7.8 with browser router
- Routes:
  - `/` - Home page with Hero, Features, HowItWorks, Waitlist sections
  - `/blog` - Blog listing page powered by Contentful CMS

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

### Contact Placeholder
Replace `hello@purix.com` in Footer component with actual contact email.

### Code Style
- Use functional React components with hooks
- Follow existing patterns for state management
- Use Tailwind CSS utilities for styling
- Maintain responsive design principles