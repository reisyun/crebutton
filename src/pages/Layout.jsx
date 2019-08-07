import React from 'react';
import BaseTemplate from '../components/templates/BaseTemplate';
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
          {custom}
        </React.Fragment>
      }
    />
  );
}

export default Layout;
