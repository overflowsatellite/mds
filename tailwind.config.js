/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
    extend: {
      colors: {
        raisin: "#2B242D",
        violet: "#413543",
        deep: "#52387A",
        bright: "#FFD569",
      },
    },
  },
  plugins: [],
};
