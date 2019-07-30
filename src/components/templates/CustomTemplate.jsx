import React from 'react';
import styled, { css } from 'styled-components';

const Custom = styled.section`
  overflow-y: auto;
  position: relative;
  height: inherit;
`;
const Content = styled.div`
  margin-top: 1.5rem;
  padding: 0 1.5rem;

  ${({ icon }) =>
    icon &&
    css`
      &::before {
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

function CustomTemplate({ children, header, icon }) {
  return (
    <Custom>
      {header}
      <Content icon={icon}>{children}</Content>
    </Custom>
  );
}

export default CustomTemplate;
