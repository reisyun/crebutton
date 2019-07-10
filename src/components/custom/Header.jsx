import React from 'react';
import styled from 'styled-components';

const HeaderBlock = styled.header`
  z-index: 200;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  padding: 1rem 0;
  background-color: #f1f2f6;
`;

function Header({ children }) {
  return <HeaderBlock>{children}</HeaderBlock>;
}

export default Header;
