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
        background: "#0a0a0a",
        foreground: "#ededed",
        laravel: "#FF2D20",
        react: "#00D8FF",
        nodejs: "#5FA04E",
        tailwind: "#06B6D4",
        typescript: "#3178c6",
        postgres: "#336791",
        accent: {
          50: "#f4f7fe",
          100: "#cad9fa",
          200: "#a1bbf6",
          300: "#779ef2",
          400: "#4e80ee",
          500: "#2563eb",
          600: "#1d4fbc",
          700: "#163b8d",
          800: "#0e275e",
          900: "#07132e",
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
