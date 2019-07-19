import React from 'react';
import styled from 'styled-components';
import HeaderTitle from './HeaderTitle';
import HeaderTextInput from './HeaderTextInput';
import HeaderClose from './HeaderClose';

const HeaderBlock = styled.header`
  z-index: 200;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  padding: 1rem 0;
  background-color: #f1f2f6;
`;

function Header({ text, onChangeText }) {
  return (
    <HeaderBlock>
      <HeaderTitle />
      <HeaderTextInput text={text} onChangeText={onChangeText} />
      <HeaderClose />
    </HeaderBlock>
  );
}

export default Header;
