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
        lightPink: "#fef4f5",
      },
      backgroundImage: {
        'menu-mobile': "url('/assets/bgWhite.png')",
        'header-cover': "url('/assets/bgIMG.png')",
      },
      boxShadow: {
        'menu-mobile': "0 0 20px rgba(168, 168, 168, 0.15)",
        'header-badge': "0 0 20px rgba(0, 0, 0, 0.1)",
        'work-item': "0 0 25px rgba(0, 0, 0, 0.2)",
        'skill-item': "0 0 25px rgba(0, 0, 0, 0.2)",
        'tootip': "0 0 25px rgba(0, 0, 0, 0.1)",
        'testimonial-item': "0 0 30px rgba(0, 0, 0, 0.1)",
        'footer-card': "0 0 25px lightPink",
        'form-input': "0 0 25px primary",
      },
      transitionTimingFunction: {
        'in-form-button': 'cubic-bezier(0.55, 0.085, 0.68, 0.53)',
      }
    },
    screens: {
      sm: "450px",
      md: "500px",
      '1.5md': "700px",
      '2md': '900px',
      '3md': '1200px',
      lg: "2000px",
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}
