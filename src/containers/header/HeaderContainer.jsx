import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as headerActions from '../../modules/header';
import Header from '../../components/header/Header';

function HeaderContainer({ text, HeaderActions }) {
  const onChangeText = e => {
    const { value } = e.target;
    HeaderActions.changeInput(value);
  };

  return <Header text={text} onChangeText={onChangeText} />;
}

const mapStateToProps = ({ header }) => ({
  text: header.text,
});
const mapDispatchToProps = dispatch => ({
  HeaderActions: bindActionCreators(headerActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HeaderContainer);
