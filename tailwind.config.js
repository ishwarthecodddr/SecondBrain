/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          "600": "#5046E4",
          "500": "#4841B0",
          "400": "#DEE8FE"
        }
      }
    },
  },
  plugins: [],
}

