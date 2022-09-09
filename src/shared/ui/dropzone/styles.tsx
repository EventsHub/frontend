import {
  classnames,
  width,
  height,
  borderWidth,
  borderStyle,
  borderRadius,
  borderColor,
  display,
  alignItems,
  justifyContent,
  fontSize,
  textColor,
  cursor,
} from "../classnames";

export const wrapper = classnames(
  width("w-full"),
  height("h-96"),
  borderWidth("border-2"),
  borderStyle("border-dashed"),
  borderRadius("rounded-xl"),
  borderColor("border-gray"),
  cursor("cursor-pointer")
);

export const dropzone = classnames(
  width("w-full"),
  height("h-full"),
  display("flex"),
  alignItems("items-center"),
  justifyContent("justify-center")
);

export const label = classnames(fontSize("text-xl"), textColor("text-white"));
