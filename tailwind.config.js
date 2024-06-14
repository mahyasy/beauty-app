/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
   screens:{
    "xs":{'max':'414px'},
    'sm': '640px',
    'md': '768px',
  

   },
    colors:{
      "brown":"#655F5F",
      "pink": "#E1999F",
      "cream": "#FFF9E7",
      "gray": "#D3D3D3",
      "white": "#ffffff"
     
    },
    extend: {

      dropShadow: {
        '3xl': '3px 3px 1px rgba(0, 0, 0, 0.30)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ],
        '5xl':'7px 7px 1px  rgba(0,0,0,0.25)',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily:{
        cur:['fangsong;']

      },
      fontSize :{
        '2xl': '2rem',
      }
    },
  },
  plugins: [],
};
