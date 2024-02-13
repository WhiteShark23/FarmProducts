import styled from "styled-components";
import { ProductVariant } from "./product";

export const ProductCard = styled.article`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: ${(props) => {
    let gap;
    if (props.$variant === ProductVariant.SHOP) {
      gap = "16px";
    } else {
      gap = "20px";
    }
    return gap;
  }};
  padding: 20px;
  background-color: ${(props) => {
    let color;
    if (props.$variant === ProductVariant.SHOP) {
      color = props.theme.colorRemy;
    } else {
      color = props.theme.colorWillowBrook;
    }
    return color;
  }};
`;

export const ProductIntroduction = styled.div`
  display: flex;
  gap: 22px;
`;

export const ProductTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`;

export const ProductSpan = styled.span`
  font-size: 14px;
  line-height: 21px;
  color: ${(props) => props.theme.colorWhite};
  background-color: ${(props) => {
    let color;
    if (props.$variant === ProductVariant.SHOP) {
      color = props.theme.colorOutrageousOrange;
    } else {
      color = props.theme.colorChelseaCucumber;
    }
    return color;
  }};
  padding: ${(props) => {
    let padding;
    if (props.$variant === ProductVariant.SHOP) {
      padding = `4px 10px`;
    } else {
      padding = `2px 10px`;
    }
    return padding;
  }};
`;

export const ProductText = styled.p`
  margin: 0;
  padding: 0;
`;
