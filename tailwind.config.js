module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        deep_orange: {
          A100: "#ffb572",
          "300_71": "#eb966a71",
          A100_33: "#ffb57233",
        },
        green: { A200_3d: "#6be2be3d", "300_3d": "#88e0903d" },
        black: { "900_b2": "#000000b2" },
        red: {
          300: "#ea7c69",
          "300_51": "#ea7c6951",
          "300_70": "#ea7c6970",
          "300_3d": "#ff64713d",
          "300_42": "#ea7c6942",
          "300_66": "#ea7c6966",
          "300_4c": "#ea7c694c",
        },
        indigo: { A100: "#9290fe", A100_33: "#9290fe33" },
        gray: { 50: "#fafafa", 300: "#e0e6e8", 400: "#c4c4c4", 900: "#1f1d2b" },
        pink: { A100: "#ff7ca3" },
        teal: { 300: "#50d0a9" },
        blue_gray: {
          200: "#abbbc2",
          400: "#889898",
          800: "#393c49",
          900: "#252836",
          "900_01": "#2d303e",
        },
        deep_purple: { "300_4c": "#9288e04c" },
        blue: { 300: "#64b0f6" },
        white: { A700: "#ffffff" },
      },
      fontFamily: { barlow: "Barlow" },
      boxShadow: {
        bs1: "0px 8px  24px 0px #ea7c694c",
        bs: "0px 8px  24px 0px #ea7c6951",
        bs2: "0px 8px  24px 0px #ea7c6966",
        bs3: "0px 8px  24px 0px #9288e04c",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
