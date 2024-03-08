/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    minHeight: {
      '128': '0.0625rem',
    },
    screens:{
      sm:"480px",
      md:"768px",
      lg:"1024px"
    },
    extend: {
      colors: {
        colorNeutral400: "#A3A3A3",
        colorNeutral950: "#0A0A0A",
        colorNeutral700: "#404040",
        colorNeutral200: "#E5E5E5",
        colorNeutral100: "#F5F5F5",
        colorBaseWhite: "#FFFFFF",
        colorGreen700: "#15803D",
        colorGreen600: "#16A34A",
        colorNeutral500: "#737373",
        colorGreen950: "#052E16",
        colorGreen500: "#22C55E",
        colorGreen50: "#F0FDF4",
        gray700: "#495057",
        grayWhite: "#FFFFFF",
        red400: "#E35D6A",
        teal500: "#20C997",
        yellow500: "#FFC107",
      },
    },
  },
  plugins: [],
}