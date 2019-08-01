import React, { Fragment } from 'react';
import BaseTemplate from '../components/templates/BaseTemplate';
import Result from '../components/organisms/Result';
import Preview from '../components/organisms/Preview';
import Copy from '../components/organisms/Copy';

function Layout({ custom }) {
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
          {custom}
        </Fragment>
      }
    />
  );
}

export default Layout;
