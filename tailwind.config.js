/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    colors:{
      'text-primary':'#af1313',
      'text-hover':'#e72929',
      'white':'#ffff'
    },
    container:{
      center:true,
      padding:{
        DEFAULT:'1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      }
    },
    fontFamily              : {
      sans: `"Poppins"`,
      serif: `"IBM Plex Sans"`,
    },
    extend: {},
  },
  plugins: [],
}

