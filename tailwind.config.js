/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-teal': '#4AF3F7',
        'brand-purple': '#8C5FFF',
        'brand-accent': '#00E4C0',
        'brand-dark': '#0B0E1A',
        'brand-indigo': '#14182B',
        'brand-text': '#F8FAFC',
        'brand-muted': '#9CA3AF',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}