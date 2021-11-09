import { APIRoute, AppRoute, AuthorizationStatus } from '../const';
import { dropToken, saveToken, Token } from '../services/token';
import { ThunkActionResult } from '../types/action';
import { AuthData } from '../types/auth-data';
import { BackOffers } from '../types/offer';
import { adaptToClient } from '../utils';
import { changeUserEmail, loadCardsError, loadCardsRequest, loadCardsSuccess, redirectToRoute, requireAuthorizationError, requireAuthorizationRequest, requireAuthorizationSucces, requireLogoutError, requireLogoutRequest, requireLogoutSucces } from './action';

export const fetchCardsAction = (): ThunkActionResult => (
  async (dispatch, _getState, api): Promise<void> => {
    dispatch(loadCardsRequest());
    try {
      const {data} = await api.get<BackOffers>(APIRoute.Cards);
      dispatch(loadCardsSuccess(data.map(adaptToClient)));
    } catch {
      dispatch(loadCardsError());
    }
  }
);

export const checkAuthAction = (): ThunkActionResult => (
  async (dispatch, _getState, api) => {
    try {
      const {data: {email}} = await api.get<{email: string}>(APIRoute.Login);
      dispatch(requireAuthorizationSucces(AuthorizationStatus.Auth));
      dispatch(changeUserEmail(email));
    } catch {
      dispatch(requireAuthorizationSucces(AuthorizationStatus.NoAuth));
    }
  }
);

export const loginAction = ({login: email, password}: AuthData): ThunkActionResult => (
  async (dispatch, _getState, api) => {
    dispatch(requireAuthorizationRequest());
    try {
      const {data: {token}} = await api.post<{token: Token}>(APIRoute.Login, {email, password});
      saveToken(token);
      dispatch(requireAuthorizationSucces(AuthorizationStatus.Auth));
      dispatch(changeUserEmail(email));
      dispatch(redirectToRoute(AppRoute.Main));
    } catch {
      dispatch(requireAuthorizationError(AuthorizationStatus.NoAuth));
    }
  }
);

export const logoutAction = (): ThunkActionResult => (
  async (dispatch, _getState, api) => {
    dispatch(requireLogoutRequest());
    try {
      api.delete(APIRoute.Logout);
      dropToken();
      dispatch(requireLogoutSucces());
    } catch {
      dispatch(requireLogoutError());
    }
  }
);
