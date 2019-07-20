import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as baseActions from '../modules/base';
import Custom from '../components/organisms/Custom';

function CustomContainer({ children, text, BaseActions }) {
  const onChangeText = e => {
    const { value } = e.target;
    BaseActions.changeInput(value);
  };

  return (
    <Custom text={text} onChangeText={onChangeText}>
      {children}
    </Custom>
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
)(CustomContainer);
