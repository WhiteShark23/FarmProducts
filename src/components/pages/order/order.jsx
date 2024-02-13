import React, { useState } from "react";
import {
  StyledOrder,
  LeftColumn,
  AddressInput,
  PriceValue,
  PriceLabel,
  ProductSwiper,
  CheckboxLabel,
} from "./styled";
import Panel from "../../ui/panel/panel";
import Title, { TitleSize, TitleLevel } from "../../ui/title/title";
import Button from "../../ui/button/button";
import ProductCart from "../../ui/product_card/product_card";
import CheckboxList from "../../ui/checkbox-list/checkbox-list";
import { SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel, Scrollbar, FreeMode } from "swiper/modules";
import "swiper/css";
export default function Order({ products }) {
  const [selectProductIds, setSelectProductIds] = useState([]);
  const [swiperRef, setSwiperRef] = useState(null);
  const handleOnClickProduct = (value, index) => {
    if (!selectProductIds.includes(value)) {
      swiperRef.slideTo(index, 0);
    }
  };
  const selectProducts = selectProductIds.map((id) =>
    products.find((product) => product.id === id),
  );
  const fullPrice = selectProducts.reduce(
    (sum, product) => (sum += product.price),
    0,
  );
  const [address, setAddress] = useState("");
  const handleBuyClick = () => {
    // eslint-disable-next-line no-alert
    alert(`Спасибо за заказ, вы купили:\n${selectProducts.map(
      (product) => `${product.name} - ${product.price} руб.\n`,
    )}
    Итого: ${fullPrice} руб.
    Доставка по адресу: ${address}.`);
  };

  return products && products.length ? (
    <StyledOrder as="form">
      <LeftColumn>
        <Panel $marginBottom={18} $paddingTop={24} $paddingBottom={12}>
          <Title
            size={TitleSize.SMALL}
            level={TitleLevel.H2}
            $marginBottom={12}
          >
            Выберите продукты
          </Title>
          <CheckboxList
            labelComponent={CheckboxLabel}
            name={"select-products"}
            isGridList={false}
            options={products.map((product) => ({
              value: product.id,
              title: product.name,
            }))}
            selectValues={selectProductIds}
            onChange={setSelectProductIds}
            onClickLabel={handleOnClickProduct}
          />
        </Panel>
        <Panel $paddingTop={24}>
          <Title
            size={TitleSize.SMALL}
            level={TitleLevel.H2}
            $marginBottom={24}
          >
            Сделать заказ
          </Title>
          <AddressInput
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Введите адрес доставки"
          />
          <PriceLabel>Цена</PriceLabel>
          <PriceValue value={fullPrice} />
          <Button
            disabled={!(selectProductIds.length && address)}
            onClick={handleBuyClick}
          >
            Купить
          </Button>
        </Panel>
      </LeftColumn>
      <ProductSwiper
        onSwiper={setSwiperRef}
        spaceBetween={12}
        direction="vertical"
        slidesPerView="auto"
        freeMode={true}
        mousewheel={true}
        scrollbar={true}
        pagination={{
          type: "fanction",
        }}
        modules={[FreeMode, Scrollbar, Mousewheel, Pagination]}
      >
        {products
          ? products.map((product) => (
              <SwiperSlide key={product.id}>
                <ProductCart product={product} />
              </SwiperSlide>
            ))
          : null}
      </ProductSwiper>
    </StyledOrder>
  ) : (
    "Продукты были слишком вкусные и их разобрали."
  );
}
