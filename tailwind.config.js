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
        primary: { DEFAULT: '#2563eb', hover: '#1d4ed8', 5: 'rgba(37, 99, 235, 0.05)', 10: 'rgba(37, 99, 235, 0.10)', 20: 'rgba(37, 99, 235, 0.20)' },
        bg: '#ffffff',
        surface: { DEFAULT: '#f8fafc', light: '#f1f5f9' },
        main: { DEFAULT: '#1e293b', muted: '#64748b' },
        accent: '#93c5fd',
        danger: '#ef4444'
      }
    },
  },
  plugins: [],
}
