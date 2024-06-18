import { left } from 'inquirer/lib/utils/readline'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      width: {
        '1140': '1140px',
        '140': '140px',
        '777': '777px',
        '1440': '1440px',
        '46': '46px',
        '116': '116px',
        '136': '136.92px',
        '145': '145.84px',
        '82': '82.922px',
        '30': '30px',
        '107': '107.25px',
        '149': '149.25px',
        '754': '754.79',
        '100': '100.76',
        '130': '130.76',
        '319':'319.68px',
      },
      height: {
        '46':'46px',
        '24': '24px',
        '45': '45px',
        '39': '39px',
        '56': '56px',
        '61': '61px',
        '60': '60px',
        '54': '54px',
        '30': '30px',
        '37': '37.50px',
        '33': '33.5px',
        '54': '54px',
        '51': '51px',
        '90': '90px',
        
      },
      backgroundColor : {
        'btn-clr':'#FFECEC',
        'border-clr': 'FF3A3A33',
        'header-btn': 'FF3A3A',
        'agent-clr': '#FFEADA',
      },
      colors: {
        'text-clr': '#181C20',
        'border': 'rgb(255 58 58 / 20%)',
      },
      
    },
  },
  plugins: [],
}
