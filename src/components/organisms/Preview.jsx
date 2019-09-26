import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { convertMode, slideBarControl } from '../../modules/base';
import SlideBar from '../molecules/SlideBar.jsx';
import MainButton from '../molecules/MainButton.jsx';
import PreviewConvert from '../molecules/PreviewConvert';

const PreviewWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

function Preview() {
  const { text, slideBar } = useSelector(state => state.base);
  const dispatch = useDispatch();

  const onConvertMode = useCallback(() => {
    return dispatch(convertMode());
  }, [dispatch]);
  const onSlideBarControl = useCallback(() => {
    return dispatch(slideBarControl());
  }, [dispatch]);

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
