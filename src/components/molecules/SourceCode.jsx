import React from 'react';
import styled from 'styled-components';
import Code from '../atoms/Code';

const SourceCodeBLlock = styled.pre`
  padding: 1.5rem;
  word-wrap: normal;
`;

function SourceCode() {
  return (
    <SourceCodeBLlock>
      <Code>{data}</Code>
    </SourceCodeBLlock>
  );
}

const data = `button {
  
}`;

export default SourceCode;
