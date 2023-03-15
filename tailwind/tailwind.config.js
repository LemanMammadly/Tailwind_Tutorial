/** @type {import('tailwindcss').Config} */

const _=require('lodash')
const plugin = require('tailwindcss/plugin')

module.exports = {
  mode:"jit",
  content: ["src/**/*.html"],
  darkMode: "class",
  theme: {
    extend: {
        colors:{
          prototurk:"#32445a",
          twitter:"#1da1f2"
        },
        spacing:{
          "15" : "3.75rem"
        },
        zIndex:{
          '-1':'-1'
        }
    },
  }, 
  plugins: [
    plugin(function({addUtiliies,theme,e}){
      const calcUtilities=_.map(theme('spacing'),(value,key)=>{
        return{
          [`.${e(`calc-h-full-${key}`)}`]: {
            height: `calc(100% - ${value})`
          },
          [`.${e(`calc-w-full-${key}`)}`]: {
            width: `calc(100% - ${value})`
          }
        }
      })
      addUtiliies(calcUtilities,{
        variants: ['responsive','hover']
      })
    })
  ],
}
