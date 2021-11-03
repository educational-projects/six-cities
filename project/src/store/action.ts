import { ActionType } from '../types/action';
import { Offers } from '../types/offer';

export const changeCity = (city: string) => ({
  type: ActionType.ChangeCity,
  payload: city,
} as const);

export const changeSortType = (sortType: string) => ({
  type: ActionType.ChangeSortType,
  payload: sortType,
} as const);

export const loadCardsRequest = () => ({
  type: ActionType.LoadCardsRequest,
} as const);

export const loadCardsSuccess = (cards: Offers) => ({
  type: ActionType.LoadCardsSuccess,
  payload: cards,
} as const);

export const loadCardsError = () => ({
  type: ActionType.LoadCardsError,
} as const);
