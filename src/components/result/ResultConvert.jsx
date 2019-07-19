import React from 'react';
import styled from 'styled-components';
import { back } from '../../assets/images';
import { rotate } from '../../lib/keyframes.js';

const ResultConvertBlock = styled.div`
  z-index: 200;
  cursor: pointer;
  position: absolute;
  right: 1.5rem;
  bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5rem;
  height: 5rem;
  background-color: #fbc531;
  border-radius: 50%;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
`;
const Icon = styled.img.attrs(props => ({
  src: props.svg,
}))`
  width: 3rem;
  height: 3rem;

  ${ResultConvertBlock}:hover & {
    animation: ${rotate} 0.5s;
  }
`;

function ResultConvert({ onConvertMode }) {
  return (
    <ResultConvertBlock onClick={onConvertMode}>
      <Icon svg={back} />
    </ResultConvertBlock>
  );
}

export default ResultConvert;
