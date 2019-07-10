import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as customActions from '../../modules/custom';
import Header from '../../components/custom/Header';
import Title from '../../components/custom/Title';
import TextInput from '../../components/custom/TextInput';

function HeaderContainer({ text, CustomActions }) {
  const onChangeText = e => {
    const { value } = e.target;
    CustomActions.changeInput(value);
  };

  return (
    <Header>
      <Title />
      <TextInput text={text} onChangeText={onChangeText} />
    </Header>
  );
}

const mapStateToProps = ({ custom }) => ({
  text: custom.text,
});
const mapDispatchToProps = dispatch => ({
  CustomActions: bindActionCreators(customActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HeaderContainer);
