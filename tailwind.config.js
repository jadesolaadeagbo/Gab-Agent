// tailwind.config.js
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],  
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      sm: '16px',
      md: '20px',
      base: '40px',
      xl: '60px',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: "#000000",
      grey: "#989898",
      white: '#ffffff',
      purple: '#3f3cbb',
      midnight: '#121063',
      metal: '#565584',
      tahiti: '#3ab7bf',
      silver: '#ecebff',
      'bubble-gum': '#ff77e9',
      bermuda: '#78dcca',
      'dark-grey' : '#808080',
      'light-blue':'#E8F0FB',
      'cream':"#FFF7EC",
      'grey-silver':"#c0c0c0",
      'olive-green' :"#CEFFD6",
      'red':"#FF0000",
      'input-grey':"#F6F6F6"
      

    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}