import styled, { css } from "styled-components";
import { Button, Ul } from "../../styled";

export const TabButton = styled(Button)`
  padding: 8px 12px;
  font-size: 14px;
  line-height: 21px;
  font-weight: 400;
  ${(props) =>
    props.$isSelect
      ? css`
          background-color: ${props.theme.colorChelseaCucumber};
          border: 1px solid rgba(0, 0, 0, 0.1);
          color: ${props.theme.colorWhite};
        `
      : css`
          background-color: ${props.theme.colorWhiteSmoke};
          border: 1px solid rgba(0, 0, 0, 0.1);
          color: ${props.theme.fontColorBlack};
        `}
`;

export const TabListItem = styled.li``;

export const Header = styled(Ul)`
  display: flex;
  margin-bottom: 16px;
  gap: 8px;
`;

export const Content = styled.div`
  font-size: 14px;
  line-height: 21px;
  max-height: ${(props) => props.$maxContentHeiht || "none"};
  overflow-y: overlay;
`;
