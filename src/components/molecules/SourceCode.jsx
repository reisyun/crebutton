import React from 'react';
import styled from 'styled-components';
import Code from '../atoms/Code';
import parse from 'html-react-parser';

const SourceCodeBLlock = styled.pre`
  padding: 1.5rem;
  word-wrap: normal;
  white-space: pre-line;
`;

function SourceCode() {
  return (
    <SourceCodeBLlock>
      <Code>{parse('<span>button</span>')}</Code>
    </SourceCodeBLlock>
  );
}

export default SourceCode;
