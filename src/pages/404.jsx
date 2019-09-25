import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Name from '../components/atoms/Name';
import Close from '../components/molecules/Close';

const StyledName = styled(Name)`
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 6rem;
  color: #353b48;
  font-weight: 700;
  font-family: Roboto, Helvetica, sans-serif;
  transform: translate(-50%, -50%);
`;

function NotFound() {
  return (
    <Layout>
      <Close />
      <StyledName>Not Found</StyledName>
    </Layout>
  );
}

export default NotFound;
