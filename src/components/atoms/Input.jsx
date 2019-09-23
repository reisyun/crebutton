import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = styled.input.attrs(({ value }) => ({
  value,
  type: 'text',
  placeholder: '버튼에 들어갈 값을 입력해주세요',
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
