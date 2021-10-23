import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { comments } from './mock/comments';
import { offers } from './mock/offers';

ReactDOM.render(
  <React.StrictMode>
    <App
      cards = {offers}
      comments={comments}
    />
  </React.StrictMode>,
  document.getElementById('root'));
