import { toast } from 'react-toastify';
import { APIRoute, AuthorizationStatus } from '../const';
import { dropToken, saveToken} from '../services/token';
import { ThunkActionResult } from '../types/action';
import { AuthData } from '../types/auth-data';
import { BackOffer, BackOffers } from '../types/offer';
import { adaptToClient, adaptUserDataToClient, adatpUsersCommentsToClient } from '../utils';
import { BackUser } from '../types/user';
import { changeUserData, loadCardsError, loadCardsRequest, loadCardsSuccess, loadCommentsError, loadCommentsRequets, loadCommentsSuccess, loadNearbyError, loadNearbyRequest, loadNearbySuccess, loadOfferError, loadOfferRequest, loadOfferSuccess, redirectToBack, requireAuthorizationError, requireAuthorizationRequest, requireAuthorizationSucces, requireLogoutError, requireLogoutRequest, requireLogoutSucces } from './action';
import { UsersComments } from '../types/comment';

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

export const fetchOfferAction = (id: string): ThunkActionResult => (
  async (dispatch, _getState, api): Promise<void> => {
    dispatch(loadOfferRequest());
    try {
      const {data} = await api.get<BackOffer>(`${APIRoute.Cards}/${id}`);
      dispatch(loadOfferSuccess(adaptToClient(data)));
    } catch {
      dispatch(loadOfferError());
    }
  }
);

export const fetchOffersNearby = (id: string): ThunkActionResult => (
  async (dispatch, _getState, api): Promise<void> => {
    dispatch(loadNearbyRequest());
    try {
      const {data} = await api.get<BackOffers>(`${APIRoute.Cards}/${id}${APIRoute.Nearby}`);
      dispatch(loadNearbySuccess(data.map(adaptToClient)));
    } catch {
      dispatch(loadNearbyError());
    }
  }
);

export const fetchCommentsAction = (id: string): ThunkActionResult => (
  async (dispatch, _getState, api): Promise<void> => {
    dispatch(loadCommentsRequets());
    try {
      const {data} = await api.get<UsersComments>(`${APIRoute.Comments}/${id}`);
      dispatch(loadCommentsSuccess(data.map(adatpUsersCommentsToClient)));
    } catch {
      dispatch(loadCommentsError());
    }
  }
);

export const checkAuthAction = (): ThunkActionResult => (
  async (dispatch, _getState, api) => {
    try {
      const {data} = await api.get<BackUser>(APIRoute.Login);
      dispatch(requireAuthorizationSucces(AuthorizationStatus.Auth));
      dispatch(changeUserData(adaptUserDataToClient(data)));
    } catch {
      dispatch(requireAuthorizationSucces(AuthorizationStatus.NoAuth));
    }
  }
);

export const loginAction = ({login: email, password}: AuthData): ThunkActionResult => (
  async (dispatch, _getState, api) => {
    dispatch(requireAuthorizationRequest());
    try {
      const {data} = await api.post<BackUser>(APIRoute.Login, {email, password});
      saveToken(data.token);
      dispatch(requireAuthorizationSucces(AuthorizationStatus.Auth));
      dispatch(changeUserData(adaptUserDataToClient(data)));
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
