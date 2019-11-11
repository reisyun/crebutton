import { css } from 'styled-components';

const duration = 400;

export const pageTransition = css`
  .custom-enter,
  .custom-exit {
    opacity: 0;
    transform: scale(0.98);
  }
  .custom-enter-active,
  .custom-exit-active {
    opacity: 1;
    transform: scale(1);
    transition-property: opacity, transform;
    transition-duration: ${duration}ms, ${duration}ms;
  }
`;
