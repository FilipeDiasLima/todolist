import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #EFF0F2;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Quicksand', sans-serif;
    color: #312B47;
  }

  html {
    /* 1rem = 10px */
    font-size: 62.5%;
  }

  #root {
    width: 100vw;
    margin: 0 auto;
  }

  button {
    cursor: pointer;
  }
`;
