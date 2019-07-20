import React from 'react';
import styled from 'styled-components';
import Button from '../atoms/Button';

const MainButtonBlock = styled(Button).attrs(props => ({
  disabled: props.disabled,
}))`
  z-index: 200;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 17.5rem;
  height: 5rem;

  color: #fff;
  font-size: 2rem;
  font-weight: 500;
  word-wrap: break-word;
  word-break: break-all;

  border-radius: 2.5rem;
  background-color: #489cea;
  transform: scale(1);
  transition: transform 0.2s;

  &:active {
    transform: scale(0.9);
  }
`;

const { useState } = React;

function MainButton({ text, onSlideBarControl }) {
  const [disabled, setDisabled] = useState(false);

  // 중복 클릭 방지
  const _duplicateClicks = () => {
    !disabled && setDisabled(true);
    setTimeout(() => {
      setDisabled(false);
    }, 700);
  };

  return (
    <MainButtonBlock
      disabled={disabled}
      onClick={() => onSlideBarControl() || _duplicateClicks()}>
      {text ? text : 'Click this'}
    </MainButtonBlock>
  );
}

export default MainButton;
