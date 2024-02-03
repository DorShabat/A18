module.exports = {
  content: ["./*.{html,js,ts}"],
  darkMode: 'class', // enable 'class' mode for dark mode
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio")
  ],
};
