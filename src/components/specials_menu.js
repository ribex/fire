import React, { Component } from 'react';
import CheckoutButton from './checkout_button';
import {Link} from 'react-router';
import { selectItem } from '../actions/index';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export default class Specials extends Component {
  render() {
    return (
      <div id="specials menu" className="bodyDiv">

        <div className="menu-button">
          <Link to="specials/pretzel" onClick={ () => this.props.selectItem(this.props.items.pretzel)}><button type="button" className="menu btn btn-primary btn-block">Pretzel</button></Link>
        </div>

        <div className="menu-button">
          <Link to="specials/muffin" onClick={ () => this.props.selectItem(this.props.items.muffin)}><button type="button" className="menu btn btn-primary btn-block">Muffin</button></Link>
        </div>

        <div className="menu-button">
          <Link to="specials/pbj" onClick={ () => this.props.selectItem(this.props.items.pbj)}><button type="button" className="menu btn btn-primary btn-block">PB&J</button></Link>
        </div>

        <Link to="checkout"><CheckoutButton label="Review Current Order" /></Link>

      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ selectItem }, dispatch);
}

function mapStateToProps(state) {
	return {
          items: state.items
	    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Specials);
