/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          teal: "#4B9A98",
          tealDark: "#2F7F7C",
          gold: "#D9AE2B",
          goldLight: "#F3D481",
          cream: "#FAF8F1",
          mint: "#EAF6F4",
        },
      },
      borderRadius: {
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
}
