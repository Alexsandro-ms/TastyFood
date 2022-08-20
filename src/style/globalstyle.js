import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
   background-color: ${(props) => props.theme.colors.background};
   color: ${(props) => props.theme.colors.font};
   font-family:  'Poppins', sans-serif;
}
`;
