import React from 'react';
import styled from 'styled-components';

const TitleBlock = styled.h1`
  font-size: 2.25rem;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
`;

function Title({ title = 'custom' }) {
  return <TitleBlock>{title}</TitleBlock>;
}

export default Title;
