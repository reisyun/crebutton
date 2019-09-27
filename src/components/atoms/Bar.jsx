import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Bar = styled.span`
  ${({ slideBar, count }) => css`
    flex-grow: 1;
    height: 100vh;
    background-color: #2f3542;
    transform: scaleY(${slideBar ? 1 : 0});
    transform-origin: top;
    transition: transform 0.3s ease-in-out;
    transition-delay: ${count * 0.1}s;
  `}
`;

Bar.propTypes = {
  slideBar: PropTypes.bool.isRequired,
  count: PropTypes.number.isRequired,
};

Bar.defaultProps = {
  slideBar: false,
  count: 4,
};

export default Bar;
