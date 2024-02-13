import React from "react";
import Title, { TitleSize, TitleLevel } from "../../ui/title/title";
import { StyledSection, TextWrapper, Text } from "./styled";

export default function About() {
  return (
    <StyledSection>
      <TextWrapper>
        <Title size={TitleSize.BIG} level={TitleLevel.H1}>
          Магазин фермерских продуктов с доставкой
        </Title>
        <Text>
          Все продукты изготавливаются под заказ. Фермеры начинают готовить
          продукты за день до отправки заказа клиентам. Именно поэтому мы
          принимаем заказы заранее и доставляем продукты максимально свежими.
        </Text>
      </TextWrapper>
    </StyledSection>
  );
}
