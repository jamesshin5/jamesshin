import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html,body {
      /* width: 100%; */
      height: 100%;
      /* overflow-x: hidden; */
      background-color: #0c0c0c;
  }
`