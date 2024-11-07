/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
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

