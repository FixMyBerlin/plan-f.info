/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['src/pages/**/*.tsx', 'src/components/**/*.tsx'],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          // this is for prose class
          // Tell the plugin to not add any classes to anchor tags
          // since we always use the Link component which is styled already.
          css: {
            a: false,
            p: {
              'margin-top': '1rem',
            },
            h1: {
              'margin-top': '1rem',
              'margin-bottom': '1.5rem',
            },
            h2: {
              'font-weight': '400',
              'margin-top': '1rem',
              'margin-bottom': '1.5rem',
            },
            h3: {
              'margin-top': '1rem',
              'margin-bottom': '1.5rem',
            },
          },
        },
      },
    },
    colors: {
      white: colors.white,
      black: colors.black,
      gray: colors.gray,
      rose: colors.rose, // default rose 500
      lime: {
        50: '#FFFFFF',
        100: '#EBFECD',
        200: '#E2FDB1',
        300: '#CAFC79', // default plan-f-grün
        400: '#B6FB46',
        500: '#A3FA15',
        600: '#87D605',
        700: '#67A504',
        800: '#487303',
        900: '#294101',
      },
      green: {
        50: '#F6FEFB',
        100: '#C7FAE5', // default plan-f-smaragd
        200: '#99F5CF',
        300: '#6AF0B9',
        400: '#3CECA3',
        500: '#16E08C', // default plan-f-smaragd
        600: '#11B06E',
        700: '#0D8251',
        800: '#085434',
        900: '#042517',
      },
      purple: {
        50: '#F5EBFF',
        100: '#E8D3FF', // default plan-f-lila
        200: '#D7B3FF',
        300: '#BA7DFF', // default plan-f-lila
        400: '#A04CFF',
        500: '#851AFF',
        600: '#6C00E5', // default plan-f-lila
        700: '#5400B2',
        800: '#3C0080',
        900: '#24004D',
      },
    },
    fontFamily: {
      sans: ['ApercuPro', 'Arial', 'sans-serif'],
      mono: ['ApercuMonoPro', 'Courier New', 'monospace'],
    },
    fontWeight: {
      normal: '400',
      bold: '700',
    },
    listStyleType: {
      none: 'none',
      square: 'square',
      decimal: 'decimal',
      disc: 'disc',
    },

    plugins: [
      require('@tailwindcss/typography'),
      require('@tailwindcss/forms'),
      require('@tailwindcss/line-clamp'),
    ],
  },
};
