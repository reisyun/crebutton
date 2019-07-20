import React from 'react';
import styled from 'styled-components';
import SlideBar from '../molecules/SlideBar.jsx';
import MainButton from '../molecules/MainButton.jsx';
import PreviewConvert from '../molecules/PreviewConvert';

const PreviewWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: inherit;
`;

function Preview({ text, slideBar, onConvertMode, onSlideBarControl }) {
  return (
    <PreviewWrapper>
      <SlideBar slideBar={slideBar} />
      <MainButton text={text} onSlideBarControl={onSlideBarControl} />
      <PreviewConvert onConvertMode={onConvertMode} />
    </PreviewWrapper>
  );
}

export default Preview;
