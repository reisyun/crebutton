import React from 'react';
import BaseTemplate from '../components/template/BaseTemplate';
import ViewerTemplate from '../components/template/ViewerTemplate';
import PanelTemplate from '../components/template/PanelTemplate';

import ResultContainer from '../containers/result/ResultContainer';
import PreviewContainer from '../containers/preview/PreviewContainer';

import CopyContainer from '../containers/copy/CopyContainer';
import Custom from '../components/custom/Custom';

function Layout({ children }) {
  return (
    <BaseTemplate>
      <ViewerTemplate>
        <ResultContainer />
        <PreviewContainer />
      </ViewerTemplate>

      <PanelTemplate>
        <CopyContainer />
        <Custom>{children}</Custom>
      </PanelTemplate>
    </BaseTemplate>
  );
}

export default Layout;
