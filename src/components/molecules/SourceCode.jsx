import React from 'react';
import styled from 'styled-components';
import Code from '../atoms/Code';

const SourceCodeBLlock = styled.pre`
  padding: 1.5rem;
  word-wrap: normal;
  white-space: pre-line;
`;

function SourceCode() {
  return (
    <SourceCodeBLlock>
      <Code></Code>
    </SourceCodeBLlock>
  );
}

export default SourceCode;
