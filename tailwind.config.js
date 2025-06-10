/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2B7A78',
        secondary: '#17252A',
        accent: '#3AAFA9',
        background: '#DEF2F1',
        light: '#FEFFFF',
      },
    },
  },
  plugins: [],
}
