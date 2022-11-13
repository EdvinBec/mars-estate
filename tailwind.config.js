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
        "hero-background": "url('../assets/img/hero-backgorund-min.jpg')",
        "green-background": "url('../assets/img/green-house-min.jpg')",
        1: "url('../assets/img/mercedes-benz-museum-min.jpg')",
        2: "url('../assets/img/museum-yellow-min.jpg')",
        3: "url('../assets/img/man-mars-min.jpg')",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
