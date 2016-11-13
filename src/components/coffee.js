import React, { Component } from 'react';
import CheckoutButton from './checkout_button';

export default class Coffee extends Component {  
  
  render() {
    return <div className="bodyDiv">
      <h1>Coffee</h1>
      
      <form>
       <div>
        <button className='btn btn-primary two left'>Hot</button>
        <button className='btn btn-primary two right'>Cold</button>
      </div>
      
      <div>
        <button className='btn btn-primary three left'>Small</button>
        <button className='btn btn-primary three'>Medium</button>
        <button className='btn btn-primary three right'>Large</button>
      </div>
      
      <div className={'SelectDiv'}>
        Milk:
        <select className={'specialsSelect'}>
          <option value="none">None</option>
          <option value="skim">Skim</option>
          <option value="whole">Whole</option>
          <option value="half and half">Half and half</option>
          <option value="almond">Almond</option>
          <option value="soy">Soy</option>
        </select>
        How much?
        <select className={'specialsSelect'}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </div>
      
       <div className={'SelectDiv'}>
        Sweetener:
        <select className={'specialsSelect'}>
          <option value="none">None</option>
          <option value="sugar">Sugar</option>
          <option value="stevia">Stevia</option>
        </select>
        How much? 
        <select className={'specialsSelect'}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </div>
      
      <div className={'SelectDiv'}>
        Flavor Shot:
        <select className={'specialsSelect'}>
          <option value="none">None</option>
          <option value="vanilla">Vanilla</option>
          <option value="cinnamon">Cinnamon</option>
          <option value="mocha">Mocha</option>
        </select>
      </div>
      
      <div><button className='btn btn-danger cart'>Add to Favorites</button></div>
      <div><button className='btn btn-danger cart'>Add to Order</button></div>
      </form>    
</div>;
  }
}

