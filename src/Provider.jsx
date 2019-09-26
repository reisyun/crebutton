import React from 'react';
import PropTypes from 'prop-types';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './modules';

const store = createStore(rootReducer, composeWithDevTools());

const ReduxProvider = ({ element }) => (
  <Provider store={store}>{element}</Provider>
);

ReduxProvider.propTypes = {
  element: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
};

export default ReduxProvider;
