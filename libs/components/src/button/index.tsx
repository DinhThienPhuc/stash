import { IProps, SIZE, VARIANT } from "./index.utils";
import { MouseEvent, useCallback } from "react";

import Styled from "./index.style";
import cx from "classnames";

const Button = ({
  variant = VARIANT["TEXT"],
  size = SIZE["MEDIUM"],
  className,
  children,
  onClick,
  ...props
}: IProps) => {
  const handleClick = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (e: MouseEvent<any, globalThis.MouseEvent>) => {
      onClick?.(e);
    },
    [onClick]
  );

  return (
    <Styled.Button
      {...props}
      className={cx("button", className)}
      variant={variant}
      size={size}
      onClick={handleClick}
    >
      <Styled.Text className="button-text">{children}</Styled.Text>
    </Styled.Button>
  );
};

export default Button;
