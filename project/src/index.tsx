import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { offers } from './mock/offers';

ReactDOM.render(
  <React.StrictMode>
    <App cards = {offers} />
  </React.StrictMode>,
  document.getElementById('root'));
