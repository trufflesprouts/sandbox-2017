/*
  Fish
*/
import React from 'react'
import h from '../helpers.js'

const Fish = React.createClass({
  onButtonClick: function () {
    let key = this.props.index;
    this.props.addToOrder(key);
  },
  render: function() {
    let details = this.props.details;
    let isAvailable = (details.status === "available" ? true : false);
    let buttonText = (isAvailable ? 'Add To Order' : 'SOLD OUT!');
    return (
      <li className="menu-fish">
        <img src={details.image} alt={details.name}/>
        <h3 className="fish-name">
          {details.name}
          <span className="price">{h.formatPrice(details.price)}</span>
        </h3>
        <p>{details.desc}</p>
        <button disabled={!isAvailable} onClick={this.onButtonClick}>{buttonText}</button>
      </li>
    );
  }
});

export default Fish;
