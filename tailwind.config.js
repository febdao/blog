module.exports = {
  purge: [],
  mode: 'jit',
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      scale: ['group-hover'],
      transition: ['group-hover'],
      display: ['group-hover'],
      opacity: ['disabled'],
    }
  },
  plugins: [],
}
