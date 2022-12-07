module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'home-image': "url('/roman.jpg')",
        "home-image2": "url('/epic.svg')"
      },
      backgroundColor :{
        "main":"#333333",
        "black":"#000000",
      },
      borderRadius:{
        "pill":"36px"
      },
      letterSpacing:{
        "spaced":"0.2em"
      },
      padding: {
        "pill":"7px 20px 7px 20px",
      },
    },
  },
  variants: {
    extend: {
     
    },
  },
  plugins: [],
}
