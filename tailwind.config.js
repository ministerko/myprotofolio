/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {  
      backgroundImage: {
        'gradient-head': 'linear-gradient(to bottom right, #006571, #00C0D6)',
        'gradient-head2':'linear-gradient(to bottom right, #006571, #00A5B8)',
      },
      colors:{
        "darkblue":"#002529",
        "middleblue":"#005C66",
        "lightblue":"#00A5B8"
      }
    },
  },
  plugins: [],
}
