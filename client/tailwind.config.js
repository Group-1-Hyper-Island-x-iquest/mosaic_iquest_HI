/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    backgroundImage: {
      topNavImage:
        "url('./assets/images/Header.png')",
    },

    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      mosaicWhite: "#FCFCFC",
      background: "#EEEEEE",
      mosaicLineGray: "#C4C7CC",
      mosaicBorderGray: "#D0D5DD",
      mosaicDarkGray: "#757575",
      mosaicLightGray: "#FBFBFB",
      mosaicGreen: "#21635C",
      mosaicBlue: "#617AFF",
      mosaicButtonGreen: "#21635C",
      mosaicButtonGold: "#F7BB6C",
      mosaicButtonInactive: "#EBEBEB",
      mosaicButtonBack: "#FBFBFB",
      mosaicButtonDetails: "#E9EEEE",
      mosaicButtonFontBlack: "#202020",
      mosaicButtonFontInactive:
        "#B8B8B8",
      mosaicBlack: "#000",
    },
    fontFamily: {
      Comfortaa: [
        "Comfortaa",
        "sans-serif",
      ],
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
