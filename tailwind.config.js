/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src**/*.{html,js}"],
  theme: {
    extend: {
      'fontSize' : {
        '8xl' : '8rem'
      },
      'colors': {
        'red-custom': '#fd681b'
      }
    },
  },
  plugins: [],
}

