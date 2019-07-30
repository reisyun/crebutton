import React, { Fragment } from 'react';
import BaseTemplate from '../components/templates/BaseTemplate';
import Result from '../components/organisms/Result';
import Preview from '../components/organisms/Preview';
import Copy from '../components/organisms/Copy';

function Layout({ children }) {
  return (
    <BaseTemplate
      viewer={
        <Fragment>
          <Result />
          <Preview />
        </Fragment>
      }
      panel={
        <Fragment>
          <Copy />
          {children}
        </Fragment>
      }
    />
  );
}

export default Layout;
