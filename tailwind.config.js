const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [
    // Tambahkan plugin ini untuk mengaktifkan varian 'viral'
    plugin(function ({ addVariant }) {
      addVariant("viral", ".viral &");
    }),
  ],
};
