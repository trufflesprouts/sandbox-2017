/*
  StorePicker
*/
import React from 'react'
import {Navigation} from 'react-router'
import h from '../helpers.js'
// import { Router, Route, Navigation, History} from 'react-router'


const StorePicker = React.createClass({
  mixin: [Navigation],
  goToStore: function (event) {
    event.preventDefault();
    const  storeId = this.refs.storeId.value;
    this.history.pushState(null, '/store/' + storeId);
  },
  render: function () {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input type="text" ref="storeId" defaultValue={h.getFunName()} required/>
        <input type="submit"/>
      </form>
    )
  }
});

export default StorePicker;
