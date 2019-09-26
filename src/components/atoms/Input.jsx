import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = styled.input.attrs(({ type, value, placeholder }) => ({
  type,
  value,
  placeholder,
}))`
  all: unset;
`;

Input.propTypes = {
  value: PropTypes.string.isRequired,
};

Input.defaultProps = {
  value: '',
};

export default Input;
