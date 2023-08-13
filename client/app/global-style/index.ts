import { createGlobalStyle } from 'styled-components';
import SpacingClasses from './spacing';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-size: 10px;
  }
  body {
    font-size: 1.6rem;
    font-family: Montserrat, sans-serif;
  }
  ${SpacingClasses};
`;