import { classnames, display, grid, gap } from "../classnames";

export const gridWrapper = classnames(
  display("grid"),
  grid("grid-cols-1", "md:grid-cols-2", "lg:grid-cols-3", "xl:grid-cols-4"),
  gap("gap-4")
);
