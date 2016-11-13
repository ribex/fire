import React, { Component } from 'react';
import { Link } from 'react-router';
import CheckoutButton from './checkout_button';

export default class Menu extends Component {
  render() {
    return (
        <div id="main menu" className="bodyDiv">

          <div className="menu-button">
            <Link to ="coffee"><button type="button" className="menu btn btn-primary btn-block">Coffee</button></Link>
          </div>

          <div className="menu-button">
            <Link to ="shakes"><button type="button" className="menu btn btn-primary btn-block">Shakes</button></Link>
          </div>

          <div className="menu-button">
            <Link to ="specials"><button type="button" className="menu btn btn-primary btn-block">Specials</button></Link>
          </div>

          <Link to="checkout"><CheckoutButton label="Review Current Order" /></Link>

        </div>
    );
  }
}
