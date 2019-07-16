import React from 'react';
import BaseTemplate from '../components/template/BaseTemplate';
import ViewerTemplate from '../components/template/ViewerTemplate';
import PanelTemplate from '../components/template/PanelTemplate';

import ResultContainer from '../containers/result/ResultContainer';
import PreviewContainer from '../containers/preview/PreviewContainer';

import Copy from '../components/copy/Copy';
import Custom from '../components/custom/Custom';

function Layout({ children }) {
  return (
    <BaseTemplate>
      <ViewerTemplate>
        <ResultContainer />
        <PreviewContainer />
      </ViewerTemplate>

      <PanelTemplate>
        <Custom>{children}</Custom>
        <Copy />
      </PanelTemplate>
    </BaseTemplate>
  );
}

export default Layout;
