import {
  classnames,
  display,
  flexDirection,
  alignItems,
  gap,
  height,
  width,
  textColor,
  cursor,
} from "../../shared/ui/classnames";

export const form = classnames(
  display("flex"),
  flexDirection("flex-col"),
  gap("gap-4")
);

export const preview = classnames(
  display("flex"),
  gap("gap-4"),
  alignItems("items-center")
);

export const previewImg = classnames(height("h-24"));

export const trashIcon = classnames(
  height("h-6"),
  width("w-6"),
  textColor("text-gray", "hover:text-red"),
  cursor("cursor-pointer")
);
