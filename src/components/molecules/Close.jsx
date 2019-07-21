import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { close } from '../../assets/svg';
import Icon from '../atoms/Icon';

const StyledIcon = styled(Icon)`
  z-index: 200;
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
`;

const Close = () => (
  <Link to="/" replace>
    <StyledIcon icon={close} size="1.5rem" />
  </Link>
);

export default Close;
