/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        'custom': '200px', // Puedes ajustar el valor según tus necesidades
      },
      height: {
        'custom': '200px', // Puedes ajustar el valor según tus necesidades
      },
      colors: {
        'white': '#ffffff',
        'purple': '#3f3cbb',
        'midnight': '#121063',
        'metal': '#565584',
        'tahiti': '#3ab7bf',
        'silver': '#ecebff',
        'bubble-gum': '#ff77e9',
        'bermuda': '#78dcca',
        'dhermesblue': '#BDF2ED', 
        'letterblue' : '#04BFAD',
        'letterwhite' : '#FFFFFF',
        'dhermeswhite' : '#D8F2F0',

      },
    },
  },
  plugins: [],
}