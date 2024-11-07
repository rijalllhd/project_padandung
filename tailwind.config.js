/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html,js}",
    "./src/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-bg': "url('./asset/bg-image.jpeg')",
      },
    },
  },
  plugins: ['flowbite/plugin'],
}

