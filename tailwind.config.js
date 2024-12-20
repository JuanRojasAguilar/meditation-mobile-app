/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require("nativewind/preset")],
  content: [
      "./App.{js,jsx,ts,tsx}",
      "./app/**/*.{js,jsx,ts,tsx}",
      "./components/**/*.{js,jsx,ts,tsx}",
      "./app/(tabs)/meditate.tsx",
  ],
  theme: {
      extend: {
          fontFamily: {
              rmono: ["Roboto-Mono", "sans-serif"],
          },
      },
  },
  plugins: [],
};
