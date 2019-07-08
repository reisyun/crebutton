import React from 'react';
import styled from 'styled-components';

const CustomBlock = styled.section`
  overflow-y: scroll;
  height: inherit;
`;

function Custom({ children }) {
  return <CustomBlock>{children}</CustomBlock>;
}

export default Custom;
