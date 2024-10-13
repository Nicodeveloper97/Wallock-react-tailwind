/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', 
    './public/index.html'

  ],
  theme: {
    extend: { 
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        quicksand: ['Quicksand', 'sans-serif'],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)'
          },
          '100%': { transform: 'translateX(-50%)' },

          },
        },
        animation: {
          marquee: 'marquee 20s linear infinite',
        },
      }
    },
  
  plugins: [],
}

