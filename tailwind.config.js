const { urlAlphabet } = require("nanoid");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        bgWhite: "#F7F8F9",
        blue: "#0196FF",
        textAnswer: "#425A60",
        quesTitle: "#0F0F0F",
        description: "#697580",
        grayDark: "#3A4850",
      },
    },
    fontFamily: {
      open: ["Open Sans", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
    },
  },
  plugins: [],
};
