import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button.attrs(({ disabled }) => ({
  type: 'button',
  disabled,
}))`
  all: unset;
  cursor: pointer;
`;

Button.propTypes = {
  disabled: PropTypes.bool.isRequired,
};

Button.defaultProps = {
  disabled: false,
};

export default Button;
