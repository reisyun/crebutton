import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { convertMode } from '../../modules/base';
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

function Result() {
  const { done } = useSelector(state => state.base);
  const dispatch = useDispatch();

  const onConvertMode = useCallback(() => {
    return dispatch(convertMode());
  }, [dispatch]);

  return (
    <ResultWrapper done={done}>
      <SourceCode />
      <ResultConvert onConvertMode={onConvertMode} />
    </ResultWrapper>
  );
}

export default Result;
