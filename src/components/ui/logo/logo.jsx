import React from "react";
import LogoImg from "../../../assets/logo.svg";
import { Text, StyledLogo, StyledLogoMainPage } from "./styled";
import { AppRoute } from "../../../const";
import { useLocation } from "react-router-dom";

export default function Logo() {
  const { pathname } = useLocation();

  return pathname === AppRoute.MAIN ? (
    <StyledLogoMainPage>
      <LogoImg />
      <Text>Фермерские продукты</Text>
    </StyledLogoMainPage>
  ) : (
    <StyledLogo to={AppRoute.MAIN}>
      <LogoImg />
      <Text>Фермерские продукты</Text>
    </StyledLogo>
  );
}
