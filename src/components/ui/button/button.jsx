import React from "react";
import { StyledButton } from "./styled";

export default function Button({
  children,
  minWidth,
  link,
  className,
  onClick,
  ...props
}) {
  return (
    <StyledButton
      {...props}
      $minWidth={minWidth}
      className={className}
      {...(link ? { to: link } : { as: "button", onClick, type: "button" })}
    >
      {children}
    </StyledButton>
  );
}
