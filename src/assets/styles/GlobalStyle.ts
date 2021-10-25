import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

html{
    box-sizing: border-box;
}

*,*::before, *::after{
    box-sizing: inherit;
}


body{
    font-family: 'Montserrat', sans-serif;
    overflow-y: hidden;
}

a, button {
   font-family: 'Montserrat', sans-serif;
   text-decoration: none;
}


`;
