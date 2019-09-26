import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
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
      <AniLink fade to="/">
        <Icon icon={close} size="1.5rem" />
      </AniLink>
    </CloseBlock>
  );
}

Close.propTypes = {
  onPageTransition: PropTypes.func,
};

export default Close;
