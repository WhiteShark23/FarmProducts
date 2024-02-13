import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.04),
    0px 2px 6px 0px rgba(0, 0, 0, 0.04), 0px 10px 20px 0px rgba(0, 0, 0, 0.04);
  padding: 10px ${(props) => props.theme.pagePadding};
`;
