import React from 'react';
import styled from 'styled-components';
import ResultSourceCode from './ResultSourceCode';

const ResultBlock = styled.div`
  position: relative;
  height: 100vh;
  background-color: #2f3542;
`;

function Result() {
  return (
    <ResultBlock>
      <ResultSourceCode />
    </ResultBlock>
  );
}

export default Result;
