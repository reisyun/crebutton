import React from 'react';
import styled from 'styled-components';
import SourceCode from './SourceCode';

const ResultBlock = styled.div`
  position: relative;
  height: 100vh;
  background-color: #2f3542;
`;

function Result() {
  return (
    <ResultBlock>
      <SourceCode />
    </ResultBlock>
  );
}

export default Result;
