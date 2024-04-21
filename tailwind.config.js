/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        colorShift: {
          '0%, 100%': {boxShadow: '0 4px 14px 0 rgb(60,174,163)'}, // Красный
          '50%': {boxShadow: '0 4px 14px 0 rgb(245,212,97)'} // Синий
        }
      },
    },
      animation: {
        colorShift: 'colorShift 15s ease-in-out infinite'
      }
  },
  plugins: [],
}