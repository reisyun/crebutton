import React from 'react';
import styled from 'styled-components';
import CopyToClipboard from './CopyToClipboard';

const CopyBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: inherit;
`;

function Copy() {
  return (
    <CopyBlock>
      <CopyToClipboard />
    </CopyBlock>
  );
}

export default Copy;
