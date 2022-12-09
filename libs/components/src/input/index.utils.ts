import {
  ChangeEventHandler,
  FocusEventHandler,
  InputHTMLAttributes,
  ReactNode,
} from "react";

/* Interfaces & Types
   ========================================================================== */
export interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  placeholder?: string;
  value?: string;
  className?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

/* Constants
   ========================================================================== */

/* Functions
   ========================================================================== */
