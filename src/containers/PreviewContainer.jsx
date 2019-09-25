import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { convertMode, slideBarControl } from '../modules/base';
import Preview from '../components/organisms/Preview';

function PreviewContainer() {
  const { text, slideBar } = useSelector(state => state.base);
  const dispatch = useDispatch();

  const onConvertMode = useCallback(
    () => dispatch(convertMode()),
    [dispatch]
  );
  const onSlideBarControl = useCallback(
    () => dispatch(slideBarControl()),
    [dispatch]
  );

  return (
    <Preview
      text={text}
      slideBar={slideBar}
      onConvertMode={onConvertMode}
      onSlideBarControl={onSlideBarControl}
    />
  );
}

export default PreviewContainer;
