import React from 'react';
import PropTypes from 'prop-types';
import BaseTemplate from '../components/templates/BaseTemplate';
import PageTransition from '../components/PageTransition';
import Result from '../components/organisms/Result';
import Preview from '../components/organisms/Preview';
import Copy from '../components/organisms/Copy';

function Layout({ custom }) {
  return (
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
          <PageTransition>{custom}</PageTransition>
        </React.Fragment>
      }
    />
  );
}

Layout.propTypes = {
  custom: PropTypes.element.isRequired,
};

export default Layout;
