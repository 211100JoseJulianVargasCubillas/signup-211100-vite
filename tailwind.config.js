module.exports = {
  mode: "jit",
  darkMode: false,
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        red: { default: "#FF7979" },
        purple: {
          default: "#5E54A4",
        },
        green: { default: "#38CC8B", light: "#77E2B3" },
      },
      boxShadow: {
        solid: "0px 6px 0px rgba(0, 0, 0, 0.15)",
        inner: "inset 1px -3px 0px rgba(0, 0, 0, 0.15)",
      },
      fontSize: {
        base: "16px",
        h1: "50px",
      },
      lineHeight: {
        14: "3.5rem",
      },
      maxWidth: {
        135: "33.75rem",
        175: "43.75rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
