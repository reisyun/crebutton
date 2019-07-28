import React from 'react';
import styled, { css } from 'styled-components';

const Custom = styled.section`
  overflow-y: auto;
  position: relative;
  height: inherit;

  ${({ icon }) =>
    icon &&
    css`
      &::after {
        content: '';
        opacity: 0.25;
        position: absolute;
        right: 1.5rem;
        bottom: 1.5rem;
        width: 15rem;
        height: 15rem;
        background-image: url('${icon}');
      }
    `}
`;
const Content = styled.div`
  margin-top: 1.5rem;
  padding: 0 1.5rem;
`;

function CustomTemplate({ children, header, icon }) {
  return (
    <Custom icon={icon}>
      {header}
      <Content>{children}</Content>
    </Custom>
  );
}

export default CustomTemplate;
