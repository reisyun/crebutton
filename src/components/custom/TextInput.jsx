import React from 'react';
import styled from 'styled-components';

const TextInputBlock = styled.div`
  display: flex;
  margin: 0 1.5rem;
  padding-top: 1.5rem;
`;
const Input = styled.input.attrs({
  type: 'text',
  placeholder: '버튼에 들어갈 값을 입력해주세요.',
})`
  all: unset;
  padding: 0 0.75rem;
  width: 100%;
  height: 2.25rem;
  border-bottom: 4px solid #000;

  &:focus {
    border-bottom: 4px solid #489cea;
  }
`;

function TextInput({ text, onChange }) {
  return (
    <TextInputBlock>
      <Input value={text} onChange={onChange} />
    </TextInputBlock>
  );
}

export default TextInput;
