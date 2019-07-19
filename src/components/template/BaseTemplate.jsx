import React from 'react';
import styled from 'styled-components';

const BaseTemplateBlock = styled.main`
  display: flex;
  position: relative;
  overflow: hidden;
  height: 100vh;
`;

function BaseTemplate({ children }) {
  return <BaseTemplateBlock>{children}</BaseTemplateBlock>;
}

export default BaseTemplate;
