import React from "react";
import Logo from "../../ui/logo/logo";
import { StyledFooter, Copyright } from "./styled";

export default function Footer() {
  return (
    <StyledFooter>
      <Logo />
      <Copyright>Создано 2021</Copyright>
    </StyledFooter>
  );
}
