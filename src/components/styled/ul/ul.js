import styled, { css } from "styled-components";

const gridList = css`
  display: grid;
  gap: 20px;
  font-size: 0;
  line-height: 0;
`;

const Ul = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  ${(props) => (props.$isGridList ? gridList : "")}
`;

export default Ul;
