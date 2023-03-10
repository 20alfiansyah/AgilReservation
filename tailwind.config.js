/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'biruMuda' : '#D6E6F2',
        'biruTua' : '#064ACB',
        'kuning' : '#F3A953',
        'black1' : '#272727',
      },
      fontFamily:{
        'poppins':'Poppins'
      },
      height:{
        '755':'755px'
      }
    },
  },
  plugins: [],
}
