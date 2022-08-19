/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          100: "#F2994A",
          200: "#2F80ED",
          300: "#4E598C",
        },
      },
    },
  },
  plugins: [],
};
