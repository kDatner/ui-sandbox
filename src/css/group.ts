import { CSSProperties, StyleRule } from "@vanilla-extract/css";
import * as Group from "./group.css";

export const hover = (props: CSSProperties): StyleRule => ({
  selectors: {
    [`${Group.style}:hover &`]: props,
  },
});

export const disabled = (props: CSSProperties): StyleRule => ({
  selectors: {
    [`${Group.style}:disabled &`]: props,
  },
});
