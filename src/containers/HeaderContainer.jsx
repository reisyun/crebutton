import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as baseActions from '../modules/base';
import Header from '../components/organisms/Header';

function HeaderContainer({ BaseActions, text, title, transition }) {
  const onChangeText = e => {
    const { value } = e.target;
    BaseActions.changeInput(value);
  };
  const onPageTransition = () => {
    BaseActions.pageTransition(transition);
  };

  return (
    <Header
      text={text}
      title={title}
      onChangeText={onChangeText}
      onPageTransition={onPageTransition}
    />
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
