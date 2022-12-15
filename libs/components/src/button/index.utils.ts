import { ButtonHTMLAttributes, MouseEventHandler } from "react";

import { IObject } from "@artemis/utils";

/* Types
   ========================================================================== */
export type TSize = "small" | "medium" | "large";

export type TVariant = "outlined" | "contained" | "text";

/* Interfaces
   ========================================================================== */
export interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: TSize;
  variant?: TVariant;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

/* Constants
   ========================================================================== */
export const SIZE: IObject<TSize> = {
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
};

export const VARIANT: IObject<TVariant> = {
  OUTLINED: "outlined",
  CONTAINED: "contained",
  TEXT: "text",
};

/* Helpers
   ========================================================================== */
