// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [`./views/*.html`], // all .html files
//   theme: {
//     extend: {},
//   },
//   plugins: [require('@tailwindcss/typography'), require('daisyui')],
//   daisyui: {
//     themes: ['dim'],
//   },
// }
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [`./views/**/*.ejs`], // all .ejs files in views folder and subdirectories
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: ['dim'],
  },
};

