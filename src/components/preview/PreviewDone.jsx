import React from 'react';
import styled from 'styled-components';
import doneSVG from '../../assets/images/done.svg';
import { vertical } from '../../lib/keyframes.js';

const PreviewDoneBlock = styled.div`
  z-index: 200;
  cursor: pointer;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 0;
  background-color: #fbc531;
`;
const DoneName = styled.strong`
  font-size: 1.5rem;
  font-weight: 500;
  text-transform: uppercase;
`;
const DoneIcon = styled.img.attrs(props => ({
  src: props.svg,
}))`
  margin-left: 0.5rem;
  width: 1.5rem;
  height: 1.5rem;

  ${PreviewDoneBlock}:hover & {
    animation: ${vertical} 1s infinite;
  }
`;

function PreviewDone() {
  return (
    <PreviewDoneBlock>
      <DoneName>Done</DoneName>
      <DoneIcon svg={doneSVG} />
    </PreviewDoneBlock>
  );
}

export default PreviewDone;
