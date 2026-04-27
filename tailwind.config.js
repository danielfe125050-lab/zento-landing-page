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
        primary: { DEFAULT: '#FF2A2A', hover: '#E81C1C', 5: 'rgba(255, 42, 42, 0.05)', 10: 'rgba(255, 42, 42, 0.10)', 20: 'rgba(255, 42, 42, 0.20)' },
        bg: { DEFAULT: '#080808', card: '#121212' },
        surface: { DEFAULT: '#f8fafc', light: '#E9F8F9', dark: '#1e1e1e' },
        main: { DEFAULT: '#f5f5f5', muted: '#a3a3a3' },
        neonRed: { DEFAULT: '#ff003c', glow: 'rgba(255, 0, 60, 0.3)' },
        accent: '#93c5fd',
        danger: '#ef4444'
      }
    },
  },
  plugins: [],
}
