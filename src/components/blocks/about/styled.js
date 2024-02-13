import styled from "styled-components";
import { Section } from "../../styled";

const Paragraph = styled.p`
  margin: 0;
  padding: 0;
`;

export const StyledSection = styled(Section)`
  position: relative;
  display: flex;

  padding-left: ${(props) => props.theme.pagePadding};
  padding-right: 553px;
  padding-top: 183px;
  padding-bottom: 183px;
  background-color: ${(props) => props.theme.colorPattensBlue};

  &::after {
    position: absolute;
    bottom: 0;
    right: ${(props) => props.theme.pagePadding};
    display: block;
    content: "";
    width: 446px;
    height: 563px;
    margin: auto;
    background-image: url("https://i.ibb.co/qdhTmzM/Group-1.png");
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Text = styled(Paragraph)`
  padding-right: 100px;
`;
