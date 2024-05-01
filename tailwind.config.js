/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: { fontFamily: {
      'QS': ['Quicksand', 'sans-serif'],
    }},
  },
  plugins:  [
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}

