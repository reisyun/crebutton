import React, { Fragment } from 'react';
import styled from 'styled-components';
import Icon from '../atoms/Icon';
import Close from '../molecules/Close';

const StyledIcon = styled(Icon)`
  opacity: 0.25;
  position: absolute;
  right: 1.5rem;
  bottom: 1.5rem;
`;

function CotentTemplate({ children, icon }) {
  return (
    <Fragment>
      <Close />
      {children}
      <StyledIcon icon={icon} size="15rem" />
    </Fragment>
  );
}

export default CotentTemplate;
