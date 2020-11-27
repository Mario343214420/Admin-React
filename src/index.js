import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Admin from './pages/Admin';
// import Login from './pages/Login';

import Mobile from  './Mobile'
import Computer from  './Computer'

import reportWebVitals from './reportWebVitals';
const w = document.documentElement.clientWidth
let template = w > 500 ? (
  <Computer />
) : (
  <Mobile />
)
ReactDOM.render(
  template,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
