// Order matters
export * as Reset from "./reset.css";
export * as Theme from "./theme.css";
import * as G from "./group.css";
import * as GUtil from "./group";
export const Group = {
  ...G,
  ...GUtil,
};
export * from "./sprinkles.css";
export * as Icon from "./icon.css";
export * as Primitives from "./primitives";
