import React from 'react';
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

export default Header;
