import React, { Component } from 'react';
import CheckoutButton from './checkout_button';
import * as firebase from 'firebase';


export default class App extends Component {
  
  // constructor(){
  //   super();
  //   this.state={
  //       currentItem: "pbj"
  //   };
  // }
  
  // componentDidMount() {
    
  //   const rootRef = firebase.database().ref().child('currentItem');
  //   rootRef.on('value', snap => {
  //       this.setState({
  //           currentItem: snap.val()
  //       });
  //   });
  // }
  
  render() {
    return (
      <div id="containerApp">
        <div id="header">
          <img id="logo" src="http://res.cloudinary.com/dvrdxx8mn/image/upload/v1472693786/fire2_1_o5btln.png" />
        </div>
        {this.props.children}
      </div>
    );
  }
}
