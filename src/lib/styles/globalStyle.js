import { createGlobalStyle } from 'styled-components';
import { reset } from './reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    box-sizing: border-box;
    user-select: none;

    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    color: inherit;
    text-decoration: inherit;
  }

  * {
    box-sizing: inherit;
  }
`;

export default GlobalStyle;
