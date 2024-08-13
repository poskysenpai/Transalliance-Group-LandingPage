/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       colors: {
      'custom-blue': '#122038',
      'custom-yellow': '#DEFC7B',
      'custom-green1': '#5BFB94',
      'custom-green2': '#5AB088CC',
      'custom-green3': '#5FB083' // Custom blue color
    },},
  },
  plugins: [],
}

