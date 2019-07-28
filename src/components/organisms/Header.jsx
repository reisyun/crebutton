import React from 'react';
import styled from 'styled-components';
import Title from '../atoms/Title';
import Close from '../molecules/Close';
import TextInput from '../molecules/TextInput';

const HeaderBlock = styled.header`
  z-index: 200;
  position: sticky;
  top: 0;
  padding: 1rem 0;
  background-color: #f1f2f6;
`;

function Header({ title, text, onChangeText }) {
  return (
    <HeaderBlock>
      {title !== 'custom' && <Close />}
      <Title>{title}</Title>
      <TextInput text={text} onChangeText={onChangeText} />
    </HeaderBlock>
  );
}

export default Header;
