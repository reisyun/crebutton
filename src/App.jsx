import React from 'react';

import MainTemplate from './components/template/MainTemplate';
import Preview from './components/preview/Preview';
import Done from './components/preview/Done';
import ButtonContainer from './containers/preview/ButtonContainer';
import SlideBarContainer from './containers/preview/SlideBarContainer';

import Custom from './components/custom/Custom';
import ContentList from './components/custom/ContentList';
import HeaderContainer from './containers/custom/HeaderContainer';

function App() {
  return (
    <MainTemplate>
      <MainTemplate.View>
        <Preview>
          <SlideBarContainer />
          <ButtonContainer />
          <Done />
        </Preview>
      </MainTemplate.View>

      <MainTemplate.Panel>
        <Custom>
          <HeaderContainer />
          <ContentList />
        </Custom>
      </MainTemplate.Panel>
    </MainTemplate>
  );
}

export default App;
