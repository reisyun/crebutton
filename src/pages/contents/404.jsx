import React from 'react';
import styled from 'styled-components';
import Name from '../../components/atoms/Name';
import Close from '../../components/molecules/Close';

const StyledName = styled(Name)`
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 8rem;
  color: #353b48;
  font-weight: 700;
  font-family: Roboto, Helvetica, sans-serif;
  transform: translate(-50%, -50%);
`;

function NotFound() {
  return (
    <React.Fragment>
      <Close />
      <StyledName>NotFound</StyledName>
    </React.Fragment>
  );
}

export default NotFound;
