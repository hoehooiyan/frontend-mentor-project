module.exports = {
  theme: {
    fontFamily: {
      'display': ['Raleway'],
      'body': ['Open Sans'],
    },
    extend: {
      colors: {
        'primary-dark-blue': 'var(--primary-dark-blue)',
        'primary-light-blue': 'var(--primary-desaturated-blue)',
        'secondary-bright-blue': 'var(--secondary-bright-blue)',
        'secondary-moderate-cyan': 'var(--secondary-moderate-cyan)',
        'neutral-blue': 'var(--neutral-grayish-blue)',
        'neutral-gray': 'var(--neutral-gray)',
      },
      screens: {
        '2xl': '1440px',
        '3xl': '1920px'
      }
    }
  },
  variants: {},
  plugins: []
}
