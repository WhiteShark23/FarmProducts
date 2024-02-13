import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const logoStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  color: ${(props) => props.theme.colorNightRider};
`;

export const StyledLogo = styled(Link)`
  ${logoStyle}
  text-decoration: none;
`;

export const StyledLogoMainPage = styled.span`
  ${logoStyle}
`;

export const Text = styled.span`
  font-size: 28px;
  font-weight: 700;
  line-height: 32.2px;
`;
