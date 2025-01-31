/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./public/**/*.ttf",
    "./projects/*.{html,json}"
  ],
  theme: {
    extend: {
      fontFamily :{
        Monigue: ["Monigue", "sans-serif"],
        Gambetta: ["Gambetta", "serif"],
        Inter: ["Inter", "serif"]
      }
    },
  },
  plugins: [
    
  ],
}