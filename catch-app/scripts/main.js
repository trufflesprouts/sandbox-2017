import React from 'react'
import ReactDOM from 'react-dom'

// import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';
import { Router, Route } from 'react-router'
import { createHistory } from 'history'

/*
  Import Components
*/

import NotFound from './components/NotFound.js'
import StorePicker from './components/StorePicker.js'
import Header from './components/Header.js'
import Fish from './components/Fish.js'
import Inventory from './components/Inventory.js'
import Order from './components/Order.js'
import App from './components/App.js'

/*
  Routes
*/

const routes = (
  <Router history={createHistory()}>
    <Route path="/" component={StorePicker}/>
    <Route path="/store/:storeId" component={App}/>
    <Route path="*" component={NotFound}/>
  </Router>
);

ReactDOM.render(routes,document.getElementById('main'))
