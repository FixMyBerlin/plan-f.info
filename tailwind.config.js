/** @type {import('tailwindcss').Config} */
/* eslint-disable global-require */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-green': '#6bdc93',
        'lemon-yellow': '#e8ff99',
        'lime-green': '#bdfa78',
        'pastel-purple': '#b082f7',
        'dark-gray': '#353535',
        'light-gray': '#787878',
      },
      padding: { layout: '10vw' },
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
      barlow: ['Barlow'],
    },
    listStyleType: {
      none: 'none',
      square: 'square',
      decimal: 'decimal',
      disc: 'disc',
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
  ],
};
