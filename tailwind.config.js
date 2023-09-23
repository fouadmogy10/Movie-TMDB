/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#04152d",
        hover: "#da2f68",
      },
    },
  },
  plugins: [require("daisyui")],
};
