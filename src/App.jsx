import React from 'react';
import Main from './components/template/Main';
import Viewer from './components/template/Viewer';
import Panel from './components/template/Panel';

import Result from './components/result/Result';
import PreviewContainer from './containers/PreviewContainer';

import Copy from './components/copy/Copy';
import CustomContainer from './containers/CustomContainer';

function App() {
  return (
    <Main>
      <Viewer>
        <PreviewContainer />
        <Result />
      </Viewer>

      <Panel>
        <CustomContainer />
        <Copy />
      </Panel>
    </Main>
  );
}

export default App;
