import styled from "styled-components";
import Button from "../../ui/button/button";

export const StyledButton = styled(Button)`
  position: relative;
  display: inline-block;
  padding: 0;
  width: auto;
  min-width: 0;
  background-color: ${(props) => props.theme.colorWhite};
  color: ${(props) => props.theme.colorNightRider};
  font-size: 18px;
  line-height: 27px;
  font-weight: 700;
  min-height: 18px;
  padding-top: 14px;
  padding-bottom: 19px;

  &::after {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 19px;
    height: 1px;
    background-color: ${(props) => props.theme.colorNightRider};
    opacity: 0;
    transition: opacity 0.2s ease-out;
    content: "";
  }

  &:hover,
  &:active {
    background-color: ${(props) => props.theme.colorWhite};

    &::after {
      opacity: 1;
    }
  }

  &:hover {
    box-shadow: none;
  }
`;
