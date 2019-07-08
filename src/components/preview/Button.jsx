import React from 'react';
import styled from 'styled-components';

const MyButton = styled.button`
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

function Button({ text }) {
  return <MyButton>{text}</MyButton>;
}

export default Button;
