import React from 'react';
import { hot } from 'react-hot-loader';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import routes from '../lib/routes';
import Layout from '../pages/Layout';

function App() {
  return (
    <Layout
      custom={
        <Router>
          <Switch>
            {routes.map(({ path, content, exact }) => (
              <Route
                exact={exact}
                path={path}
                component={content}
                key={`content-${content}`}
              />
            ))}
          </Switch>
        </Router>
      }
    />
  );
}

export default hot(module)(App);
