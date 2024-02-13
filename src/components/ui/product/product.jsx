import React from "react";
import Title, { TitleSize, TitleLevel } from "../title/title";
import {
  ProductCard,
  ProductTitleWrapper,
  ProductIntroduction,
  ProductSpan,
  ProductText,
} from "./styled";

export const ProductVariant = {
  FARM: "farm",
  SHOP: "shop",
};

export default function Product({ img, about, title, product, variant }) {
  return (
    <ProductCard $variant={variant}>
      <ProductIntroduction>
        <img src={img} alt="Продукт." width="52" height="52" />
        <ProductTitleWrapper>
          <ProductSpan $variant={variant}>{product}</ProductSpan>
          <Title size={TitleSize.SMALL} level={TitleLevel.H3}>
            {title}
          </Title>
        </ProductTitleWrapper>
      </ProductIntroduction>
      <ProductText dangerouslySetInnerHTML={{ __html: about }} />
    </ProductCard>
  );
}
