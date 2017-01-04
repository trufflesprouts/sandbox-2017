/*
  App
*/

import React from 'react'
import {LinkedStateMixin} from 'react-catalyst'
import Header from './Header.js'
import Order from './Order.js'
import Inventory from './Inventory.js'
import Fish from './Fish.js'

const App = React.createClass({
  mixins: [LinkedStateMixin],
  getInitialState: function () {
    return {
      fishes: {},
      orders: {}
    };
  },
  componentDidMount: function () {
    let localStorageRef = localStorage.getItem('order-' + this.props.params.storeId);
    if (localStorageRef) {
      this.setState({
        orders: JSON.parse(localStorageRef)
      });
    }
  },
  componentWillUpdate: function (prevProps, nextState) {
    localStorage.setItem('order-' + this.props.params.storeId, JSON.stringify(nextState.orders));
  },
  addToOrder: function (key) {
    this.state.orders[key] = this.state.orders[key] + 1 || 1;
    this.setState({orders: this.state.orders});
  },
  addFish: function (fish) {
    const timestamp = (new Date()).getTime();
    // update the state object
    this.state.fishes['fish-' + timestamp] = fish ;
    // set the state
    this.setState({fishes: this.state.fishes});
  },
  removeFish: function (key) {
    this.state.fishes[key] = null;
    this.setState({fishes: this.state.fishes});
  },
  removeFromOrder: function (key) {
    delete this.state.orders[key];
    this.setState({orders: this.state.orders});
  },
  loadSamples: function () {
    this.setState({
      fishes: require('../sample-fishes.js')
    });
  },
  renderFish: function (key) {
    return <Fish key={key} index={key} details={this.state.fishes[key]} addToOrder={this.addToOrder}/>;
  },
  render: function () {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Sea Food Market"/>
          <ul className="list-of-fishes">
            {Object.keys(this.state.fishes).map(this.renderFish)}
          </ul>
        </div>
        <Order fishes={this.state.fishes} orders ={this.state.orders } removeFromOrder={this.removeFromOrder}/>
        <Inventory addFish={this.addFish} removeFish={this.removeFish} fishes={this.state.fishes} loadSamples={this.loadSamples} linkState={this.linkState}/>
      </div>
    );
  }
});

export default App;
