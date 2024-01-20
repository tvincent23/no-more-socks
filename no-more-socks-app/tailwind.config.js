/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('./src/background.jpg')",
      },
    },
  },
  plugins: [],
};
