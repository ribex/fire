import React, { Component } from 'react';
import ReactDOM, {render} from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './components/app';
import Specials from './components/specials_menu';
import Menu from './components/main_menu';
import CheckoutButton from './components/checkout_button';
import Shakes from './components/shakes';
import Coffee from './components/coffee';
import SpecialDeets from './components/specials';
import Checkout from './components/review_order';
import reducers from './reducers';
import { Router, Route, browserHistory, IndexRoute } from "react-router";
import thunk from 'redux-thunk';


const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
  <Provider store={ createStoreWithMiddleware(reducers) }>
    <Router history={browserHistory}>
      <Route path="/" component={App} >
        <IndexRoute component={Menu} />
        <Route path="specials" component={Specials} />
          <Route path="specials/:item" component={SpecialDeets} />      
        <Route path="shakes" component={Shakes} />
        <Route path="coffee" component={Coffee} />
        <Route path="checkout" component={Checkout} />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.containerHTML'));
