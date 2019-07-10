import React from 'react';
import styled from 'styled-components';

const MyButton = styled.button.attrs(props => ({
  disabled: props.disabled,
}))`
  all: unset;
  z-index: 200;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 17.5rem;
  height: 5rem;

  color: #fff;
  font-size: 2rem;
  font-weight: 500;

  border-radius: 2.5rem;
  background-color: #489cea;
  transform: scale(1);
  transition: transform 0.2s;

  &:active {
    transform: scale(0.9);
  }
`;

const { useState } = React;

function Button({ text, onSlideBarControl }) {
  // Prevent duplicate clicks
  const [disabled, setDisabled] = useState(false);

  const duplicateClicks = () => {
    !disabled && setDisabled(true);
    setTimeout(() => {
      setDisabled(false);
    }, 700);
  };

  return (
    <MyButton
      disabled={disabled}
      onClick={() => duplicateClicks() || onSlideBarControl()}>
      {text ? text : 'Click this'}
    </MyButton>
  );
}

export default Button;
