import styled from 'styled-components';

const Input = styled.input.attrs(({ text }) => ({
  type: 'text',
  value: text,
  placeholder: '버튼에 들어갈 값을 입력해주세요',
}))`
  all: unset;
  margin: 1.5rem 1.5rem 0;
  padding: 0 0.5rem;
  width: calc(100% - 4rem);
  height: 2.5rem;
  border-bottom: 4px solid #000;

  &:focus {
    border-bottom: 4px solid #489cea;
  }
`;
export default Input;
