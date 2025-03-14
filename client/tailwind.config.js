/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        toquiPrimary: "#E5777F",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      scale: {
        175: "1.75",
        200: "2",
      },
    },
  },
  plugins: [],
};
