import { AxiosInstance } from 'axios';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { changeCity, changeSortType, loadCardsError, loadCardsRequest, loadCardsSuccess, requireAuthorizationRequest, requireAuthorizationSucces, requireLogoutRequest, requireLogoutSucces } from '../store/action';
import { State } from './state';

export enum ActionType {
  ChangeCity = 'main/changeCity',
  ChangeSortType ='main/changeSortType',
  LoadCardsError = 'data/loadCardsError',
  LoadCardsSuccess = 'data/loadCardsSuccess',
  LoadCardsRequest = 'data/loadCardsRequest',
  RequireAuthorizationRequest = 'user/requireAuthorizationRequest',
  RequireAuthorizationSucces = 'user/requireAuthorizationSucces',
  RequireLogoutRequest = 'user/requireLogoutRequest',
  RequireLogoutSucces = 'user/requireLogoutSucces',
}

export type Actions =
  | ReturnType<typeof changeCity>
  | ReturnType<typeof changeSortType>
  | ReturnType<typeof loadCardsRequest>
  | ReturnType<typeof loadCardsError>
  | ReturnType<typeof loadCardsSuccess>
  | ReturnType<typeof requireAuthorizationRequest>
  | ReturnType<typeof requireAuthorizationSucces>
  | ReturnType<typeof requireLogoutRequest>
  | ReturnType<typeof requireLogoutSucces>;


export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;

