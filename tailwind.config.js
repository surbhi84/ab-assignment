/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Open Sans", "sans-serif"],
      },
    },
    colors: {
      abBlack: "rgba(0,0,0,1)",
      abWhite: "rgba(255, 255, 255, 1)",
      abLightGray: "rgba(217, 217, 217, 1)",
      abBtn: "rgba(0, 68, 193, 1)",
      sidebarBg: "#2D2D2D",
    },
  },
  plugins: [],
};
