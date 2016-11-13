import React, { Component } from 'react';

export default class CartItem extends Component {  
  
  render() {
    return (
        <tr>
            <td>{this.props.heading}</td>
            <td>{this.props.price}</td> 
        </tr>
  )}
}