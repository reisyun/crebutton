import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
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

function Header({ text, title, onChangeText, onPageTransition }) {
  return (
    <HeaderWrapper>
      {title !== 'custom' && <Close onPageTransition={onPageTransition} />}
      <Title>{title}</Title>
      <TextInput text={text} onChangeText={onChangeText} />
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
