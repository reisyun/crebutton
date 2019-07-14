import React from 'react';
import styled from 'styled-components';
import CopyClipboard from './CopyClipboard';

const CopyBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: inherit;
`;

function Copy() {
  return (
    <CopyBlock>
      <CopyClipboard />
    </CopyBlock>
  );
}

export default Copy;
