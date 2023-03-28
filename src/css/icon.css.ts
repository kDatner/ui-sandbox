import { recipe as _recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { sprinkles } from "./sprinkles.css";
import * as Reset from "./reset.css";

export const recipe = _recipe({
  base: Reset.svg,

  variants: {
    size: {
      small: sprinkles({ size: "small" }),
      medium: sprinkles({ size: "medium" }),
      large: sprinkles({ size: "large" }),
    },
  },

  defaultVariants: { size: "small" },
});

export type IconVariants = RecipeVariants<typeof recipe>;
