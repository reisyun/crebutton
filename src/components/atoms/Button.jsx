import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button.attrs(({ disabled }) => ({
  type: 'button',
  disabled,
}))`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
`;

Button.propTypes = {
  disabled: PropTypes.bool.isRequired,
};

Button.defaultProps = {
  disabled: false,
};

export default Button;
