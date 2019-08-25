import React, { useCallback } from 'react';
import styled from 'styled-components';
import useDisabled from '../../lib/hooks/useDisabled';
import Button from '../atoms/Button';

const MainButtonBlock = styled(Button)`
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 17.5rem;
  height: 5rem;
  border-radius: 2.5rem;
  background-color: #489cea;
  color: #fff;
  font-size: 2rem;
  font-weight: 500;
  word-wrap: break-word;
  word-break: break-all;
  transform: scale(1);
  transition: transform 0.2s;
  &:active {
    transform: scale(0.9);
  }
`;

function MainButton({ text, onSlideBarControl }) {
  const [disabled, onDisabled] = useDisabled(4 * 200);

  const handleClick = useCallback(() => {
    onDisabled();
    onSlideBarControl && onSlideBarControl();
  }, [onDisabled, onSlideBarControl]);

  return (
    <MainButtonBlock disabled={disabled} onClick={handleClick}>
      {text ? text : 'Click this'}
    </MainButtonBlock>
  );
}

export default MainButton
