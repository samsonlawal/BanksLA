/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F04D22",
        secondary: "#FFF4F1",
      },

      keyframes: {
        "open-menu": {
          "0%": { transform: "scaleY(0)" },
          "80%": { transform: "scaleY(1.2)" },
          "100%": { transform: "scaleY(1)" },
        },
      },

      animation: {
        "open-menu": "open-menu 0.5s ease-in-out forwards",
      },
      //       colors: {
      //   lipstick: "#E33E3C",
      //   lightlipstick: "#F8D1D0",
      //   graylip: "#595959",
      //   palelip: "#FDFFF6",
      // },

      screens: {
        smd: "540px",
        sm: "576px",
        md: "665px",
        lg: "992px",
        xl: "1200px",
      },
      spacing: {
        96: "24rem",
        120: "27rem",
        128: "30rem",
        130: "32rem", // Example of a larger fixed width
        140: "37rem", // Another example
        144: "40rem",
        150: "50rem",
        // ...
      },

      fontFamily: {
        mont: ["Montserrat", "sans-serif"],
        open: ["Open Sans", "sans-serif"],
        pop: ["Poppins", "sans-serif"],
      },
    },

    plugins: [],
  },
};
