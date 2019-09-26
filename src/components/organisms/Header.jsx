import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { changeInput, pageTransition } from '../../modules/base';
import Title from '../atoms/Title';
import Close from '../molecules/Close';
import TextInput from '../molecules/TextInput';

const HeaderWrapper = styled.header`
  z-index: 200;
  position: sticky;
  top: 0;
  padding: 1rem 0;
  background-color: #f1f2f6;
`;

function Header({ title }) {
  const { text } = useSelector(state => state.base);
  const dispatch = useDispatch();

  const onChangeText = useCallback(event => {
    return dispatch(changeInput(event.target.value));
  }, [dispatch]);

  const onPageTransition = useCallback(() => {
    return dispatch(pageTransition());
  }, [dispatch]);

  return (
    <HeaderWrapper>
      {title !== 'custom' && <Close onPageTransition={onPageTransition} />}
      <Title>{title}</Title>
      <TextInput text={text} onChangeText={onChangeText} />
    </HeaderWrapper>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
