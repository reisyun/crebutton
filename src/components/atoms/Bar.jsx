import styled, { css } from 'styled-components';

const Bar = styled.div`
  ${({ slideBar, count }) => css`
    flex-grow: 1;
    height: 100vh;
    background-color: #2f3542;
    transform: scaleY(${slideBar ? 1 : 0});
    transform-origin: top;
    transition: transform 0.3s ease-in-out;
    transition-delay: ${count * 0.1}s;
  `}
`;

export default Bar;
