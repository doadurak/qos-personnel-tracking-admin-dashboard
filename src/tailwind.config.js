/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sw-navy': '#001f3f',
        'sw-blue': '#0ea5e9',
      }
    },
  },
  plugins: [],
}