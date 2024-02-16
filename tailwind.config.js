/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pastel1':'#B9F3FC',
        'pastel2':'#AEE2FF',
        'pastel3':'#93C6E7',
        'pastel4':'#FEDEFF',
      }
    },
  },
  plugins: [],
}

