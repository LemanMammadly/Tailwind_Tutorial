/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        purple:"#5624d0",
        gray:"#F5F5F5"
      },
      spacing:{
        "100" : "510px"
      },
    },
  },
  plugins: [],
}
