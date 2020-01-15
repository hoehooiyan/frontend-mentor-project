module.exports = {
  theme: {
    extend: {
      screens: {
        '2xl': '1440px'
      },
      colors: {
        'main-blue': 'hsl(218, 28%, 13%)',
        'footer-blue': 'hsl(216, 53%, 9%)',
        'testimonial-blue': 'hsl(219, 30%, 18%)',
        'other-blue': 'hsl(217, 28%, 15%)',
        'accent-cyan': 'hsl(176, 68%, 64%)',
        'accent-blue': 'hsl(198, 60%, 50%)',
        'neutral-white': 'hsl(0, 0%, 100%)'
      }
    },
    inset: {
      '-1/2': '-0.5rem',
    },
    zIndex: {
      '1': '1',
    },
    fontFamily: {
      'display': ['Raleway'],
      'body': ['Open Sans']
    }
  },
  variants: {},
  plugins: [
    function({ addVariant, e }) {
      addVariant('before', ({ modifySelector, separator }) => {
        modifySelector(({ className }) => {
          return `.${e(`before${separator}${className}`)}:before`
        })
      })
    }
  ]
}
