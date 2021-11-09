import { AxiosInstance } from 'axios';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { changeCity, changeSortType, changeUserEmail, loadCardsError, loadCardsRequest, loadCardsSuccess, redirectToRoute, requireAuthorizationError, requireAuthorizationRequest, requireAuthorizationSucces, requireLogoutError, requireLogoutRequest, requireLogoutSucces } from '../store/action';
import { State } from './state';

export enum ActionType {
  ChangeCity = 'main/changeCity',
  ChangeSortType ='main/changeSortType',
  ChangeUserEmail = 'user/changeUserEmail',
  LoadCardsError = 'data/loadCardsError',
  LoadCardsSuccess = 'data/loadCardsSuccess',
  LoadCardsRequest = 'data/loadCardsRequest',
  RequireAuthorizationRequest = 'user/requireAuthorizationRequest',
  RequireAuthorizationSucces = 'user/requireAuthorizationSucces',
  RequireAuthorizationError = 'data/requireAuthorizationError',
  RequireLogoutRequest = 'user/requireLogoutRequest',
  RequireLogoutSucces = 'user/requireLogoutSucces',
  RequireLogoutError = 'user/requireLogoutError',
  RedirectToRoute = 'sign-in/redirectToRoute',
}

export type Actions =
  | ReturnType<typeof changeCity>
  | ReturnType<typeof changeSortType>
  | ReturnType<typeof changeUserEmail>
  | ReturnType<typeof loadCardsRequest>
  | ReturnType<typeof loadCardsError>
  | ReturnType<typeof loadCardsSuccess>
  | ReturnType<typeof requireAuthorizationRequest>
  | ReturnType<typeof requireAuthorizationSucces>
  | ReturnType<typeof requireAuthorizationError>
  | ReturnType<typeof requireLogoutRequest>
  | ReturnType<typeof requireLogoutSucces>
  | ReturnType<typeof requireLogoutError>
  | ReturnType<typeof redirectToRoute>;


export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;

