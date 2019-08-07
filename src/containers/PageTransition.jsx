import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

const PageTransition = ({ children, transition }) => {
  return (
    <CSSTransition in={transition} timeout={1000} classNames="custom">
      {children}
    </CSSTransition>
  );
};

const mapStateToProps = ({ base }) => ({
  transition: base.transition,
});

export default connect(mapStateToProps)(PageTransition);
