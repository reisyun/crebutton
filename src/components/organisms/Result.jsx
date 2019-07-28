import React from 'react';
import styled from 'styled-components';
import SourceCode from '../atoms/SourceCode';
import ResultConvert from '../molecules/ResultConvert';

const ResultWrapper = styled.section`
  position: relative;
  margin-top: ${props => (props.done ? '0vh' : '-100vh')};
  height: 100vh;
  background-color: #2f3542;
  transition: margin-top 0.5s ease-in-out;
`;

function Result({ done, onConvertMode }) {
  return (
    <ResultWrapper done={done}>
      <SourceCode />
      <ResultConvert onConvertMode={onConvertMode} />
    </ResultWrapper>
  );
}

export default Result;
