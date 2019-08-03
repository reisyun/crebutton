import React, { Suspense } from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import routes from '../lib/routes';
import Layout from '../pages/Layout';

function App() {
  return (
    <Layout
      custom={
        <Suspense fallback="">
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
        </Suspense>
      }
    />
  );
}

export default hot(module)(App);
