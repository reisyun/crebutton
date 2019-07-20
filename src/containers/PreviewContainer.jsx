import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as baseActions from '../modules/base';
import Preview from '../components/organisms/Preview';

function PreviewContainer({ BaseActions, text, done, slideBar }) {
  const onChangeText = e => {
    const { value } = e.target;
    BaseActions.changeInput(value);
  };

  const onConvertMode = () => {
    BaseActions.convertMode(done);
  };

  const onSlideBarControl = () => {
    BaseActions.toggleSlideBar(slideBar);
  };

  return (
    <Preview
      text={text}
      done={done}
      slideBar={slideBar}
      onChangeText={onChangeText}
      onConvertMode={onConvertMode}
      onSlideBarControl={onSlideBarControl}
    />
  );
}

const mapStateToProps = ({ base }) => ({
  text: base.text,
  done: base.done,
  slideBar: base.slideBar,
});
const mapDispatchToProps = dispatch => ({
  BaseActions: bindActionCreators(baseActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PreviewContainer);
