/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'laptop': '1024px',
    },
    colors: {
      black: "#000",
      white: "#fff",
      transparent: "000",
      gray: {
        900: "#1a202c",
        matte: "#545454",
      },
      extend: {},
    },
    plugins: [],
  },
};
