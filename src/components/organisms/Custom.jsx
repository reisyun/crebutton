import React from 'react';
import styled from 'styled-components';
import Header from '../molecules/Header';

const CustomWrapper = styled.section`
  overflow-y: scroll;
  height: inherit;
`;
const Contents = styled.nav`
  position: relative;
  margin-top: 1rem;
  padding: 0 1.5rem;
`;

function Custom({ children, text, onChangeText }) {
  return (
    <CustomWrapper>
      <Header text={text} onChangeText={onChangeText} />
      <Contents>{children}</Contents>
    </CustomWrapper>
  );
}

export default Custom;
