import styled from "styled-components";

const Panel = styled.div`
  display: block;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.04), 0 2px 6px rgba(0, 0, 0, 0.04),
    0 0 1px rgba(0, 0, 0, 0.04);
  background-color: ${(props) => props.theme.colorWhite};
  width: ${(props) => props.$width || "auto"};
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: ${(props) => props.$marginBottom || "0"}px;
  padding: ${(props) => props.theme.indent};
  padding-top: ${(props) => `${props.$paddingTop}px` || props.theme.indent};
  padding-bottom: ${(props) =>
    `${props.$paddingBottom}px` || props.theme.indent};
`;

export default Panel;
