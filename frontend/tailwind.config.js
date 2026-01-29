
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        title:["Luckiest Guy", "cursive"],
        used : ["Inter", "sans-serif"]
      }
    },
  },
  plugins: [],
}

