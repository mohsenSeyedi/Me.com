/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        "yellow-color" : "#ffbd39",
        "gray-color" : "#99999999"
      }
    },
  },
  plugins: [],
}

