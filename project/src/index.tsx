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
import { checkAuthAction, fetchCardsAction } from './store/api-actions';
import { requireAuthorizationSucces } from './store/action';
import { AuthorizationStatus } from './const';
import { redirect } from './store/middlewares/redirect';

const api = createApi(
  () => store.dispatch(requireAuthorizationSucces(AuthorizationStatus.NoAuth)),
);

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
    applyMiddleware(redirect),
  ),
);

(store.dispatch as ThunkAppDispatch)(checkAuthAction());
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
