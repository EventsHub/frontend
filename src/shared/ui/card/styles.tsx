import {
  classnames,
  display,
  flexDirection,
  alignItems,
  gap,
  spacing,
  borderWidth,
  borderColor,
  borderRadius,
  fontSize,
  fontWeight,
  textColor,
  maxWidth,
  width,
  position,
  inset,
  backgroundColor,
} from "../classnames";

export const card = classnames(
  display("flex"),
  flexDirection("flex-col"),
  gap("gap-4"),
  spacing("px-4", "py-4"),
  borderWidth("border"),
  borderColor("border-dark-light"),
  borderRadius("rounded-2xl")
);

export const imgWrapper = classnames(
  width("w-full"),
  maxWidth("max-w-sm"),
  position("relative")
);

export const img = classnames(borderRadius("rounded-2xl"), width("w-full"));

export const likeButton = classnames(
  position("absolute"),
  borderRadius("rounded-full"),
  backgroundColor("bg-white"),
  spacing("px-2", "py-2"),
  inset("top-2", "right-2")
);

export const title = classnames(
  fontSize("text-xl"),
  fontWeight("font-bold"),
  textColor("text-white")
);

export const location = classnames(
  display("flex"),
  alignItems("items-center"),
  gap("gap-2"),
  textColor("text-gray")
);
