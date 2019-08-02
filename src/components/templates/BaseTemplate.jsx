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
    height: 200vh;
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

// const Resize = styled.span`
//   z-index: 999;
//   display: inline-block;
//   position: absolute;
//   width: 0.5rem;
//   height: 100vh;

//   &:hover {
//     cursor: w-resize;
//   }
// `;

// const panelRef = useRef();

// const handleResize = () => {
//   // Panel 비율 = Panel 폭 / Window 폭
//   const windowWidth = window.innerWidth;
//   const panelWidth = panelRef.current.clientWidth;
//   const panelRatio = (panelWidth / windowWidth) * 100;

//   console.log(panelRatio);
//   return panelRatio;
// };

export default BaseTemplate;
