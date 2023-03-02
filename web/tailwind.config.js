/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
      },
      colors: {
        'primary': "#edf2f8",
        'secondary': "#313bac",
        'black-color': "#030303",
        'lightGray-color': "#e4e4e4",
        'gray-color': "#6b7688",
        'brown-color': "#46364a",
        'white-color': "#ffffff",
      }
    },
  },
  plugins: [],
}
