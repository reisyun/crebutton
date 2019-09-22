import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SourceCode from '../molecules/SourceCode';
import ResultConvert from '../molecules/ResultConvert';

const ResultWrapper = styled.section`
  overflow-y: auto;
  position: relative;
  margin-top: ${props => (props.done ? '0vh' : '-100vh')};
  height: inherit;
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

Result.propTypes = {
  done: PropTypes.bool.isRequired,
  onConvertMode: PropTypes.func.isRequired,
};

export default Result;
