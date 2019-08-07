import React from 'react';
import styled from 'styled-components';
import Name from '../../components/atoms/Name';
import Close from '../../components/molecules/Close';

const StyledName = styled(Name)`
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 6rem;
  font-weight: 700;
  transform: translate(-50%, -50%);
`;

function NotFound() {
  return (
    <React.Fragment>
      <Close />
      <StyledName>Not Found</StyledName>
    </React.Fragment>
  );
}

export default NotFound;
