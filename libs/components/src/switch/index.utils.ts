import { ReactNode } from "react";

/* Types
   ========================================================================== */

/* Interfaces
   ========================================================================== */
export interface IProps {
  onToggle?: (value: boolean) => void;
  className?: string;
  defaultChecked?: boolean;
  disabled?: boolean;
  label?: string | ReactNode;
  leftLabel?: string | ReactNode;
  rightLabel?: string | ReactNode;
}

/* Constants
   ========================================================================== */

/* Helpers
   ========================================================================== */
