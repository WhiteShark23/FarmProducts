import React from "react";
import { ProductImg, ProductPanel, ProductWrapper, Price } from "./styled";
import Title, { TitleLevel, TitleSize } from "../title/title";
import Tabs from "../tabs/tabs";
import OptionsList from "../options-list/options-list";

export default function ProductCart({ product }) {
  const tabsList = [
    {
      title: "Oписание",
      content: product.description,
    },
    {
      title: "Характеристики",
      content: <OptionsList list={product.specifications} />,
    },
    {
      title: "Свойства",
      content: <OptionsList list={product.structure} />,
    },
  ];
  return (
    <ProductPanel>
      <ProductImg src={product.image} />
      <ProductWrapper>
        <Title level={TitleLevel.H3} size={TitleSize.NORMAL} $marginBottom={16}>
          {product.name}
        </Title>
        <Tabs tabsList={tabsList} maxContentHeiht={"105px"} />
        <Price>
          {product.price} руб. / {product.weight} гр.
        </Price>
      </ProductWrapper>
    </ProductPanel>
  );
}
