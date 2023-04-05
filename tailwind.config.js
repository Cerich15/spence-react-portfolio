/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/sections/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        burtons: "burtons",
        poppins: ["Poppins", "sans-serif"],
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        bounce5s: 'bounce 4s infinite',
        float: 'floating 1s ease-in-out infinite'
      },
      fontSize: {
        // sm: '0.8rem',
        // base: '1rem',
        // xl: '1.25rem',
        // '2xl': '1.563rem',
        // '3xl': '1.953rem',
        // '4xl': '2.441rem',
        // '5xl': '3.052rem',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        floating: {
                  '0%': { transform: 'translate(-50%, -50%)' },
                  '50%': { transform: 'translate(-50%, -60%)' },
                  '100%': { transform: 'translate(-50%, -50%)' },
                }
        },
    },
  },
  plugins: [],
};
