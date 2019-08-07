import { css } from 'styled-components';

const timeout = 400;

export const pageTransition = css`
  .custom-enter,
  .custom-exit {
    opacity: 0;
    transform: scale(0.95);
  }
  .custom-enter-active,
  .custom-exit-active {
    opacity: 1;
    transform: scale(1);
    transition-property: opacity, transform;
    transition-duration: ${timeout}ms, ${timeout}ms;
  }
`;
