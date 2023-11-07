/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        "sans": ["Quicksand", "sans-serif"],
        "lobster": ["Lobster", "sans-serif"],
      },
      colors: {
        "hover": "#fec524",
      },
      backgroundImage: {
        'footer-img': "url('/footer/bg_footer.webp')",
      }
    },
  },
  plugins: [],
}

