import React from 'react';
import styled from 'styled-components';
import { sad } from '../../assets/svg';
import CustomTemplate from '../../components/templates/CustomTemplate';
import Name from '../../components/atoms/Name';

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
    <CustomTemplate title="not found" icon={sad}>
      <StyledName>404</StyledName>
    </CustomTemplate>
  );
}

export default NotFound;
