import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import App from './components/app/app';
import { comments } from './mock/comments';
import { offers } from './mock/offers';
import { reducer } from './store/reduser';

const store = createStore(
  reducer,
  composeWithDevTools(),
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        cards={offers}
        comments={comments}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
