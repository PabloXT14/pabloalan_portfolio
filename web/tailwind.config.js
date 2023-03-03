/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
      },
      colors: {
        primary: "#edf2f8",
        secondary: "#313bac",
        black: "#030303",
        lightGray: "#e4e4e4",
        gray: "#6b7688",
        brown: "#46364a",
        white: "#ffffff",
      }
    },
    screens: {
      sm: "450px",
      md: "500px",
      lg: "2000px"
    }
  },
  plugins: [],
}
