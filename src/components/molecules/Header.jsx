import React from 'react';
import styled from 'styled-components';
import Title from '../atoms/Title';
import Input from '../atoms/Input';

const HeaderBlock = styled.div`
  z-index: 200;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  padding: 1rem 0;
  background-color: #f1f2f6;
`;

function Header({ title, text, onChangeText }) {
  return (
    <HeaderBlock>
      <Title>{title ? title : 'custom'}</Title>
      <Input text={text} onChange={onChangeText} />
    </HeaderBlock>
  );
}

export default Header;
