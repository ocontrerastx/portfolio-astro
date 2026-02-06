/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Your primary orange scale from index.css
        "brand-orange": {
          50: "#fff7f5",
          100: "#ffebe6",
          200: "#ffd1c7",
          300: "#ffb3a3",
          400: "#ff8a73",
          500: "#f16a50",
          600: "#d75b42", // Your primary brand color
          700: "#b24531",
          800: "#8e3828",
          900: "#712f22",
        },
        // Neutral palette from index.css/App.css
        "neutral-surface": "#1d1f20",
        "neutral-dark": "#111111",
      },
      fontFamily: {
        // Setting Manrope as the default sans font
        sans: ["Manrope", "Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
