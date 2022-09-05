import {
  classnames,
  backgroundColor,
  borderRadius,
  spacing,
  textColor,
  fontWeight,
  width
} from "../classnames";

export const button = classnames(
  width("w-full"),
  backgroundColor("bg-primary"),
  borderRadius("rounded-xl"),
  spacing("px-10", "py-4"),
  textColor("text-white"),
  fontWeight("font-semibold")
);
