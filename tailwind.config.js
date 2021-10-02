module.exports = {
  purge: [],
  mode: 'jit',
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: '#eee',
            b: {
              color: '#eee',
            },
            strong: {
              color: '#eee',
            },
            a: {
              color: '#fbbf24',
              '&:hover': {
                color: '#eee',
              },
            },
            h1: {
              color: '#fbbf24',
            },
            h2: {
              color: '#fbbf24',
            },
            h3: {
              color: '#fbbf24',
            },
            h4: {
              color: '#fbbf24',
            },
            code: {
              color: '#fbbf24',
            }
          },
        },
      }
    },
  },
  variants: {
    extend: {
      scale: ['group-hover'],
      translate: ['group-hover'],
      transition: ['group-hover'],
      display: ['group-hover'],
      opacity: ['disabled'],
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
