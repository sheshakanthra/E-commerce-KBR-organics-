/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1A4D2E', // Deep Forest Green
          light: '#2F7A3E',
          dark: '#123520',
        },
        secondary: {
          DEFAULT: '#4F772D', // Fresh Sage
          light: '#78A852',
        },
        accent: {
          DEFAULT: '#D4A373', // Earthy Gold/Sand
          hover: '#C29263',
        },
        surface: {
          DEFAULT: '#FAF9F6', // Off-white / Cream
          secondary: '#F2F0EA',
        },
        text: {
          main: '#1F2937',
          muted: '#6B7280',
          light: '#F9FAFB',
        }
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Merriweather', 'serif'], // Adding a serif for headers can look premium
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'card': '0 10px 30px -5px rgba(0, 0, 0, 0.08)',
      }
    }
  },
  plugins: []
}