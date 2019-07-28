import styled from 'styled-components';

const Input = styled.input.attrs(({ type, value, placeholder }) => ({
  type,
  value,
  placeholder,
}))`
  all: unset;
`;

export default Input;
