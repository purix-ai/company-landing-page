# Wonderix Landing Page

A modern, minimalistic landing page for Wonderix - an AI-powered no-code platform for teachers and parents to build educational games.

## 🚀 Quick Start

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and visit: `http://localhost:5173`

## 📝 Important Setup

### Google Form Integration

To connect your waitlist form:

1. Create a Google Form with these fields:
   - Name (Short answer)
   - Email (Short answer)
   - Role (Multiple choice: Teacher/Parent/Other)
   - Message (Paragraph - optional)

2. Get your form's shareable link

3. Update the URL in `src/components/Waitlist.jsx`:
```javascript
const GOOGLE_FORM_URL = 'https://forms.google.com/your-actual-form-url'
```

## 🛠 Tech Stack

- **React 18.3** - UI framework
- **Vite** - Build tool for fast development
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Icon library

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.jsx       - Navigation bar
│   ├── Hero.jsx         - Main hero section
│   ├── Features.jsx     - Key features grid
│   ├── HowItWorks.jsx   - 3-step process
│   ├── Waitlist.jsx     - Google Form integration
│   └── Footer.jsx       - Company info & links
├── App.jsx              - Main app component
├── main.jsx            - React entry point
└── index.css           - Tailwind styles
```

## 🎨 Customization

### Colors
The color scheme uses purple and blue gradients. To change colors, edit `tailwind.config.js`:
- Primary colors: Purple shades (#6B46C1)
- Secondary colors: Blue shades (#2563EB)

### Content
All text content is directly in the component files. Simply edit the JSX files to update:
- Company name
- Product descriptions
- Feature lists
- Contact information

## 📦 Build for Production

```bash
npm run build
```

The optimized files will be in the `dist/` directory, ready for deployment.

## 🚀 Deployment

This site is ready to deploy on:
- **Vercel**: Connect your GitHub repo
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use GitHub Actions
- **Any static hosting**: Upload the `dist` folder
