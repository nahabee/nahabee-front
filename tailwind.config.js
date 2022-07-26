module.exports = {
  content: [
    "./src/**/*.{html,jsx}",
    "./node_modules/tw-elements/dist/jsx/**/*.jsx",
  ],

  theme: {
    screens: {
      xs: { min: "1024px" },
      mobS: { max: "768px" },
    },
    letterSpacing: {
      tightest: "-.075em",
      tighter: "-.05em",
      tight: "-.025em",
      normal: "0",
      wide: ".025em",
      wider: ".05em",
      widest: ".1em",
      xl: "50px",
    },

    extend: {
      backgroundImage: {},

      animation: {
        "spin-slow": "spin 8s linear infinite",
      },
      width: {
        "5/5": "10%",
      },
      colors: {
        creme: "#F7F7F5",
        grey: "#BEBBB6",
        brown: "#46413B",
        dark: "#020204",
      },
      margin: {
        "9/9": "600px",
      },
      fontFamily: {
        title: "'Syne', sans-serif",
        subtitle: "'Yeseva One', cursive;",
        body: "'Rajdhani', sans-serif",
      },
      fontSize: {
        "10xl": "300px",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
