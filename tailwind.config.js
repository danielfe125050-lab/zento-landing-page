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
        primary: { DEFAULT: '#000000', hover: '#333333' },
        bg: '#ffffff',
        surface: { DEFAULT: '#f7f7f7', light: '#e5e5e5' },
        main: { DEFAULT: '#000000', muted: '#666666' },
        accent: '#cccccc',
        danger: '#ff4d4d'
      }
    },
  },
  plugins: [],
}
