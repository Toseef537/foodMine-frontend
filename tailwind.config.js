/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}",],
  theme: {
    colors:{
      'primary':'#e72929',
      'primary-light':'#f8d7da',
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
    extend: {
      boxShadow: {
        'tableBoxShadow': '0px 0px 10px 1px rgba(0, 0, 0, 0.1)',
        'inputBoxShadow': '0px 0px 19.3px 1px rgba(0, 0, 0, 0.05)',
        'cardBoxShadow' : '0px 1.12px 19.01px 2.01px rgba(0, 91, 174, 0.07);',
        'sidebarBoxShadow': '0px 1.12px 19.01px 2.01px rgba(0, 91, 174, 0.07);',
        'notificationShadow': '0px 4px 15px 2px rgba(0, 0, 0, 0.2);'
      },
    },
  },
  plugins: [],
}

