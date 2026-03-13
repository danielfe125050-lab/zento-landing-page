/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: 'var(--primary)', hover: 'var(--primary-hover)' },
        bg: 'var(--bg)',
        surface: { DEFAULT: 'var(--surface)', light: 'var(--surface-light)' },
        main: { DEFAULT: 'var(--text)', muted: 'var(--text-muted)' },
        accent: 'var(--accent)',
        danger: 'var(--danger)'
      }
    },
  },
  plugins: [],
}
