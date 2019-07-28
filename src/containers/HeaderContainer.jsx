import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as baseActions from '../modules/base';
import Header from '../components/organisms/Header';

function HeaderContainer({ BaseActions, children, close, title, text }) {
  const onChangeText = e => {
    const { value } = e.target;
    BaseActions.changeInput(value);
  };

  return (
    <Header close={close} title={title} text={text} onChangeText={onChangeText}>
      {children}
    </Header>
  );
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
