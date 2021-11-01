import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import App from './components/app/app';
import { comments } from './mock/comments';
import { reducer } from './store/reducer';
import { createApi } from './services/api';
import { ThunkAppDispatch } from './types/action';
import { fetchCardsAction } from './store/api-actions';

const api = createApi();

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
  ),
);

(store.dispatch as ThunkAppDispatch)(fetchCardsAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        comments={comments}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
