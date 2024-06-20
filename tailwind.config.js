/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1200px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
        'hero-bg': "url('/img/hero-bg.png')",
      },
      maxWidth: {
        '993': '1316px',
      },
      spacing: {
        '20px': '20px',
        '100px': '100px',
      },
      keyframes: {
        animate__zoomIn: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      animation: {
        animate__zoomIn: 'zoomin infinite',
      },

      animation: {
        'spin-slow': 'spin 3s linear infinite',
      }
      
    },
   
    container: {
      center: true,
    },
  },
  plugins: [],
}