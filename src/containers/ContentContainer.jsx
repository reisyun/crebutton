import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as baseActions from '../modules/base';
import Content from '../components/organisms/Content';

function ContentContainer({ BaseActions, transition }) {
  const onPageTransition = () => {
    BaseActions.pageTransition(transition);
  };

  return <Content onPageTransition={onPageTransition} />;
}

const mapStateToProps = ({ base }) => ({
  transition: base.transition,
});
const mapDispatchToProps = dispatch => ({
  BaseActions: bindActionCreators(baseActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContentContainer);
