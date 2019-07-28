import styled from 'styled-components';

const size = {
  small: 1,
  medium: 1.5,
  large: 2,
};

const Name = styled.strong`
  font-size: ${props => size[props.fontSize]}rem;
  font-weight: 600;
  text-transform: uppercase;
`;

export default Name;
