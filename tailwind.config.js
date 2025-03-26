/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'fadeIn': 'fadeIn 0.5s ease-in',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glow: {
          'from': { 'box-shadow': '0 0 20px -5px rgba(16, 185, 129, 0.3)' },
          'to': { 'box-shadow': '0 0 20px -5px rgba(16, 185, 129, 0.7)' }
        }
      },
    },
  },
  plugins: [],
}

