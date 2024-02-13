import styled from "styled-components";
import { Ul } from "../../styled";

export const StyledSectionProductsList = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;
  padding: 100px ${(props) => props.theme.pagePadding};
`;

export const ProductList = styled(Ul)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  list-style: none;
  gap: 20px;
`;
