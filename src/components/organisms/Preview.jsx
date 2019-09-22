import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
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

function Preview({ text, slideBar, onConvertMode, onSlideBarControl }) {
  return (
    <PreviewWrapper>
      <SlideBar slideBar={slideBar} />
      <MainButton text={text} onSlideBarControl={onSlideBarControl} />
      <PreviewConvert onConvertMode={onConvertMode} />
    </PreviewWrapper>
  );
}

Preview.propTypes = {
  text: PropTypes.string.isRequired,
  slideBar: PropTypes.bool.isRequired,
  onConvertMode: PropTypes.func.isRequired,
  onSlideBarControl: PropTypes.func.isRequired,
};

export default Preview;
