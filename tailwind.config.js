module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: { vsm: { max: "640px" } },
      colors: {
        customPurple: "#6B3CC9",
        lightPurple: "#FAF8FF",
        customOrange: "#F28D35",
        customGreen: "#1CBDDD",
        customBlue: "#4DCA79",
        customBlack: "#6F6C90",
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
