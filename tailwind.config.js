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
        primary: { DEFAULT: '#d68b98', hover: '#c27683', 5: 'rgba(214, 139, 152, 0.05)', 10: 'rgba(214, 139, 152, 0.10)', 20: 'rgba(214, 139, 152, 0.20)' },
        bg: '#ffffff',
        surface: { DEFAULT: '#fdfaFB', light: '#fcf7f8' },
        main: { DEFAULT: '#2a2a2a', muted: '#7a7a7a' },
        accent: '#e8b8c2',
        danger: '#ff6b6b'
      }
    },
  },
  plugins: [],
}
