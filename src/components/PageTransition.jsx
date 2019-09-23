import React from 'react';
import { CSSTransition } from 'react-transition-group';

const PageTransition = ({ children }) => {
  return (
    <CSSTransition in={true} timeout={400} classNames="custom">
      {children}
    </CSSTransition>
  );
};

export default PageTransition;
