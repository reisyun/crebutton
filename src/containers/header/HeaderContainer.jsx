import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as baseActions from '../../modules/base';
import Header from '../../components/header/Header';

function HeaderContainer({ text, BaseActions }) {
  const onChangeText = e => {
    const { value } = e.target;
    BaseActions.changeInput(value);
  };

  return <Header text={text} onChangeText={onChangeText} />;
}

const mapStateToProps = ({ base }) => ({
  text: base.text,
});
const mapDispatchToProps = dispatch => ({
  BaseActions: bindActionCreators(baseActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HeaderContainer);
