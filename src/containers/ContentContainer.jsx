import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { pageTransition } from '../modules/base';
import Content from '../components/organisms/Content';

function ContentContainer() {
  const dispatch = useDispatch();

  const onPageTransition = useCallback(
    () => dispatch(pageTransition()),
    [dispatch]
  );

  return <Content onPageTransition={onPageTransition} />;
}

export default ContentContainer;
