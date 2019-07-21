import styled from 'styled-components';

const Icon = styled.img.attrs(({ icon }) => ({
  src: icon,
}))`
  width: ${props => props.size};
  height: ${props => props.size};
`;

export default Icon;
