import { toast } from 'react-toastify';
import { APIRoute, AppRoute, AuthorizationStatus } from '../const';
import { dropToken, saveToken} from '../services/token';
import { ThunkActionResult } from '../types/action';
import { AuthData } from '../types/auth-data';
import { BackOffer, BackOffers } from '../types/offer';
import { adaptToClient, adaptUserDataToClient, adaptUsersCommentsToClient } from '../utils';
import { BackUser } from '../types/user';
import {
  changeFavoriteStatusRequest, changeFavoriteStatusSuccess, changeUserData, loadCardsError,
  loadCardsRequest, loadCardsSuccess, loadCommentsError, loadCommentsRequest, loadCommentsSuccess,
  loadFavoritesOffersError, loadFavoritesOffersRequest, loadFavoritesOffersSuccess, loadNearbyError,
  loadNearbyRequest, loadNearbySuccess, loadOfferError, loadOfferRequest, loadOfferSuccess,
  redirectToBack, redirectToRoute, requireAuthorizationError, requireAuthorizationRequest,
  requireAuthorizationSuccess, requireLogoutError, requireLogoutRequest, requireLogoutSuccess,
  sendCommentsRequest, sendCommentsSuccess
} from './action';
import { CommentData, UsersComments } from '../types/comment';

const AUTH_FAIL_MESSAGE = 'something went wrong';
const SEND_COMMENT_MESSAGE = 'there was an error posting your comment, please try again';
const STATUS_FAIL_MESSAGE = 'failed to add to favorites, please try again';
const NEARBY_FAIL_MESSAGE = 'could not load offers nearby, please try refreshing the page';
const COMMENTS_FAIL_MESSAGE = 'failed to load comments, please refresh the page';


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
    } catch(e: any) {
      if (e.response.status !== 404) {
        toast.error(NEARBY_FAIL_MESSAGE);
      }
      dispatch(loadNearbyError());
    }
  }
);

export const fetchCommentsAction = (id: string): ThunkActionResult => (
  async (dispatch, _getState, api): Promise<void> => {
    dispatch(loadCommentsRequest());
    try {
      const {data} = await api.get<UsersComments>(`${APIRoute.Comments}/${id}`);
      dispatch(loadCommentsSuccess(data.map(adaptUsersCommentsToClient)));
    } catch(e: any) {
      if (e.response.status !== 400) {
        toast.error(COMMENTS_FAIL_MESSAGE);
      }
      dispatch(loadCommentsError());
    }
  }
);

export const fetchFavoritesOffersAction = (): ThunkActionResult => (
  async (dispatch, _getState, api): Promise<void> => {
    dispatch(loadFavoritesOffersRequest());
    try {
      const {data} = await api.get<BackOffers>(APIRoute.Favorites);
      dispatch(loadFavoritesOffersSuccess(data.map(adaptToClient)));
    } catch {
      dispatch(loadFavoritesOffersError());
    }
  }
);

export const changeFavorite = (id: number, status: boolean): ThunkActionResult => (
  async (dispatch, _getState, api): Promise<void> => {
    dispatch(changeFavoriteStatusRequest());
    try {
      const {data} = await api.post(`${APIRoute.Favorites}/${id}/${Number(status)}`);
      dispatch(changeFavoriteStatusSuccess(adaptToClient(data)));
    } catch(e: any) {
      if (e.response.status === 401) {
        dispatch(redirectToRoute(AppRoute.Login));
      } else {
        toast.error(STATUS_FAIL_MESSAGE);
      }
    }
  }
);

export const sendCommentsAction = ({id, rating, comment}: CommentData, resetForm: () => void): ThunkActionResult => (
  async (dispatch, _getState, api): Promise<void> => {
    dispatch(sendCommentsRequest());
    try {
      const  {data} = await api.post<UsersComments>(`${APIRoute.Comments}/${id}`, {rating, comment});
      dispatch(sendCommentsSuccess(data.map(adaptUsersCommentsToClient)));
      resetForm();
    } catch {
      toast.error(SEND_COMMENT_MESSAGE);
    }
  }
);

export const checkAuthAction = (): ThunkActionResult => (
  async (dispatch, _getState, api) => {
    try {
      const {data} = await api.get<BackUser>(APIRoute.Login);
      dispatch(requireAuthorizationSuccess(AuthorizationStatus.Auth));
      dispatch(changeUserData(adaptUserDataToClient(data)));
    } catch  {
      dispatch(requireAuthorizationSuccess(AuthorizationStatus.NoAuth));
    }
  }
);

export const loginAction = ({login: email, password}: AuthData): ThunkActionResult => (
  async (dispatch, _getState, api) => {
    dispatch(requireAuthorizationRequest());
    try {
      const {data} = await api.post<BackUser>(APIRoute.Login, {email, password});
      saveToken(data.token);
      dispatch(requireAuthorizationSuccess(AuthorizationStatus.Auth));
      dispatch(changeUserData(adaptUserDataToClient(data)));
      dispatch(fetchCardsAction());
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
      dispatch(requireLogoutSuccess(AuthorizationStatus.NoAuth));
      dispatch(fetchCardsAction());
    } catch {
      dispatch(requireLogoutError());
      toast.error(AUTH_FAIL_MESSAGE);
    }
  }
);
