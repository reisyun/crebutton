import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeInput, pageTransition } from '../modules/base';
import Header from '../components/organisms/Header';

function HeaderContainer(props) {
  const { text } = useSelector(state => state.base);
  const dispatch = useDispatch();

  const onChangeText = useCallback(e => dispatch(changeInput(e.target.value)), [
    dispatch,
  ]);
  const onPageTransition = useCallback(() => dispatch(pageTransition()), [
    dispatch,
  ]);

  return (
    <Header
      text={text}
      title={props.title}
      onChangeText={onChangeText}
      onPageTransition={onPageTransition}
    />
  );
}

export default HeaderContainer;
