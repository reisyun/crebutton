import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Layout } from './contents';
import routes from './lib/routes';

function App() {
  return (
    <Layout>
      <Router>
        <Switch>
          {routes.map(({ path, content, exact }) => (
            <Route
              exact={exact}
              path={path}
              component={content}
              key={`content-${path}`}
            />
          ))}
        </Switch>
      </Router>
    </Layout>
  );
}

export default App;
