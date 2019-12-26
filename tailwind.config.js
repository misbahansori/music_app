const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      fontFamily : {
        'sans' : ['Inter', ...fontFamily.sans]
      },
      borderRadius : {
        'xl' : '.8rem',
      },
      boxShadow : {
        soft: '0 10px 25px -3px rgba(0, 0, 0, 0.05)',
      },  
      zIndex : {
        '-10' : '-10',
        '-20' : '-20',
        '-30' : '-30',
      }
    }
  },
  variants: {},
  plugins: []
}
