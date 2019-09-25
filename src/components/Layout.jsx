import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import GlobalStyle from '../lib/styles/globalStyle';
import SEO from './SEO';
import BaseTemplate from './templates/BaseTemplate';
import Result from './organisms/Result';
import Preview from './organisms/Preview';
import Copy from './organisms/Copy';
import Header from './organisms/Header';

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
            <Result />
            <Preview />
          </React.Fragment>
        }
        panel={
          <React.Fragment>
            <Copy />

            <Custom>
              {title && <Header title={title} />}
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
