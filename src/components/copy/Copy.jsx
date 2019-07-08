import React from 'react';
import styled from 'styled-components';

const CopyBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: inherit;
`;
const CopyToClipboard = styled.span`
  cursor: pointer;
  user-select: none;
  transform: translateY(0);
  color: #fff;
  font-size: 5rem;
  font-weight: 700;
  text-transform: uppercase;
  text-shadow: 2px 4px 8px rgba(0, 0, 0, 0.3);
  transition-property: text-shadow, transform;
  transition-duration: 0.1s;

  &:active {
    transform: translateY(0.25rem);
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

function Copy() {
  return (
    <CopyBlock>
      <CopyToClipboard>copy</CopyToClipboard>
    </CopyBlock>
  );
}

export default Copy;
