import React from 'react';
import styled from 'styled-components';

const MainTemplateBlock = styled.div`
  display: flex;
  position: relative;
  overflow: hidden;
  height: 100vh;
`;

const View = styled.div`
  flex-grow: 7;
  position: relative;
  height: 100vh;
`;

const Panel = styled.div`
  flex-grow: 3;
  position: relative;
  height: 100vh;
  background-color: #f1f2f6;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

function MainTemplate({ children }) {
  return <MainTemplateBlock>{children}</MainTemplateBlock>;
}

MainTemplate.View = View;
MainTemplate.Panel = Panel;

export default MainTemplate;
