import React from 'react';
import BaseTemplate from '../components/templates/BaseTemplate';
import ViewerTemplate from '../components/templates/ViewerTemplate';
import PanelTemplate from '../components/templates/PanelTemplate';

import ResultContainer from '../containers/ResultContainer';
import PreviewContainer from '../containers/PreviewContainer';

import CopyContainer from '../containers/CopyContainer';
import CustomContainer from '../containers/CustomContainer';

function Layout({ children }) {
  return (
    <BaseTemplate>
      <ViewerTemplate>
        <ResultContainer />
        <PreviewContainer />
      </ViewerTemplate>

      <PanelTemplate>
        <CopyContainer />
        <CustomContainer>{children}</CustomContainer>
      </PanelTemplate>
    </BaseTemplate>
  );
}

export default Layout;
