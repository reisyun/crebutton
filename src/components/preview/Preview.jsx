import React from 'react';
import styled from 'styled-components';

const PreviewBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: inherit;
`;

function Preview({ children }) {
  return <PreviewBlock>{children}</PreviewBlock>;
}

export default Preview;
