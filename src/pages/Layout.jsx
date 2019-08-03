import React from 'react';
import BaseTemplate from '../components/templates/BaseTemplate';
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
          {custom}
        </React.Fragment>
      }
    />
  );
}

export default Layout;
