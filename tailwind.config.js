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
