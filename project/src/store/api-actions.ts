import { APIRoute, AuthorizationStatus } from '../const';
import { saveToken, Token } from '../services/token';
import { ThunkActionResult } from '../types/action';
import { AuthData } from '../types/auth-data';
import { BackOffers } from '../types/offer';
import { adaptToClient } from '../utils';
import { loadCardsError, loadCardsRequest, loadCardsSuccess, requireAuthorizationError, requireAuthorizationRequest, requireAuthorizationSucces } from './action';

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
      await api.get(APIRoute.Login);
      dispatch(requireAuthorizationSucces(AuthorizationStatus.Auth));
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
    } catch {
      dispatch(requireAuthorizationError(AuthorizationStatus.NoAuth));
    }
  }
);
