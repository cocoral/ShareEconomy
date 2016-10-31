import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';

import App from './app';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyACK2DhWU0K_vi-CwqTKxYMF3QNnKM0fIE",
  authDomain: "itemshare-caa06.firebaseapp.com",
  databaseURL: "https://itemshare-caa06.firebaseio.com",
  storageBucket: "itemshare-caa06.appspot.com",
  messagingSenderId: "18491548387"
};
firebase.initializeApp(config);

ReactDOM.render(<App/>, document.getElementById("placeholder"));
