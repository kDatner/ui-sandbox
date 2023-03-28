import { style } from "@vanilla-extract/css";
import { Group, Icon, sprinkles, Theme } from "../../css";

const selectors = {
  isFilled: '&[data-filled="true"]:enabled',
} as const;

export const button = style([
  Group.style,
  sprinkles({
    border: "base",
    rounded: "small",
    w: "full",
    text: "small",
    p: "xsmall",
    pl: "small",
    gap: "small",
    color: { default: "secondary", disabled: "disabled" },
    display: "flex",
    placeItems: "center",
    textAlign: "start",
  }),
  {
    selectors: {
      [selectors.isFilled]: {
        color: Theme.vars.typography.color.primary,
      },
    },
  },
]);

export const label = sprinkles({ text: "small", grow: 1 });

export const icon = style([
  Icon.recipe({ size: "medium" }),
  Group.hover({
    color: Theme.vars.typography.color.primary,
  }),
  Group.disabled({
    color: Theme.vars.typography.color.disabled,
  }),
]);
