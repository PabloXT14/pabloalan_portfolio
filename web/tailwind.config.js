const { fontFamily } = require('tailwindcss/defaultTheme') 

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--dm-sans)', ...fontFamily.sans],
      },
      colors: {
        primary: "#edf2f8",
        secondary: "#313bac",
        black: "#030303",
        lightGray: "#e4e4e4",
        gray: "#6b7688",
        brown: "#46364a",
        white: "#ffffff",
      },
      backgroundImage: {
        'menu-mobile': "url('/assets/bgWhite.png')",
        'header-cover': "url('/assets/bgIMG.png')",
      },
      boxShadow: {
        'menu-mobile': "0 0 20px rgba(168, 168, 168, 0.15)",
        'header-badge': "0 0 20px rgba(0, 0, 0, 0.1)",
      }
    },
    screens: {
      sm: "450px",
      md: "500px",
      '2md': '900px',
      '3md': '1200px',
      lg: "2000px",
    }
  },
  plugins: [],
}
