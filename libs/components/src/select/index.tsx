import { ISelectOption, ISelectProps } from "./index.utils";

import Styled from "./index.style";
import { useMemo } from "react";

const Select = ({ label, options, onChange }: ISelectProps) => {
  const renderOptions = useMemo(() => {
    return options.map((option: ISelectOption) => {
      return (
        <Styled.Option key={option.value} value={option.value}>
          {option.label}
        </Styled.Option>
      );
    });
  }, [options]);

  return (
    <Styled.Container>
      {label ? <Styled.Label>{label}</Styled.Label> : null}
      <Styled.Select onChange={onChange}>{renderOptions}</Styled.Select>
    </Styled.Container>
  );
};

export default Select;
