import {
  classnames,
  width,
  borderWidth,
  borderRadius,
  borderColor,
  backgroundColor,
  outlineStyle,
  ringWidth,
  textColor,
  spacing,
} from "../classnames";

export const input = classnames(
  width("w-full"),
  borderWidth("border"),
  borderRadius("rounded-lg"),
  borderColor("border-gray", "focus:border-primary"),
  outlineStyle("focus:outline-none"),
  ringWidth("focus:ring-0"),
  backgroundColor("bg-transparent"),
  textColor("text-white", "placeholder:text-gray"),
  spacing("px-3", "py-2")
);
