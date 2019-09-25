import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import GlobalStyle from '../lib/styles/globalStyle';
import SEO from './SEO';
import BaseTemplate from './templates/BaseTemplate';
import ResultContainer from '../containers/ResultContainer';
import PreviewContainer from '../containers/PreviewContainer';
import CopyContainer from '../containers/CopyContainer';
import HeaderContainer from '../containers/HeaderContainer';

const Custom = styled.div`
  overflow-y: auto;
  height: inherit;
`;
const Container = styled.div`
  margin-top: 1.5rem;
  padding: 0 1.5rem;

  ${props =>
    props.icon &&
    css`
      &::before {
        content: '';
        opacity: 0.25;
        position: absolute;
        right: 1.5rem;
        bottom: 1.5rem;
        width: 15rem;
        height: 15rem;
        background-image: url('${props.icon}');
      }
    `}
`;

function Layout({ children, title, icon }) {
  return (
    <React.Fragment>
      <GlobalStyle />
      <SEO />
      <BaseTemplate
        viewer={
          <React.Fragment>
            <ResultContainer />
            <PreviewContainer />
          </React.Fragment>
        }
        panel={
          <React.Fragment>
            <CopyContainer />

            <Custom>
              {title && <HeaderContainer title={title} />}
              <Container icon={icon}>{children}</Container>
            </Custom>
          </React.Fragment>
        }
      />
    </React.Fragment>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
  header: PropTypes.element.isRequired,
  icon: PropTypes.string,
};

export default Layout;
