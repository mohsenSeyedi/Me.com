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
      },
      fontFamily:{
        "vazir": "Vazir",
      },
    },
    screens: {
      '3xl': {'min': '1536px'},
      '2xl': {'max': '1535px'},
      'xl': {'max': '1279px'},
      'lg': {'max': '980px'},
      'md': {'max': '767px'},
      'sm': {'max': '550px'},
      'vs': {'max': '350px'}
    }
    
  },

  plugins: [],
}

