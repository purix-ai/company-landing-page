/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e8f4ff',
          100: '#d4eaff',
          500: '#3c8afc',
          600: '#2c6fdb',
          700: '#1f55b8',
        },
        secondary: {
          50: '#fff4e8',
          100: '#ffe8d1',
          500: '#f48d25',
          600: '#d97315',
          700: '#b85e0f',
        },
        accent: {
          50: '#e8fdf7',
          100: '#d1fbef',
          500: '#4bd6b2',
          600: '#35b896',
          700: '#269679',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}