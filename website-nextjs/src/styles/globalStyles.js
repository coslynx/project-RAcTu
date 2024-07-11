import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background-color: #f5f5f5;
    color: #333;
  }

  a {
    text-decoration: none;
    color: #007bff;
    cursor: pointer;
  }

  button {
    font-family: 'Roboto', sans-serif;
    cursor: pointer;
  }

  input, textarea {
    font-family: 'Roboto', sans-serif;
  }
`;

export default GlobalStyles;