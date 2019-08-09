import React from 'react';
import styled from 'styled-components';
import media from '../../lib/utils/media';

const Base = styled.main`
  display: flex;
  flex-direction: row;
  overflow: hidden;
  height: 100vh;

  ${media.medium`
    flex-direction: column;
    height: auto;
  `}
`;
const Viewer = styled.article`
  width: 100%;
  height: 100vh;
`;
const Panel = styled.article`
  z-index: 200;
  position: relative;
  width: 80%;
  height: 100vh;
  background-color: #f1f2f6;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);

  ${media.medium`
    width: 100%;
    box-shadow: none;
  `}
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
