import styled from "styled-components";
import Panel from "../panel/panel";

export const ProductImg = styled.img`
  width: 248px;
  height: 248px;
`;

export const ProductWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const ProductPanel = styled(Panel)`
  display: grid;
  grid-template-columns: 248px 1fr;
  gap: ${(props) => props.theme.indent};
`;

export const Price = styled.span`
  position: absolute;
  bottom: 0;
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
  padding: 4px 8px;
  background-color: ${(props) => props.theme.colorPattensBlue};
`;
