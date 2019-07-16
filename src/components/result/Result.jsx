import React from 'react';
import styled from 'styled-components';
import ResultSourceCode from './ResultSourceCode';

const ResultBlock = styled.div`
  position: relative;
  margin-top: ${props => (props.done ? '0vh' : '-100vh')};
  height: inherit;
  background-color: #2f3542;
  transition: margin-top 0.5s ease-in-out;
`;

function Result({ done }) {
  return (
    <ResultBlock done={done}>
      <ResultSourceCode />
    </ResultBlock>
  );
}

export default Result;
