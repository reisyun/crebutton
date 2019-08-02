import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { close } from '../../assets/svg';
import Icon from '../atoms/Icon';

const CloseBlock = styled.span`
  z-index: 200;
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
`;

function Close() {
  return (
    <CloseBlock>
      <Link to="/" replace>
        <Icon icon={close} size="1.5rem" />
      </Link>
    </CloseBlock>
  );
}

export default Close;
