/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./public/**/*.ttf"
  ],
  theme: {
    extend: {
      fontFamily :{
        Monigue: ["Monigue", "sans-serif"]
      }
    },
  },
  plugins: [],
}