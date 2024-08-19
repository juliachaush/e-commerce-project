/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}", // Includes all files in the `src/app` directory
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}", // Includes all files in the `src/components` directory
    "./src/assets/**/*.{js,ts,jsx,tsx,mdx}", // Includes all files in the `src/assets` directory
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        tangerine: ["Tangerine", "cursive"],
      },
    },
  },
  plugins: [],
};
