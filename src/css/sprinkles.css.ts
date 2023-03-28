import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles";
import { calc } from "@vanilla-extract/css-utils";
import * as Primitive from "./primitives";
import { vars } from "./theme.css";

const space = {
  xxsmall: calc.divide(vars.base, 2),
  xsmall: vars.base,
  small: calc.multiply(vars.base, 1.5),
  medium: calc.multiply(vars.base, 2),
  large: calc.multiply(vars.base, 3),
  xlarge: calc.multiply(vars.base, 4),
  xxlarge: calc.multiply(vars.base, 6),
};

const typographyProperties = defineProperties({
  conditions: Primitive.conditions.stateful,
  defaultCondition: "default",
  properties: {
    color: vars.typography.color,
    text: vars.typography.size,
  },
});

const spacingProperties = defineProperties({
  properties: {
    display: ["none", "flex", "block", "inline"],
    flexDirection: ["row", "column"],
    justifyContent: [
      "stretch",
      "flex-start",
      "center",
      "flex-end",
      "space-around",
      "space-between",
    ],
    textAlign: ["center", "start", "end"],
    alignItems: ["stretch", "flex-start", "center", "flex-end"],
    placeItems: ["stretch", "flex-start", "center", "flex-end"],
    height: space,
    width: { ...space, full: "100%" },
    paddingRight: space,
    paddingLeft: space,
    paddingBottom: space,
    paddingTop: space,
    gap: space,
    flexGrow: [0, 1, 2, 3],
    flexShrink: [0, 1, 2, 3],
  },
  shorthands: {
    size: ["height", "width"],
    h: ["height"],
    w: ["width"],
    p: ["paddingLeft", "paddingRight", "paddingBottom", "paddingTop"],
    px: ["paddingLeft", "paddingRight"],
    py: ["paddingTop", "paddingBottom"],
    pt: ["paddingTop"],
    pb: ["paddingBottom"],
    pl: ["paddingLeft"],
    pr: ["paddingRight"],
    grow: ["flexGrow"],
    shrink: ["flexShrink"],
  },
});

const bordersProperties = defineProperties({
  conditions: Primitive.conditions.stateful,
  defaultCondition: "default",
  properties: {
    border: {
      base: {
        borderColor: vars.border.color.default,
        borderWidth: vars.border.width,
        ":hover": {
          borderColor: vars.border.color.hover,
        },
        ":active": {
          borderColor: vars.border.color.active,
        },
        ":disabled": {
          borderColor: vars.border.color.disabled,
        },
      },
    },
    borderWidth: {
      base: { vars: { [vars.border.width]: Primitive.borderSizes.base } },
    },
    borderRadius: vars.border.radius,
    borderColor: vars.border.color,
  },
  shorthands: {
    rounded: ["borderRadius"],
  },
});

export const sprinkles = createSprinkles(
  typographyProperties,
  bordersProperties,
  spacingProperties
);
