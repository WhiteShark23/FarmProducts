import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    *,
    *::after,
    *::before {
    box-sizing: border-box;
    }

    html {
        height: 100%;
    }

    body,
    html {
    margin: 0;
    }

    body {
        position: relative;
        min-height: 100%;
        font-family: ${(props) => props.theme.fontFamily};
        font-size: ${(props) => props.theme.fontSizeDefault};
        line-height: 27px;
        font-weight: 400;
        color: ${(props) => props.theme.colorNightRider};
        background-color: ${(props) => props.theme.colorWhite};
        max-width: ${(props) => props.theme.pageWidth};
        margin-left: auto;
        margin-right: auto;
        width: ${(props) => props.theme.pageWidth}
      }
`;
