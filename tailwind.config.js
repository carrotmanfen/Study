/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#312964",
        secondary: "#312964",
        dimWhite: "#D9D9D9",
        dimBlue: "#86CFD0",
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        roboto:["Roboto","sans-serif"]
      },
    },
    screens: {
      xs: "375px",
      sm: "744px",
      md: "1024px",
      lg: "1440px",
      xl: "1700px",
    }
  },
  plugins: [],
}
