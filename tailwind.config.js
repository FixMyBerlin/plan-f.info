/** @type {import('tailwindcss').Config} */
/* eslint-disable global-require */
module.exports = {
  content: ['src/pages/**/*.tsx', 'src/components/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        'dark-green': '#16e08c',
        'lemon-yellow': '#e8ff99',
        'lime-green': '#cbfc60',
        'pastel-purple': '#ba7dff',
        'dark-gray': '#353535',
        'light-gray': '#787878',
      },
      typography: {
        DEFAULT: {
          // Tell the plugin to not add any classes to anchor tags
          // since we always use the Link component which is styled already.
          css: { a: false },
        },
      },
    },
    fontFamily: {
      apercu: ['ApercuPro'],
      apercuMono: ['ApercuMonoPro'],
    },
    listStyleType: {
      none: 'none',
      square: 'square',
      decimal: 'decimal',
      disc: 'disc',
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};
