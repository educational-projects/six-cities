import { ActionType } from '../types/action';
import { Offers } from '../types/offer';

export const changeCity = (city: string) => ({
  type: ActionType.ChangeCity,
  payload: city,
} as const);

export const getAllCards = (cards: Offers) => ({
  type: ActionType.GetAllCards,
  payload: cards,
} as const);
