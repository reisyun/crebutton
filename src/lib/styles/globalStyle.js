import { createGlobalStyle } from 'styled-components';
import { reset } from './reset';
import { pageTransition } from './pageTransition';

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${pageTransition}
  
  body {
    box-sizing: border-box;
    user-select: none;
    color: #212121;

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
