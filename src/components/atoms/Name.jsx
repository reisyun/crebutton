import styled, { css } from 'styled-components';

const size = {
  small: 1,
  medium: 1.5,
  large: 2,
};

const Name = styled.strong`
  font-weight: 600;
  text-transform: uppercase;

  ${props =>
    props.fontSize &&
    css`
      font-size: ${size[props.fontSize]}rem;
    `}
`;

export default Name;
