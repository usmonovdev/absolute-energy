/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "linear-gradient":
          "linear-gradient(38deg, rgba(205,2,238,1) 0%, rgba(0,148,255,1) 100%)",
        "linear-gradient-blue": "linear-gradient(90deg, #0094FF 0%, #fff 100%)",
        "radial-gradient-red":
          "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(215,53,241,1) 50%, rgba(255,255,255,0) 100%)",
        "radial-gradient-blue":
          "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(0,148,255,1) 50%, rgba(255,255,255,0) 100%)",
      },
      colors: {
        main: "#0094FF",
        dark: "#252F40",
      },
      fontFamily: {
        trap_black: "trap-black, sans-serif",
        trap_extrabol: "trap-extrabold, sans-serif",
        trap_bold: "trap-bold, sans-serif",
        trap_semibold: "trap-semibold, sans-serif",
        trap_medium: "trap-medium, sans-serif",
        trap_regular: "trap-regular, sans-serif",
        trap_light: "trap-light, sans-serif",
      },
      boxShadow: {
        "small": "0 1px 2px 0 #1018280D"
      }
    },
  },
  plugins: [],
};
