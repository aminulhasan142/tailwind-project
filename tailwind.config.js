/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens:{
      sm:"480px",
      md:"768px",
      lg:"1024px"
    },
    extend: {
      colors: {
        colorNeutral400: "#A3A3A3",
        colorNeutral950: "#0A0A0A",
        colorNeutral700: ""
      },
    },
  },
  plugins: [],
}