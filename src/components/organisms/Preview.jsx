import React, { useCallback } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { convertMode, slideBarControl } from "../../modules/base";
import SlideBar from "../molecules/SlideBar.jsx";
import MainButton from "../molecules/MainButton.jsx";
import PreviewConvert from "../molecules/PreviewConvert";

const PreviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

function Preview() {
  const { text, slideBar } = useSelector(state => state.base);
  const { color } = useSelector(state => state.custom);
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
      <MainButton
        text={text}
        color={color}
        onSlideBarControl={onSlideBarControl}
      />
      <PreviewConvert onConvertMode={onConvertMode} />
    </PreviewWrapper>
  );
}

export default Preview;
