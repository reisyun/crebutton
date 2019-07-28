import React from 'react';
import BaseTemplate from '../components/templates/BaseTemplate';
import ResultContainer from '../containers/ResultContainer';
import PreviewContainer from '../containers/PreviewContainer';
import CopyContainer from '../containers/CopyContainer';

const { Fragment } = React;
function Layout({ children }) {
  return (
    <BaseTemplate
      viewer={
        <Fragment>
          <ResultContainer />
          <PreviewContainer />
        </Fragment>
      }
      panel={
        <Fragment>
          <CopyContainer />
          {children}
        </Fragment>
      }
    />
  );
}

export default Layout;
