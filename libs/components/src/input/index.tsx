import { IProps } from "./index.utils";
import Styled from "./index.style";
import cx from "classnames";
import { forwardRef } from "react";

const Input = forwardRef<HTMLInputElement, IProps>((props, ref) => {
  return (
    <Styled.Input
      className={cx("input", props.className)}
      hasLeftIcon={!!props.leftIcon}
      hasRightIcon={!!props.rightIcon}
    >
      <Styled.IconLeft className={cx("input-icon__left")}>
        {props.leftIcon}
      </Styled.IconLeft>
      <Styled.InputBox
        className={cx("input-box")}
        value={props.value}
        onChange={props.onChange}
        onFocus={props.onFocus}
        placeholder={props.placeholder}
        ref={ref}
        hasLeftIcon={!!props.leftIcon}
        hasRightIcon={!!props.rightIcon}
        {...props}
      />
      <Styled.IconRight className={cx("input-icon__right")}>
        {props.rightIcon}
      </Styled.IconRight>
    </Styled.Input>
  );
});

Input.displayName = "Input";

export default Input;
