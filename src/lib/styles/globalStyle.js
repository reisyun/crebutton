import { createGlobalStyle } from 'styled-components';
import { reset } from './reset';
import { typography } from './typography';
import { pageTransition } from './pageTransition';

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${typography}
  ${pageTransition}
  
  body {
    box-sizing: border-box;
    user-select: none;
    color: #212121;
    font-family: 'Cabin', sans-serif;
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
