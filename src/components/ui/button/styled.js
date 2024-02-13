import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledButton = styled(Link)`
  display: block;
  font-size: ${(props) => props.theme.fontSizeDefault};
  min-height: 60px;
  min-width: ${(props) => (props.$minWidth ? `${props.$minWidth}px` : "100%")};
  font-weight: 700;
  line-height: 27px;
  color: ${(props) => props.theme.colorWhite};
  background-color: ${(props) => props.theme.colorNeonCarrot};
  text-align: center;
  text-decoration: none;
  border: none;
  background-image: none;
  box-shadow: none;
  cursor: pointer;
  transition: background-color 0.2s ease-out, box-shadow 0.2s ease-out;
  padding-top: 16.5px;
  padding-bottom: 16.5px;

  &:hover,
  &:active {
    background-color: ${(props) => props.theme.colorNeonCarrot};
    box-shadow: 0px 4px 0px 0px rgba(0, 0, 0, 0.14) inset;
  }

  &:active {
    box-shadow: none;
  }

  &:disabled {
    opacity: 0.5;
    box-shadow: none;
    cursor: default;
  }
`;
