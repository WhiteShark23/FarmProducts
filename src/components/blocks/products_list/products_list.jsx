import React from "react";
import Product from "../../ui/product/product";
import Button from "../../ui/button/button";
import Title, { TitleLevel } from "../../ui/title/title";
import { StyledSectionProductsList, ProductList } from "./styled";
import { AppRoute } from "../../../const";

export default function Products_List({ features }) {
  return features && features.length ? (
    <StyledSectionProductsList>
      <>
        <Title level={TitleLevel.H2}>Почему фермерские продукты лучше?</Title>
        <ProductList>
          {features.map((feature) => (
            <li key={feature.id} className="product__item">
              <Product {...feature} />
            </li>
          ))}
        </ProductList>
        <Button minWidth={260} link={AppRoute.ORDER}>
          Купить
        </Button>
      </>
    </StyledSectionProductsList>
  ) : null;
}
