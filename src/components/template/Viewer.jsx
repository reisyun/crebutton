import React from 'react';
import styled from 'styled-components';

const ViewerTemplate = styled.div`
  flex-grow: 7;
  position: relative;
  height: 100vh;
`;

function Viewer({ children }) {
  return <ViewerTemplate>{children}</ViewerTemplate>;
}

export default Viewer;
