import { ChangeEventHandler, ReactNode, SelectHTMLAttributes } from "react";

/* Types
   ========================================================================== */

/* Interfaces
   ========================================================================== */
export interface ISelectOption {
  value: string;
  label: ReactNode | string;
}

export interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: ISelectOption[];
  label?: ReactNode | string;
  onChange?: ChangeEventHandler;
}

/* Constants
   ========================================================================== */

/* Helpers
   ========================================================================== */
