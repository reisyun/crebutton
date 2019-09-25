import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { convertMode } from '../modules/base';
import Result from '../components/organisms/Result';

function ResultContainer() {
  const { done } = useSelector(state => state.base);
  const dispatch = useDispatch();

  const onConvertMode = useCallback(
    () => dispatch(convertMode()),
    [dispatch]
  );

  return <Result done={done} onConvertMode={onConvertMode} />;
}

export default ResultContainer;
