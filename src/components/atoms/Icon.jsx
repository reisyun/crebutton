import PropTypes from 'prop-types';
import styled from 'styled-components';
import { sad } from '../../assets/svg';

const Icon = styled.img.attrs(({ icon }) => ({
  src: icon,
  alt: 'icon',
}))`
  width: ${props => props.size};
  height: ${props => props.size};
`;

Icon.propTypes = {
  icon: PropTypes.node.isRequired,
  size: PropTypes.string.isRequired,
};

Icon.defaultProps = {
  icon: sad,
  size: '1.5rem',
};

export default Icon;
