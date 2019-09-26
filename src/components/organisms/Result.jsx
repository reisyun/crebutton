import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { convertMode } from '../../modules/base';
import SourceCode from '../molecules/SourceCode';
import ResultConvert from '../molecules/ResultConvert';

const ResultWrapper = styled.div`
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

Result.propTypes = {
  done: PropTypes.bool.isRequired,
  onConvertMode: PropTypes.func.isRequired,
};

export default Result;
