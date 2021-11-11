import { toast } from 'react-toastify';
import { APIRoute, AuthorizationStatus } from '../const';
import { dropToken, saveToken, Token } from '../services/token';
import { ThunkActionResult } from '../types/action';
import { AuthData } from '../types/auth-data';
import { BackOffer, BackOffers } from '../types/offer';
import { adaptToClient, adaptUserDataToClient } from '../utils';
import { BackUser, User } from '../types/user';
import { changeUserData, loadCardsError, loadCardsRequest, loadCardsSuccess, loadOfferError, loadOfferRequest, loadOfferSuccess, redirectToBack, requireAuthorizationError, requireAuthorizationRequest, requireAuthorizationSucces, requireLogoutError, requireLogoutRequest, requireLogoutSucces } from './action';

const AUTH_FAIL_MESSAGE = 'something went wrong';

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

export const fetchOfferAction = (): ThunkActionResult => (
  async (dispatch, _getState, api): Promise<void> => {
    dispatch(loadOfferRequest());
    try {
      const {data} = await api.get<BackOffer>(APIRoute.Offer);
      dispatch(loadOfferSuccess(adaptToClient(data)));
    } catch {
      dispatch(loadOfferError());
    }
  }
);

export const checkAuthAction = (): ThunkActionResult => (
  async (dispatch, _getState, api) => {
    try {
      const {data: {...user}} = await api.get<BackUser>(APIRoute.Login);
      dispatch(requireAuthorizationSucces(AuthorizationStatus.Auth));
      dispatch(changeUserData(adaptUserDataToClient(user)));
    } catch {
      dispatch(requireAuthorizationSucces(AuthorizationStatus.NoAuth));
    }
  }
);

export const loginAction = ({login: email, password}: AuthData): ThunkActionResult => (
  async (dispatch, _getState, api) => {
    dispatch(requireAuthorizationRequest());
    try {
      const {data: {token, ...user}} = await api.post<{token: Token}>(APIRoute.Login, {email, password});
      saveToken(token);
      dispatch(requireAuthorizationSucces(AuthorizationStatus.Auth));
      dispatch(changeUserData(adaptUserDataToClient(user as User)));
      dispatch(redirectToBack());
    } catch {
      dispatch(requireAuthorizationError(AuthorizationStatus.NoAuth));
      toast.error(AUTH_FAIL_MESSAGE);
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
      toast.error(AUTH_FAIL_MESSAGE);
    }
  }
);
