import React from 'react';
import MainTemplate from './components/MainTemplate';
import PreviewContainer from './containers/PreviewContainer';
import CopyContainer from './containers/CopyContainer';
import CustomContainer from './containers/CustomContainer';
import ResultContainer from './containers/ResultContainer';

function App() {
  return (
    <MainTemplate>
      <MainTemplate.View>
        <PreviewContainer />
        <ResultContainer />
      </MainTemplate.View>

      <MainTemplate.Panel>
        <CustomContainer />
        <CopyContainer />
      </MainTemplate.Panel>
    </MainTemplate>
  );
}

export default App;
