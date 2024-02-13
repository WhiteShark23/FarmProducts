import styled from "styled-components";

export const StyledFooter = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px ${(props) => props.theme.pagePadding} 18px 86px;
  height: 79px;

  &::after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    height: 1px;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const Copyright = styled.span``;
