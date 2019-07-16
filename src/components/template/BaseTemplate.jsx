import React from 'react';
import styled from 'styled-components';

const BaseTemplateBlock = styled.div`
  display: flex;
  position: relative;
  overflow: hidden;
  height: 100vh;
`;

function BaseTemplate({ children }) {
  return <BaseTemplateBlock>{children}</BaseTemplateBlock>;
}

export default BaseTemplate;
