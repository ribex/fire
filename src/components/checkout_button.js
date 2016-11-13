import React, { Component } from 'react';

export default class CheckoutButton extends Component {
  render() {
    return (
      <div className="cart-button">
        <button type="button" className="cart btn btn-danger btn-block">{this.props.label}</button>
      </div>
    );
  }
}
