import { AxiosInstance } from 'axios';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import {
  changeCity, changeFavoriteStatusRequest, changeFavoriteStatusSucces, changeSortType, changeUserData, loadCardsError, loadCardsRequest, loadCardsSuccess,
  loadCommentsError, loadCommentsRequets, loadCommentsSuccess, loadFavoritesOffersError, loadFavoritesOffersRequets, loadFavoritesOffersSuccess, loadNearbyError, loadNearbyRequest,
  loadNearbySuccess, loadOfferError, loadOfferRequest, loadOfferSuccess, redirectToBack, redirectToRoute,
  requireAuthorizationError, requireAuthorizationRequest, requireAuthorizationSucces, requireLogoutError,
  requireLogoutRequest, requireLogoutSucces, sendCommentsRequest, sendCommentsSuccess
} from '../store/action';
import { State } from './state';

export enum ActionType {
  ChangeCity = 'app/changeCity',
  ChangeSortType ='app/changeSortType',
  ChangeUserData = 'user/changeUserData',
  LoadCardsError = 'data/loadCardsError',
  LoadCardsSuccess = 'data/loadCardsSuccess',
  LoadCardsRequest = 'data/loadCardsRequest',
  LoadOfferRequest = 'data/loadOffersRequet',
  LoadOfferSuccess = 'data/loadOfferSuccess',
  LoadOfferError = 'data/loadOfferError',
  LoadNearbyRequest = 'data/loadNearbyRequest',
  LoadNearbySuccess = 'data/LoadNearbySuccess',
  LoadNearbyError = 'data/loadNearbyError',
  LoadCommentsRequets = 'data/loadCommentsRequets',
  LoadCommentsSuccess = 'data/loadCommentsSuccess',
  LoadCommentsError = 'data/loadCommentsError',
  LoadFavoritesOffersRequets = 'data/loadFavoritesOffersRequets',
  LoadFavoritesOffersSuccess = 'data/loadFavoritesOffersSuccess',
  LoadFavoritesOffersError = 'data/LoadFavoritesOffersError',
  SendCommentsRequest = 'data/sendCommentsRequest',
  SendCommentsSuccess = 'data/sendCommentsSuccess',
  RequireAuthorizationRequest = 'user/requireAuthorizationRequest',
  RequireAuthorizationSucces = 'user/requireAuthorizationSucces',
  RequireAuthorizationError = 'data/requireAuthorizationError',
  RequireLogoutRequest = 'user/requireLogoutRequest',
  RequireLogoutSucces = 'user/requireLogoutSucces',
  RequireLogoutError = 'user/requireLogoutError',
  RedirectToRoute = 'data/redirectToRoute',
  RedirectToBack = 'data/redirectToBack',
  ChangeFavoriteStatusRequest = 'data/changeFavoriteStatusRequest',
  ChangeFavoriteStatusSucces = 'data/changeFavoriteStatusSucces'
}

export type Actions =
  | ReturnType<typeof changeCity>
  | ReturnType<typeof changeSortType>
  | ReturnType<typeof changeUserData>
  | ReturnType<typeof loadCardsRequest>
  | ReturnType<typeof loadCardsError>
  | ReturnType<typeof loadCardsSuccess>
  | ReturnType<typeof requireAuthorizationRequest>
  | ReturnType<typeof requireAuthorizationSucces>
  | ReturnType<typeof requireAuthorizationError>
  | ReturnType<typeof requireLogoutRequest>
  | ReturnType<typeof requireLogoutSucces>
  | ReturnType<typeof requireLogoutError>
  | ReturnType<typeof redirectToRoute>
  | ReturnType<typeof redirectToBack>
  | ReturnType<typeof loadOfferRequest>
  | ReturnType<typeof loadOfferSuccess>
  | ReturnType<typeof loadOfferError>
  | ReturnType<typeof loadNearbyRequest>
  | ReturnType<typeof loadNearbySuccess>
  | ReturnType<typeof loadNearbyError>
  | ReturnType<typeof loadCommentsRequets>
  | ReturnType<typeof loadCommentsSuccess>
  | ReturnType<typeof loadCommentsError>
  | ReturnType<typeof sendCommentsRequest>
  | ReturnType<typeof sendCommentsSuccess>
  | ReturnType<typeof loadFavoritesOffersRequets>
  | ReturnType<typeof loadFavoritesOffersSuccess>
  | ReturnType<typeof loadFavoritesOffersError>
  | ReturnType<typeof changeFavoriteStatusRequest>
  | ReturnType<typeof changeFavoriteStatusSucces>


export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;

