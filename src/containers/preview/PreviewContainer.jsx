import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as previewActions from '../../modules/preview';
import Preview from '../../components/preview/Preview';

function PreviewContainer({ PreviewActions, text, done, slideBar }) {
  const onConvertMode = () => {
    PreviewActions.convertMode(done);
  };

  const onSlideBarControl = () => {
    PreviewActions.toggleSlideBar(slideBar);
  };

  return (
    <Preview
      text={text}
      done={done}
      slideBar={slideBar}
      onConvertMode={onConvertMode}
      onSlideBarControl={onSlideBarControl}
    />
  );
}

const mapStateToProps = ({ preview, header }) => ({
  text: header.text,
  done: preview.done,
  slideBar: preview.slideBar,
});
const mapDispatchToProps = dispatch => ({
  PreviewActions: bindActionCreators(previewActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PreviewContainer);
