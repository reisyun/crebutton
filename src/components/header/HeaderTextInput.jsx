import React from 'react';
import styled from 'styled-components';

const TextInputBlock = styled.div`
  display: flex;
  margin: 0 1.5rem;
  padding-top: 1.5rem;
`;
const Input = styled.input.attrs({
  type: 'text',
  placeholder: '버튼에 들어갈 값을 입력해주세요',
})`
  all: unset;
  padding: 0 0.5rem;
  width: 100%;
  height: 2.25rem;
  border-bottom: 4px solid #000;

  &:focus {
    border-bottom: 4px solid #489cea;
  }
`;

function TextInput({ text, onChangeText }) {
  return (
    <TextInputBlock>
      <Input value={text} onChange={onChangeText} />
    </TextInputBlock>
  );
}

export default TextInput;
