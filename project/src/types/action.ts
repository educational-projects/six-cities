import { AxiosInstance } from 'axios';
import { Action } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
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

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Action>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Action>;

