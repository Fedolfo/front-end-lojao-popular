// eslint-disable-next-line no-undef
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      android: '360px',
      // => @media (min-width: 640px) { ... }
    },
    fontFamily: {
      serif: [
        'serif',
        ' ui-serif',
        'Georgia',
        'Cambria',
        'Times New Roman',
        'Times',
      ],
      LexendDeca: ['Lexend Deca'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
