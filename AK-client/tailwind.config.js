/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#121212",
        secondary: "#1C1C1C",
        tertiary: "#E979DE",
        subtitletxtcol: "#979797",

      },
    },
    plugins: [],
  }
}