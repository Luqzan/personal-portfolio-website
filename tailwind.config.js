/** @type {import('tailwindcss').Config} */
module.exports = {
  // corePlugins: {
  //   preflight: false,
  // },
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
        transparent: "#00000000",
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
        neutral: {
          50: "#ededed",
          100: "#d6d6d6",
          200: "#bfbfbf",
          300: "#a8a8a8",
          400: "#919191",
          500: "#7a7a7a",
          600: "#636363",
          700: "#4c4c4c",
          800: "#333333",
          900: "#0a0a0a",
        },
        brand: {
          alpinejs: "#77c1d2",
          clerk: "#9785ff",
          javascript: "#f0db4f",
          jquery: "#0868ac",
          laravel: "#FF2D20",
          livewire: "#fb70a9",
          mysql: "#4479a1",
          nextjs: "#ffffff",
          nodejs: "#5FA04E",
          php: "#777bb3",
          postgresql: "#336791",
          prisma: "#4c51bf",
          reactjs: "#00D8FF",
          reactnative: "#00D8FF",
          sequelize: "#03afef",
          tailwindcss: "#06B6D4",
          typescript: "#3178c6",
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
