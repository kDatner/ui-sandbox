const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        shade: {
          100: "#0f1114",
          200: "#151920",
          300: "#181c24",
          400: "#1f242d",
          500: "#424a54",
        },
        text: {
          secondary: "#8393a8",
          primary: "white",
        },
      },
    },
    ui: {
      highlighted: "data-highlighted=true",
      filled: "data-filled=true",
      selected: "aria-selected=true",
    },
  },
  plugins: [
    plugin(function ({ matchVariant, addComponents, theme }) {
      matchVariant("ui", (value) => `&[${value}]`, {
        values: theme("ui"),
      });

      matchVariant("variant", (value) => `&[data-variant=${value}]`, {
        values: {
          primary: "primary",
          default: "default",
        },
      });

      addComponents({
        ".surface": {
          backgroundColor: theme("colors.white"),
          borderRadius: theme("borderRadius.lg"),
          padding: theme("spacing.6"),
          boxShadow: theme("boxShadow.xl"),
        },
        ".surface.surface-primary": {
          backgroundColor: theme("colors.shade.100"),
          color: theme("colors.white"),
        },
      });
    }),
  ],
};
