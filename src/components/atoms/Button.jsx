import styled from 'styled-components';

const Button = styled.button.attrs(({ disabled }) => ({
  type: 'button',
  disabled,
}))`
  all: unset;
  cursor: pointer;
`;

export default Button;
