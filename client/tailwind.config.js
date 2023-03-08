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
      mosaicBorderGray: "#D0D5DD",
      mosaicDarkGray: "#757575",
      mosaicLightGray: "#757575",
      mosaicGreen: "#67AC5B",
      mosaicBlue: "#617AFF",
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
