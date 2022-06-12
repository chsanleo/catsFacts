import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.scss';

import Page404 from './views/404/404.jsx';

function App() {
  return (
    <Router>
      <Switch>
        <Route component={Page404} />
      </Switch>
    </Router>
  );
}

export default App;
