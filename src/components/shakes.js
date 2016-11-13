import React, { Component } from 'react';
import CheckoutButton from './checkout_button';

export default class Shakes extends Component {  
  
  render() {
    return <div className="bodyDiv">
      <h1>Shakes</h1>
      
      <form>
      
      <div>
        <button className={'btn btn-primary three left'}>Small</button>
        <button className={'btn btn-primary three'}>Medium</button>
        <button className={'btn btn-primary three right'}>Large</button>
      </div>
      
      <div className={'SelectDiv'}>
        Protein: 
        <select className={'specialsSelect'}>
          <option value="none">None</option>
          <option value="vanilla">Vanilla</option>
          <option value="chocolate">Chocolate</option>
          <option value="strawberry">Strawberry</option>
        </select>
        
        Scoops:
        <select className={'specialsSelect'}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      
      <div className={'SelectDiv'}>
        Milk:
        <select className={'specialsSelect'}>
          <option value="skim">Skim</option>
          <option value="whole">Whole</option>
          <option value="water">Water</option>
          <option value="almond">Almond</option>
          <option value="soy">Soy</option>
        </select>
      </div>
      
      <div>
        <button className={'btn btn-primary three left'}>Banana</button>
        <button className={'btn btn-primary three'}>Strawberry</button>
        <button className={'btn btn-primary three right'}>PB</button>
      </div>
      
      <div><button className={"cart btn btn-danger"}>Add to Favorites</button></div>
      <div><button className={"cart btn btn-danger"}>Add to Order</button></div>
        
      </form>    
</div>;
  }
}

