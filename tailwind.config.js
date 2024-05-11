/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        features: "#282B32",
        progress: {
          bg: "#282B30",
          border: "#2E3136"
        },
        textGray: "#97989D",
        gold: "#EBBF3A"
      }
    },
  },
  plugins: [],
}