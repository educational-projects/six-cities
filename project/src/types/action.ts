import { AxiosInstance } from 'axios';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { changeCity, changeSortType, loadCards } from '../store/action';
import { State } from './state';

export enum ActionType {
  ChangeCity = 'main/changeCity',
  ChangeSortType ='main/changeSortType',
  LoadCards = 'data/loadCards',
}

export type Actions =
  | ReturnType<typeof changeCity>
  | ReturnType<typeof changeSortType>
  | ReturnType<typeof loadCards>;


export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;

