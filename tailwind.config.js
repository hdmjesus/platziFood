module.exports = {
  purge: [],
  theme: {
    fontFamily: {
      display: ['Gilroy', 'sans-serif'],
      body: ['Graphik', 'sans-serif'],
    },
    extend: {
      colors: {
        cyan: '#9cdbff',
        primary: '#f3c614',
        secondary: '#353535',
      },
      height: {
        '80': '20rem',
      },
      boxShadow: {
        xxg:
          '0 10px 15px -3px rgba(0, 0, 0,.3), 0 4px 6px -2px rgba(0, 0, 0,.3)',
      },
    },
  },
  variants: {
    opacity: ['responsive', 'hover', 'focus', 'disabled'],
  },
  plugins: [],
};
