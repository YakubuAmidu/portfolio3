import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Portfolio from './components/Portfolio';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

ReactDOM.render(
  <Router history={createBrowserHistory()}>
    <Switch>
      <Route exact path='/' component={App} />
      <Route path='/portfolio' component={Portfolio} />
    </Switch>
  </Router>,
  document.getElementById('root')
);
