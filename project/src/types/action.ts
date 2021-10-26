import { changeCity, getAllCards } from '../store/action';

export enum ActionType {
  ChangeCity = 'main/changeCity',
  GetAllCards = 'app/getAllCards',
}

export type Actions =
  | ReturnType<typeof changeCity>
  | ReturnType<typeof getAllCards>
