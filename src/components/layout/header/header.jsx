import React from "react";
import Logo from "../../ui/logo/logo";
import Nav from "../nav/nav";
import { StyledHeader } from "./styled";

export default function Header() {
  return (
    <StyledHeader>
      <Logo />
      <Nav />
    </StyledHeader>
  );
}
