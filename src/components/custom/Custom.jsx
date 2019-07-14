import React from 'react';
import styled from 'styled-components';
import CustomContent from './CustomContent';
import HeaderContainer from '../../containers/HeaderContainer';

const CustomBlock = styled.section`
  overflow-y: scroll;
  height: inherit;
`;

function Custom({ text, onChangeText }) {
  return (
    <CustomBlock>
      <HeaderContainer />
      <CustomContent />
    </CustomBlock>
  );
}

export default Custom;
