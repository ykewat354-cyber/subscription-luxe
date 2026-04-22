/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        luxury: {
          navy: "#002366",
          gold: "#D4AF37",
          goldLight: "#F9E498",
          cream: "#FDFBF7",
          champagne: "#F7E7CE",
          black: "#0A0A0A",
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair-display)', 'serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
