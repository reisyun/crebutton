import React from 'react';
import styled from 'styled-components';

const ViewerTemplateBlock = styled.div`
  flex-grow: 7;
  position: relative;
  height: 100vh;
`;

function ViewerTemplate({ children }) {
  return <ViewerTemplateBlock>{children}</ViewerTemplateBlock>;
}

export default ViewerTemplate;
