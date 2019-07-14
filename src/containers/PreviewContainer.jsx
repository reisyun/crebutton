import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as customActions from '../modules/custom';
import Preview from '../components/preview/Preview';

function PreviewContainer({ text, slideBar, ActiveSlideBar }) {
  const onSlideBarControl = () => {
    const slideBarState = slideBar ? false : true;
    ActiveSlideBar.activeSlideBar(slideBarState);
  };
  return (
    <Preview
      text={text}
      slideBar={slideBar}
      onSlideBarControl={onSlideBarControl}
    />
  );
}

const mapStateToProps = ({ custom }) => ({
  text: custom.text,
  slideBar: custom.slideBar,
});
const mapDispatchToProps = dispatch => ({
  ActiveSlideBar: bindActionCreators(customActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PreviewContainer);
