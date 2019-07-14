import React from 'react';
import styled from 'styled-components';

const MainTemplate = styled.div`
  display: flex;
  position: relative;
  overflow: hidden;
  height: 100vh;
`;

function Main({ children }) {
  return <MainTemplate>{children}</MainTemplate>;
}

export default Main;
