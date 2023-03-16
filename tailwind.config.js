/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["var(--font-manrope)"],
        jetbrains: ["var(--font-jetbrains)"],
      },
      colors: {
        coal: {
          900: "#161616",
          800: "#181818",
          700: "#1A1A1A",
          600: "#1F1F1F",
        },
      },
    },
  },
  plugins: [],
};
