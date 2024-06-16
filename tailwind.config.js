/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      keyframes: {
        gradient: {
          "0%": {backgroundPosition: "0% 50%"},
          "100%": {backgroundPosition: "100% 50%"},
        },
      },
      animation: {
        gradient: "gradient 8s linear infinite",
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}

