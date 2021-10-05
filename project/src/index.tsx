import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Setting = {
  CARDS: new Array(5).fill(null).map((item, index) => index),
};

ReactDOM.render(
  <React.StrictMode>
    <App cards = {Setting.CARDS} />
  </React.StrictMode>,
  document.getElementById('root'));
