import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }



    body {
        font-family: 'Rubik', sans-serif;
        background-color: hsl(228, 33%, 97%);
        display: flex;
        align-items: flex-start;
        justify-content: center;
        min-height: 100vh;
        @media (min-width: 768px) {
            padding-inline: 1rem;
        }
        @media (min-width: 1024px) {
            padding-inline: 5rem;
        }
        @media (min-width: 1200px) {
            padding-inline: 10rem;
        }
        @media (min-width: 1440px) {
            padding-inline: 15rem;
        }
        @media (min-width: 1600px) {
            padding-inline: 20rem;
        }
        @media (min-width: 1800px) {
            padding-inline: 25rem;
        }
    }
`;
