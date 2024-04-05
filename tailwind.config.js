/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: { vsm: { max: "640px" } },
      colors: {
        customPurple: "#6B3CC9",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        "14px": "14px",
      },
      lineHeight: {
        body1: "16.94px",
      },
    },
  },
  plugins: [],
};
