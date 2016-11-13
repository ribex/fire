import React, { Component } from 'react';
import CartItem from './cart_item';
import { connect } from 'react-redux';
import { Link } from 'react-router';

export default class Cart extends Component {  
  
  render() {
    return (
    <div className="bodyDiv">
      <h1> Cart </h1>
      <table className="table table-striped">
    
        <thead>
            <tr>
                <th>Item</th>
                <th>Price</th>
            </tr>
        </thead>
        
        <tbody>
          <CartItem heading="Pretzel" price="$2.99" />
          <CartItem heading="PBJ" price="$3.99" />
        </tbody>
        
      </table>
      
      
      <div>
        <Link to="/"><button className='btn btn-danger cart'>Add Another Item</button></Link>
      </div>
      
      <div>
        <button className='btn btn-danger cart'>Complete Order</button>
      </div>
      
    </div>
  )}
}



function mapStateToProps(state) {
	return {
          cart: state.currentCartContents
	    };
}

export default connect(mapStateToProps)(Cart);