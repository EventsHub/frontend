import {
  classnames,
  display,
  flexDirection,
  gap,
  alignItems,
  justifyContent,
  textColor,
  fontSize,
  fontWeight,
} from "../classnames";

export const wrapper = classnames(
  display("flex"),
  flexDirection("flex-col"),
  gap("gap-4"),
  alignItems("items-center"),
  justifyContent("justify-center")
);

export const label = classnames(
  textColor("text-white"),
  fontSize("text-xl"),
  fontWeight("font-bold")
);
