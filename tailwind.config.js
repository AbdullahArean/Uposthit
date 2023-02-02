/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors:{
        'dark': '#100F0F',
        'lblue': '#5190F6',
        'hgray':'#D8F3FF',
        'hblue': '#D8F3FF'
      },
      fontFamily: {
        'dancing-script': ['"Dancing Script"', 'cursive'],
        'nunito': ['Nunito', 'sans-serif'],
        'great-vibes': ['Great Vibes', 'cursive']
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
