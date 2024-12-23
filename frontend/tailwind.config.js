/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        background: "#07070E",
        primary: "#031930",
        secondary: "#3684DB",
        flamePea: "#DB5A36",
        accent:"#1B2334",
        accentGray: "#808080",
        textColor: "#D1E8FF",
      },
      fontFamily: {
        hanken: ['Hanken Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('tailwind-scrollbar-hide'),
  ],
}