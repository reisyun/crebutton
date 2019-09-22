import React from 'react';
import PropTypes from 'prop-types';
import BaseTemplate from '../components/templates/BaseTemplate';
import PageTransition from '../containers/PageTransition';
import ResultContainer from '../containers/ResultContainer';
import PreviewContainer from '../containers/PreviewContainer';
import CopyContainer from '../containers/CopyContainer';

function Layout({ custom }) {
  return (
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
