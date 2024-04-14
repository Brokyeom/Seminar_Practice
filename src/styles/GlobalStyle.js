import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
${reset}

html {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    max-width: 500px; 
}

`;
