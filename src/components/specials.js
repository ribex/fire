import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem} from '../actions/index';
import { fetchCurrentItem} from '../actions/index';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import * as firebase from 'firebase';


export default class SpecialDeets extends Component {
  
  // componentWillMount(){
  //   this.props.fetchCurrentItem();
  // }
  
  // componentDidMount() {
    
  //   const rootRef = firebase.database().ref('currentItem');
  //   rootRef.on('value', snap => {
  //       this.setState({
  //           currentItem: snap.val()
  //       });
  //   });
  // }
  
  render() {
    
    return (
      <div className="bodyDiv">
      <h4 id='SpecialsName' className='specialsText'>{this.props.item.heading}</h4>
      <img src={this.props.item.source} className="specialsImage" />
      <div id='specialsDetails'>
        <h7 className='specialsText'>{this.props.item.description}</h7>
        <h5 className='specialsText'>Price: ${this.props.item.price}</h5>
      </div>
      <Link to="checkout" onClick={ () => this.props.addItem(this.props.item) }><button className='btn btn-danger cart'>Add to Order</button></Link>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchCurrentItem, addItem }, dispatch);
}

function mapStateToProps(state) {
	return {
          item: state.currentItem 
	    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SpecialDeets);