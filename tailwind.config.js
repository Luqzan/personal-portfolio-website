const plugin = require("tailwindcss/plugin");

const radialGradientPlugin = plugin(
  function ({ matchUtilities, theme }) {
    matchUtilities(
      {
        // map to bg-radient-[*]
        "bg-radient": (value) => ({
          "background-image": `radial-gradient(${value},var(--tw-gradient-stops))`,
        }),
      },
      { values: theme("radialGradients") }
    );
  },
  {
    theme: {
      radialGradients: _presets(),
    },
  }
);

function _presets() {
  const shapes = ["circle", "ellipse"];
  const pos = {
    c: "center",
    t: "top",
    b: "bottom",
    l: "left",
    r: "right",
    tl: "top left",
    tr: "top right",
    bl: "bottom left",
    br: "bottom right",
  };
  let result = {};
  for (const shape of shapes)
    for (const [posName, posValue] of Object.entries(pos))
      result[`${shape}-${posName}`] = `${shape} at ${posValue}`;

  return result;
}

/** @type {import('tailwindcss').Config} */

const { withUt } = require("uploadthing/tw");

module.exports = withUt({
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
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
    },
  },
  plugins: [radialGradientPlugin],
});
