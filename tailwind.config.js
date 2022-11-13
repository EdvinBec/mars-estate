/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-background": "url('../assets/img/hero-backgorund.jpg')",
        1: "url('../assets/img/mercedes-benz-museum.jpg')",
        2: "url('../assets/img/museum-yellow.jpg')",
        3: "url('../assets/img/man-mars.jpg')",
      },
    },
  },
  plugins: [],
};