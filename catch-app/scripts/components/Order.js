/*
  Order
*/
import React from 'react'
import h from '../helpers.js'
import CSSTransitionGroup from 'react-addons-css-transition-group'

const Order = React.createClass({
  renderOrder: function (key) {
    let fish = this.props.fishes[key];
    let count = this.props.orders[key];
    const removeButton = <button onClick={this.props.removeFromOrder.bind(null,key)}>&times;</button>
    if (!fish) {
      return  <li key={key}>Sorry, fish no longer available! {removeButton}</li>;
    }
    return (
      <li key={key}>
      <span>
        <CSSTransitionGroup component="span" transitionName="count"
          transitionEnterTimeout={250} transitionLeaveTimeout={250}>
          <span key={count}>{count}</span>
        </CSSTransitionGroup>
        lbs &nbsp; {fish.name} {removeButton}
      </span>
      <span className="price">{h.formatPrice(count * fish.price)}</span>
      </li>
    );
  },
  render: function() {
    let orderIds = Object.keys(this.props.orders);
    let total = orderIds.reduce((prevTotal, key) => {
      let fish = this.props.fishes[key];
      let count = this.props.orders[key];
      let isAvailable =  fish && fish.status === "available";
      if (fish && isAvailable) {
        return prevTotal + (count * parseInt(fish.price) || 0);
      }
      return prevTotal;
    }, 0);
    return (
      <div className="order-wrap">
        <h2 className="order-title">Your Order</h2>

        <CSSTransitionGroup
          className="order"
          component="ul"
          transitionName="order"
          transitionEnterTimeout = {500}
          transitionLeaveTimeout = {500}>
          {orderIds.map(this.renderOrder)}
          <li className="total">
            <strong>Total:</strong>
            {h.formatPrice(total)}
          </li>
        </CSSTransitionGroup>
      </div>
    );
  },
  propTypes: {
    fishes: React.PropTypes.object.isRequired,
    orders: React.PropTypes.object.isRequired,
    removeFromOrder: React.PropTypes.func.isRequired,
  }
});

export default Order;
