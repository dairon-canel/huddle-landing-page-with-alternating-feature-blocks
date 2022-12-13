/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html'],
  purge: ['./public/index.html'],
  theme: {
    extend: {},
    colors: {
      pink: 'hsl(322, 100%, 66%)',
      veryPaleCyan: 'hsl(193, 100%, 96%)',
      veryDarkCyan: 'hsl(192, 100%, 9%)',
      grayishBlue: 'hsl(208, 11%, 55%)',
      white: 'hsl(0, 100%, 100%)',
      noColor: 'hsla(0, 0%, 0%, 0)',
    },
    fontWeight: {
      400: '400',
      600: '600',
      700: '700',
    },
  },
  plugins: [],
};
