import React from 'react';
import styled from 'styled-components';

const Base = styled.main`
  display: flex;
  position: relative;
  overflow: hidden;
  height: 100vh;
`;
const Viewer = styled.article`
  flex-grow: 7;
  position: relative;
  height: 100vh;
`;
const Panel = styled.article`
  flex-grow: 3;
  position: relative;
  height: 100vh;
  background-color: #f1f2f6;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

function BaseTemplate({ viewer, panel }) {
  return (
    <Base>
      <Viewer>{viewer}</Viewer>
      <Panel>{panel}</Panel>
    </Base>
  );
}

export default BaseTemplate;
