import React from "react";
import { StyledTitle } from "./styled";

export const TitleSize = {
  BIG: "big",
  SMALL: "small",
  NORMAL: "normal",
  DEFAULT: "",
};

export const TitleLevel = {
  H1: "1",
  H2: "2",
  H3: "3",
  H4: "4",
  H5: "5",
  H6: "6",
};

export default function Title({
  children,
  size,
  className,
  level,
  $marginBottom,
}) {
  return (
    <StyledTitle
      as={`h${level}`}
      className={className}
      $size={size}
      $marginBottom={$marginBottom}
    >
      {children}
    </StyledTitle>
  );
}
