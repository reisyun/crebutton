import React from 'react';
import { useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

const PageTransition = ({ children }) => {
  const { transition } = useSelector(state => state.base);

  return (
    <CSSTransition in={transition} timeout={400} classNames="custom">
      {children}
    </CSSTransition>
  );
};

export default PageTransition;
