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
      },
      colors: {
        main: "#0094FF",
        dark: "#252F40",
      },
      fontFamily: {
        black: 'trap-black, sans-serif',
        extrabol: 'trap-extrabold, sans-serif',
        bold: 'trap-bold, sans-serif',
        semibold: 'trap-semibold, sans-serif',
        medium: 'trap-medium, sans-serif',
        regular: 'trap-regular, sans-serif',
        light: 'trap-light, sans-serif'
      }
    },
  },
  plugins: [],
};
