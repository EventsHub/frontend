import {
  classnames,
  position,
  width,
  height,
  backgroundColor,
  inset,
  borderRadius,
  spacing,
  zIndex,
  backdropBrightness,
  backdropBlur,
  overflow,
  display,
  justifyContent,
  flexDirection,
  gap,
  fontSize,
  fontWeight,
  textColor,
  maxWidth,
} from "../classnames";

export const overlay = classnames(
  position("fixed"),
  width("w-full"),
  height("h-full"),
  display("flex"),
  justifyContent("justify-center"),
  inset("top-0", "left-0"),
  backdropBrightness("backdrop-brightness-50"),
  backdropBlur("backdrop-blur-sm"),
  overflow("overflow-hidden")
);

export const cancel = classnames(
  position("absolute"),
  width("w-full"),
  height("h-full")
);

export const modal = classnames(
  position("fixed"),
  zIndex("z-10"),
  backgroundColor("bg-dark"),
  borderRadius("rounded-t-md", "sm:rounded-md"),
  width("w-full"),
  maxWidth("max-w-xl"),
  spacing("py-5", "px-5", "sm:px-10"),
  inset("bottom-0", "sm:bottom-auto", "sm:top-16"),
  display("flex"),
  flexDirection("flex-col"),
  gap("gap-4")
);

export const header = classnames(
  fontSize("text-xl"),
  fontWeight("font-bold"),
  textColor("text-white")
);
