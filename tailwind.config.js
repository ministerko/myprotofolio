/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {  
      backgroundImage: {
        'gradienthead': 'linear-gradient(to bottom right, #006571, #00C0D6)',
        'gradienthead2':'linear-gradient(to bottom right, #006571, #00A5B8)',
        'gradientbutton':'linear-gradient(to bottom , #00272B, #008491)',
      },
      colors:{
        "darkblue":"#002529",
        "middleblue":"#005C66",
        "lightblue":"#00A5B8"
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      
    },
    fontSize: {
       "nav":"16px",
       "headone":"64px",
       "headtwo":"64px",
       "paragraphone":"32px",
       "paragraphtwo":"26px",


    }
    
    
  },
  plugins: [],
}
