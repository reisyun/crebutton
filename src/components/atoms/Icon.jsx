import styled from 'styled-components';

const Icon = styled.img.attrs(({ icon }) => ({
  src: icon,
}))`
  width: ${props => props.size}rem;
  height: ${props => props.size}rem;
`;

export default Icon;
