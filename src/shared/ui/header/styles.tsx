import {
  classnames,
  backgroundColor,
  display,
  spacing,
  borderRadius,
  textColor,
  fontSize,
  fontWeight,
} from "../classnames";

export const header = classnames(
  backgroundColor("bg-dark-light"),
  display("flex"),
  spacing("px-10", "py-6"),
  borderRadius("rounded-b-xl")
);

export const title = classnames(
  textColor("text-white"),
  fontSize("text-xl"),
  fontWeight("font-bold")
);
