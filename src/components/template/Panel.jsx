import React from 'react';
import styled from 'styled-components';

const PanelTemplate = styled.div`
  flex-grow: 3;
  position: relative;
  height: 100vh;
  background-color: #f1f2f6;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

function Panel({ children }) {
  return <PanelTemplate>{children}</PanelTemplate>;
}

export default Panel;
