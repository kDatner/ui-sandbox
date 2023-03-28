export const palette = {
  slate: {
    50: "#EFF3F5",
    // ...
    300: "#7186A2",
    // ...
    500: "#404F63",
    600: "#2a3341",
  },

  turquoise: {
    400: "#46E1B6",
  },

  mango: {
    300: "#FAC54D",
  },

  cerise: {
    600: "#E12F87",
  },
} as const;

export const borderSizes = {
  base: "1px",
};

export const conditions = {
  stateful: {
    default: {},
    hover: { selector: "&:hover" },
    focus: { selector: "&:active" },
    active: { selector: "&:active" },
    disabled: { selector: "&:disabled" },
  },
} as const;
