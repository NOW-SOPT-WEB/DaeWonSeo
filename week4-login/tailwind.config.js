/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1f1f1f",
      },
      backgroundImage: {
        "main-gradient": `linear-gradient( #121212, #1a1a1a )`,
      },
    },
  },
  plugins: [],
};
