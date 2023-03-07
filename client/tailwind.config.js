/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    backgroundImage: {
      topNavImage: "url('../assets/images/Header.png')",
    },

    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      background: "#EEEEEE",
      mosaicBorderGray: "#D0D5DD",
      mosaicDarkGray: "#757575",
      mosaicLightGray: "#FBFBFB",
      mosaicGreen: "#21635C",
      mosaicBlue: "#617AFF",
      mosaicBlack: "#000",
    },
    fontFamily: {
      Comfortaa: ["Comfortaa", "sans-serif"],
      Arial: ["Arial", "sans-serif"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
