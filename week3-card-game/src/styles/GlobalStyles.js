import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}
  a{
        text-decoration: none;
        color: inherit;
    }
    *{
        box-sizing: border-box;
    }
    html, body, div, span, h1, h2, h3, h4, h5, h6, p, 
    a, dl, dt, dd, ol, ul, li, form, label, table{
        margin: 0;
        padding: 0;
        border: 0;
        color: #FCF9F3;
    }
    body{
        font-family: "Black Han Sans", sans-serif;
        font-weight: 400;
        font-style: normal;
    }
    ol, ul{
        list-style: none;
    }
    button {
        border: 0;
        cursor: pointer;
    }
`;

export default GlobalStyles;
