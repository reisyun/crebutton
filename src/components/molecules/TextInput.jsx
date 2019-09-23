import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from '../atoms/Input';

const TextInputBlock = styled(Input)`
  margin: 2rem 1.5rem 0;
  padding: 0 0.5rem;
  width: calc(100% - 4rem);
  height: 2.5rem;
  border-bottom: 0.25rem solid #000;

  &:focus {
    border-bottom: 0.25rem solid #489cea;
  }
`;

function TextInput({ text, onChangeText }) {
  return <TextInputBlock value={text} onChange={onChangeText} />;
}

TextInput.propTypes = {
  text: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
};

export default TextInput;
