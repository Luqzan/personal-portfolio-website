/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        laravel: "#FF2D20",
        react: "#00D8FF",
        nodejs: "#5FA04E",
        tailwind: "#06B6D4",
        accent: {
          50: "#F4F8FD",
          100: "#CAE1F7",
          200: "#A1CAF1",
          300: "#78B3EB",
          400: "#4F9CE5",
          500: "#2686E0",
          600: "#1E6BB3",
          700: "#165086",
          800: "#0F3559",
          900: "#071A2C",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
    },
  },
  plugins: [],
};
