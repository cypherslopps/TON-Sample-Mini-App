/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xsl: "375px",
      xl: "450px",
      xls: "470px",
      "sm-md": "600px",
      sm: "640px",
      xlss: "550px",
      md: "768px",
      lx: "850px",
      ls: "900px",
      lss: "970px",
      lg: "1024px"
    },
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