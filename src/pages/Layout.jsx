import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import BaseTemplate from '../components/templates/BaseTemplate';
import Preview from '../components/organisms/Preview';
import Result from '../components/organisms/Result';
import Copy from '../components/organisms/Copy';

function Layout({ custom }) {
  const { transition } = useSelector(state => state.base);

  return (
    <BaseTemplate
      viewer={
        <React.Fragment>
          <Result />
          <Preview />
        </React.Fragment>
      }
      panel={
        <React.Fragment>
          <Copy />
          <CSSTransition in={transition} timeout={400} classNames="custom">
            {custom}
          </CSSTransition>
        </React.Fragment>
      }
    />
  );
}

Layout.propTypes = {
  custom: PropTypes.element.isRequired,
};

export default Layout;
