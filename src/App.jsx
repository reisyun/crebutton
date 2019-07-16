import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './contents/Layout';
import Main from './contents/Main';
import Color from './contents/Color';

function App() {
  return (
    <Layout>
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/color" component={Color} />
        </Switch>
      </Router>
    </Layout>
  );
}

export default App;
