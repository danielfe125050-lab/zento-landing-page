/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'heading': ['"Fredoka"', 'sans-serif'],
        'body': ['"Outfit"', 'sans-serif'],
      },
      colors: {
        primary: { DEFAULT: '#7da21b', hover: '#638016', 5: 'rgba(125, 162, 27, 0.05)', 10: 'rgba(125, 162, 27, 0.10)', 20: 'rgba(125, 162, 27, 0.20)' },
        bg: '#ffffff',
        surface: { DEFAULT: '#f4fbf9', light: '#f9fdfc' },
        main: { DEFAULT: '#2a2a2a', muted: '#7a7a7a' },
        accent: '#cce88b',
        danger: '#e65100'
      }
    },
  },
  plugins: [],
}
