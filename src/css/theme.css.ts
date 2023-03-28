import { createTheme } from "@vanilla-extract/css";
import * as Primitive from "./primitives";

export const [themeClass, vars] = createTheme({
  typography: {
    size: {
      small: {
        fontSize: "14px",
        lineHeight: "16px",
      },
    },
    color: {
      primary: Primitive.palette.slate[50],
      secondary: Primitive.palette.slate[300],
      disabled: Primitive.palette.slate[600],
      success: Primitive.palette.turquoise[400],
      warning: Primitive.palette.mango[300],
      error: Primitive.palette.cerise[600],
    },
  },

  border: {
    width: Primitive.borderSizes.base,
    color: {
      default: Primitive.palette.slate[500],
      hover: Primitive.palette.slate[300],
      active: Primitive.palette.slate[50],
      disabled: Primitive.palette.slate[600],
      success: Primitive.palette.turquoise[400],
      warning: Primitive.palette.mango[300],
      error: Primitive.palette.cerise[600],
    },
    radius: {
      small: "4px",
    },
  },
  base: "8px",
});
