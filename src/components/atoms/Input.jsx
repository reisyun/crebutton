import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = styled.input.attrs(({ type, value, placeholder }) => ({
  type,
  value,
  placeholder,
}))`
  background: transparent;
  border: none;
  outline: none;
  box-shadow: none;
`;

Input.propTypes = {
  value: PropTypes.string.isRequired,
};

Input.defaultProps = {
  value: '',
};

export default Input;
