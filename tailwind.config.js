/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily:{
          'square-light':['Square Sans Pro light','Sans Sarif'],
          'square-regular':['Square Sans Pro Regular','Sans Sarif'],
          'square-medium':['Square Sans Pro medium','Sans Sarif'],
      }
    },
  },
  daisyui: {
    themes: ["light"],
  },
  plugins: [require("daisyui")],
}
