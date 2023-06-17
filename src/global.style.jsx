import { createGlobalStyle } from "styled-components";
import { respond } from "./utils/responsive/responsive.utils";

export default createGlobalStyle`
  :root {
    --color-primary: #212121;
    --color-primary-light: #7f7f7f;
    --color-secondary: #f7f7f7;
    --color-black: #000;
    --color-white: #fff;
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%; /* 1rem = 10px */

    @media only screen and ${respond.tabLand} {
      font-size: 56.25%; /* 1rem = 9px */
    }

    @media only screen and ${respond.tabPort} {
      font-size: 50%; /* 1rem = 8px */
    }

    @media only screen and ${respond.bigDesktop} {
      font-size: 68.75%; /* 1rem = 11px */
    }

    scroll-behavior: smooth;
    overflow-x: hidden;
  }

  body {
    background-color: var(--color-secondary);
    font-family: "Roboto Condensed", sans-serif;
    font-size: 1.6rem;
    color: var(--color-primary);
    padding: 2rem 4rem;

    @media only screen and ${respond.tabPort} {
      padding: 3rem;
    }
  }

  a {
    text-decoration: none;
    color: var(--color-primary);
  }
`;
