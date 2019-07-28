import styled from 'styled-components';

const Button = styled.button.attrs(({ disabled }) => ({
  disabled,
}))`
  all: unset;
  cursor: pointer;
`;

export default Button;
