import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import "@sopt-makers/ui/dist/index.css";

export const GlobalStyle = createGlobalStyle`
${reset}

html {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

body, #root {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100vh;
    max-width: 500px; 
}

`;
