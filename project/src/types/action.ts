import { AxiosInstance } from 'axios';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { changeCity, changeSortType, changeUserData, loadCardsError, loadCardsRequest, loadCardsSuccess, loadOfferError, loadOfferRequest, loadOfferSuccess, redirectToBack, redirectToRoute, requireAuthorizationError, requireAuthorizationRequest, requireAuthorizationSucces, requireLogoutError, requireLogoutRequest, requireLogoutSucces } from '../store/action';
import { State } from './state';

export enum ActionType {
  ChangeCity = 'main/changeCity',
  ChangeSortType ='main/changeSortType',
  ChangeUserData = 'user/changeUserData',
  LoadCardsError = 'data/loadCardsError',
  LoadCardsSuccess = 'data/loadCardsSuccess',
  LoadCardsRequest = 'data/loadCardsRequest',
  LoadOfferRequest = 'data/loadOffersRequet',
  LoadOfferSuccess = 'data/loadOfferSuccess',
  LoadOfferError = 'data/loadOfferError',
  RequireAuthorizationRequest = 'user/requireAuthorizationRequest',
  RequireAuthorizationSucces = 'user/requireAuthorizationSucces',
  RequireAuthorizationError = 'data/requireAuthorizationError',
  RequireLogoutRequest = 'user/requireLogoutRequest',
  RequireLogoutSucces = 'user/requireLogoutSucces',
  RequireLogoutError = 'user/requireLogoutError',
  RedirectToRoute = 'data/redirectToRoute',
  RedirectToBack = 'data/redirectToBack'
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


export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;

