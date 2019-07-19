import React from 'react';
import styled from 'styled-components';
import { arrow } from '../../assets/images';
import { vertical } from '../../lib/keyframes.js';

const PreviewConvertBlock = styled.div`
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
const Name = styled.em`
  font-size: 1.5rem;
  font-weight: 500;
  text-transform: uppercase;
`;
const Icon = styled.img.attrs(props => ({
  src: props.svg,
}))`
  margin-left: 0.5rem;
  width: 1.5rem;
  height: 1.5rem;

  ${PreviewConvertBlock}:hover & {
    animation: ${vertical} 1s infinite;
  }
`;

function PreviewConvert({ onConvertMode }) {
  return (
    <PreviewConvertBlock onClick={onConvertMode}>
      <Name>Done</Name>
      <Icon svg={arrow} />
    </PreviewConvertBlock>
  );
}

export default PreviewConvert;
