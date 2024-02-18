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
        gray: {
          400: "#c4c4c4",
          500: "#9e9e9e",
          600: "#808080",
          "600_01": "#6f6e6e",
          "500_01": "#949090",
        },
        blue_gray: { 100: "#d9d9d9" },
        black: { 900: "#000000" },
        pink: { 900: "#9d0333" },
        purple: { 900: "#57068c" },
        light_blue: { A700: "#0093ff" },
        white: { A700: "#ffffff" },
        red: { A700: "#ff0000" },
      },
      fontFamily: { outfit: "Outfit", inter: "Inter" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
