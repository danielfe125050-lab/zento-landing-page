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
        primary: { DEFAULT: '#FF4D4D', hover: '#E83E3E', 5: 'rgba(255, 77, 77, 0.05)', 10: 'rgba(255, 77, 77, 0.10)', 20: 'rgba(255, 77, 77, 0.20)' },
        bg: '#ffffff',
        surface: { DEFAULT: '#f8fafc', light: '#E9F8F9' },
        main: { DEFAULT: '#1A1A1A', muted: '#4A4A4A' },
        accent: '#93c5fd',
        danger: '#ef4444'
      }
    },
  },
  plugins: [],
}
