import { useCallback, useMemo, useState } from "react";

import { IProps } from "./index.utils";
import Styled from "./index.style";
import cx from "classnames";

const Switch = ({
  onToggle,
  className,
  defaultChecked = false,
  disabled = false,
  leftLabel = null,
  rightLabel = null,
}: IProps) => {
  const [isOn, setOn] = useState(defaultChecked);

  const handleToggle = useCallback(() => {
    if (!disabled) {
      setOn(!isOn);
      onToggle?.(!isOn);
    }
  }, [disabled, isOn, onToggle]);

  const leftLabelCustom = useMemo(() => {
    if (!leftLabel) {
      return null;
    }
    return (
      <Styled.LeftLabel className="switch-label__left">
        {leftLabel}
      </Styled.LeftLabel>
    );
  }, [leftLabel]);

  const rightLabelCustom = useMemo(() => {
    if (!rightLabel) {
      return null;
    }
    return (
      <Styled.RightLabel className="switch-label__right">
        {rightLabel}
      </Styled.RightLabel>
    );
  }, [rightLabel]);

  return (
    <Styled.Container className={cx("switch", className)}>
      {leftLabelCustom}
      <Styled.Pad
        className="switch-pad"
        onClick={handleToggle}
        isOn={isOn}
        disabled={disabled}
      />
      {rightLabelCustom}
    </Styled.Container>
  );
};

export default Switch;
