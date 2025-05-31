/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,scss}"],
  theme: {
    extend: {
      colors: {
        primary: "#009c84",
        primary_dark: "#00705e",
        secondary: "#ecfbff",
        primary_hover: "#b6efe6",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
