import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { changeInput } from '../../modules/base';
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

function Header(props) {
  const { text } = useSelector(state => state.base);
  const dispatch = useDispatch();

  const onChangeText = useCallback(
    e => {
      return dispatch(changeInput(e.target.value));
    },
    [dispatch]
  );

  return (
    <HeaderWrapper>
      <Title>{props.title}</Title>
      <TextInput text={text} onChangeText={onChangeText} />
      {props.title !== 'Custom' && <Close />}
    </HeaderWrapper>
  );
}

Header.propTypes = {
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  onPageTransition: PropTypes.func.isRequired,
};

export default Header;
