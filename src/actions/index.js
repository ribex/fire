import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import * as types from '../constants/ActionTypes';
import * as firebase from 'firebase';

//CONFIGURE FIREBASE
var config = {
    apiKey: "AIzaSyBaty4kZaEkWyVXZ3Z9DT3wggv-XyptVAM",
    authDomain: "fire-7415c.firebaseapp.com",
    databaseURL: "https://fire-7415c.firebaseio.com",
    storageBucket: "fire-7415c.appspot.com",
  };

const myFirebaseApp = firebase.initializeApp(config);

const currentItemRef = myFirebaseApp.database().ref('currentItem');
const currentCartRef = myFirebaseApp.database().ref('currentCart/');

export function addItem(item) {
	
	console.log('An item has been added to cart:', item.heading);
	
	return dispatch => currentCartRef.push({
		item
	});
}

export function fetchCurrentItem() {
	
	return	dispatch => {
		
		currentItemRef.on('value', snapshot => {
			console.log(snapshot.val());
			
			dispatch ({
			
			type:'ITEM_SELECTED',
			payload: snapshot.val()
	
			});
		});
	}
}

export function selectItem(item) {
	
	currentItemRef.set({
		item
	});

	return ({
		type: 'ITEM_SELECTED',
		payload: item 
	});
}