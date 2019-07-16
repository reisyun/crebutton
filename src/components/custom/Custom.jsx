import React from 'react';
import styled from 'styled-components';
import HeaderContainer from '../../containers/header/HeaderContainer';

const CustomBlock = styled.section`
  overflow-y: scroll;
  height: inherit;
`;
const CustomContents = styled.nav`
  position: relative;
  margin-top: 1rem;
  padding: 0 1.5rem;
`;

function Custom({ children }) {
  return (
    <CustomBlock>
      <HeaderContainer />
      <CustomContents>{children}</CustomContents>
    </CustomBlock>
  );
}

export default Custom;
