import React from 'react';
import styled from 'styled-components';
import HeaderContainer from '../../containers/header/HeaderContainer';

const CustomBlock = styled.section`
  overflow-y: scroll;
  height: inherit;
`;
const Contents = styled.nav`
  position: relative;
  margin-top: 1rem;
  padding: 0 1.5rem;
`;

function Custom({ children }) {
  return (
    <CustomBlock>
      <HeaderContainer />
      <Contents>{children}</Contents>
    </CustomBlock>
  );
}

export default Custom;
