import React from 'react';
import styled from 'styled-components';
import Store from '../../stores';
import useStore from '../../lib/hooks/useStore';
import SlideBar from '../molecules/SlideBar.jsx';
import MainButton from '../molecules/MainButton.jsx';
import PreviewConvert from '../molecules/PreviewConvert';

const PreviewWrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

function Preview() {
  const { base } = useStore(Store);

  return (
    <Store.Consumer>
      {() => (
        <PreviewWrapper>
          <SlideBar slideBar={base.slideBar} />
          <MainButton
            text={base.text}
            color={base.color}
            onSlideBarControl={base.onSlideBarControl}
          />
          <PreviewConvert onConvertMode={base.onConvertMode} />
        </PreviewWrapper>
      )}
    </Store.Consumer>
  );
}

export default Preview;
