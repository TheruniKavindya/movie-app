/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "movieClub-blue": "#2D335D",
        "movieClub-danger": "#d45058",
        "movieClub-white": "#fff",
        "movieClub-bg-primary": "#202329",
        "movieClub-button": "#df3a3a",
      },

      fontFamily: {
        "montserrat-regular": ["montserrat-regular"],
        "montserrat-extra-light": ["montserrat-extra-light"],
        "montserrat-semi-bold": ["montserrat-semi-bold"],
      },
    },
  },
  plugins: [],
};
