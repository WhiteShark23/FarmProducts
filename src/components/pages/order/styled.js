import styled, { css } from "styled-components";
import { Section, Label } from "../../styled";
import TextInput from "../../ui/text_input/text_input";
import { Swiper } from "swiper/react";
import checkboxSelect from "../../../assets/checkbox.svg";
import Price from "../../ui/price/price";

export const StyledOrder = styled(Section)`
  position: absolute;
  top: ${(props) => props.theme.headerHeight};
  bottom: ${(props) => props.theme.footerHeight};
  background-color: ${(props) => props.theme.backgroundColorGray};
  max-width: ${(props) => props.theme.pageWidth};
  display: grid;
  grid-template-columns: 353px 1fr;
  gap: 20px;
  background-color: ${(props) => props.theme.colorWhiteSmoke};
  padding-top: 40px;
  padding-bottom: 0;
`;

export const LeftColumn = styled.div`
  display: flex:
  flex-direction: column;
  gap: 18px;
  width: 100%;
  overflow-y: overlay;
  max-height: 100%;
`;

export const AddressInput = styled(TextInput)`
  margin-bottom: ${(props) => props.theme.indent};
`;

export const PriceValue = styled(Price)`
  display: block;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 32px;
`;

export const PriceLabel = styled(Label)`
  margin-bottom: 8px;
`;

export const ProductSwiper = styled(Swiper)`
  width: 727px;

  .swiper-pagination {
    display: none;
  }

  .swiper-slide {
    flex-shrink: 1;
  }
`;

export const CheckboxLabel = styled.span`
  position: relative;
  display: flex;
  height: 56px;
  font-size: 18px;
  text-align: left;
  align-items: center;
  cursor: pointer;

  &::after {
    content: "";
    right: 0;
    display: block;
    position: absolute;
    height: 22px;
    width: 22px;
    ${(props) =>
      props.$isChecked
        ? css`
            background-color: #fc9b27;
            border: 1px solid rgba(0, 0, 0, 0.1);
            background-image: url(${checkboxSelect});
            background-repeat: no-repeat;
            background-position: center center;
          `
        : css`
            background-color: ${props.theme.colorWhiteSmoke};
            border: 1px solid rgba(0, 0, 0, 0.1);
          `}
  }
`;
