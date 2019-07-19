import React from 'react';
import styled from 'styled-components';

const PanelTemplateBlock = styled.article`
  flex-grow: 3;
  position: relative;
  height: 100vh;
  background-color: #f1f2f6;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

function PanelTemplate({ children }) {
  return <PanelTemplateBlock>{children}</PanelTemplateBlock>;
}

export default PanelTemplate;
