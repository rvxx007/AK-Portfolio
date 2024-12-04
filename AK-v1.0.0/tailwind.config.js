/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation:{
        typewriter:'typewriter 3s steps(12) forwards'
      },
      keyframes:{
        typewriter:{
          to:{left: '100%'},
        }
      },
      colors:{
        primaryDark: "#BB86FC",
        primaryLight: "#03DAC5",
        secondaryDark: "#1D1D1D",
        secondaryLight: "#121212",
        bgDark: "#121212",
        bgLight: "#ffffff",
        textDark: "#ffffff",
        textLight: "#000000",
      }
    },
  },
  plugins: [],
}