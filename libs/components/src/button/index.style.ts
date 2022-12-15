import { SIZE, TSize, TVariant, VARIANT } from "./index.utils";
import styled, { css } from "styled-components";

const sizeModify = (props: { size: TSize; variant: TVariant }) => {
  if (props?.size === SIZE["SMALL"]) {
    return css`
      height: 24px;
      padding: 0 16px;
    `;
  }
  if (props?.size === SIZE["MEDIUM"]) {
    return css`
      height: 36px;
      padding: 0 20px;
    `;
  }
  return css`
    height: 48px;
    padding: 0 24px;
  `;
};

const variantModify = (props: { size: TSize; variant: TVariant }) => {
  if (props?.variant === VARIANT["CONTAINED"]) {
    return css`
      color: rgba(0, 0, 0, 0.87);
      background-color: rgb(144, 202, 249);
      border: 1px solid rgb(144, 202, 249);

      &:hover {
        background-color: rgb(66, 165, 245);
      }
    `;
  }
  if (props?.variant === VARIANT["OUTLINED"]) {
    return css`
      color: rgb(144, 202, 249);
      background-color: transparent;
      border: 1px solid rgba(144, 202, 249, 0.5);

      &:hover {
        background-color: rgba(144, 202, 249, 0.08);
        border: 1px solid rgb(144, 202, 249);
      }
    `;
  }
  return css`
    color: rgb(144, 202, 249);
    background-color: transparent;
    border: 1px solid transparent;

    &:hover {
      background-color: rgba(144, 202, 249, 0.08);
    }
  `;
};

const Styled = {
  Button: styled.button<{ size: TSize; variant: TVariant }>`
    transition: all 0.2s ease;
    background-color: transparent;
    box-shadow: none;
    outline: none;
    overflow: hidden;
    border-radius: 4px;
    min-width: 64px;
    padding: 6px 12px;
    font-weight: 500;
    cursor: pointer;
    ${sizeModify};
    ${variantModify};

    &:hover,
    &:focus {
      outline: 0;
      text-decoration: none;
    }
  `,
  Text: styled.span``,
};

export default Styled;
