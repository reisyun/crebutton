import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as baseActions from '../modules/base';
import Result from '../components/organisms/Result';

function ResultContainer({ BaseActions, done }) {
  const onConvertMode = () => {
    BaseActions.convertMode(done);
  };

  return <Result done={done} onConvertMode={onConvertMode} />;
}

const mapStateToProps = ({ base }) => ({
  done: base.done,
});
const mapDispatchToProps = dispatch => ({
  BaseActions: bindActionCreators(baseActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ResultContainer);
