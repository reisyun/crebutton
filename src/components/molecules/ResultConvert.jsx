import React from 'react';
import styled, { keyframes } from 'styled-components';
import media from '../../lib/utils/media';
import { back } from '../../assets/svg';
import Convert from '../atoms/Convert';
import Icon from '../atoms/Icon';

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(-360deg); }
`;
const ResultConvertBlock = styled(Convert)`
  position: absolute;
  right: 1.5rem;
  bottom: 1.5rem;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
`;
const StyledIcon = styled(Icon)`
  ${ResultConvertBlock}:hover & {
    animation: ${rotate} 0.5s;

    ${media.medium`
      animation: none;
    `}
  }
`;

function ResultConvert({ onConvertMode }) {
  return (
    <ResultConvertBlock onClick={onConvertMode}>
      <StyledIcon icon={back} size="3rem" />
    </ResultConvertBlock>
  );
}

export default ResultConvert;
