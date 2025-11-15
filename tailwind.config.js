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
          500: '#3c8afc',  // Wonderix Blue
          600: '#2c6fdb',
          700: '#1f55b8',
        },
        secondary: {
          50: '#fff4e8',
          100: '#ffe8d1',
          500: '#f48d25',  // Wonderix Orange
          600: '#d97315',
          700: '#b85e0f',
        },
        accent: {
          50: '#e8fdf7',
          100: '#d1fbef',
          500: '#4bd6b2',  // Green-Teal Gradient Start
          600: '#35b896',
          700: '#269679',
        },
        yellow: {
          50: '#fffbeb',
          100: '#fff4cc',
          500: '#ffc820',  // Yellow Highlight
          600: '#e6b31d',
          700: '#cc9e1a',
        },
        deepBlue: {
          50: '#eef0fe',
          100: '#dde2fd',
          500: '#5772f7',  // Deep Blue
          600: '#4660e5',
          700: '#3650d3',
        },
        aqua: {
          50: '#e6faf9',
          100: '#ccf5f4',
          500: '#02b5b1',  // Aqua Blue
          600: '#02a29f',
          700: '#018f8c',
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