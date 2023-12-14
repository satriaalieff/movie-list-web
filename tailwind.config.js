/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.js"],
  content: [],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Montserrat", "sans-serif"],
        secondary: ["Barlow Condensed", "sans-serif"],
      },
      colors: {
        bg: "#1E1E1E",
        bgcontainer: "#454545",
        accent: "#FF0035",
        primary: "#FFFFFF",
        secondary: "#9e9e9e",
      },
    },
  },
  plugins: [],
};
