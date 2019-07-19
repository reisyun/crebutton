import React from 'react';
import styled from 'styled-components';
import { close } from '../../assets/images';

const HeaderCloseBlock = styled.img.attrs(props => ({
  src: props.svg,
}))`
  position: absolute;
  top: 24px;
  right: 24px;
  width: 1.5rem;
  height: 1.5rem;
`;

function HeaderClose() {
  return <HeaderCloseBlock svg={close} />;
}

export default HeaderClose;
