import { changeCity, changeSortType, getAllCards } from '../store/action';

export enum ActionType {
  ChangeCity = 'main/changeCity',
  ChangeSortType ='main/changeSortType',
  GetAllCards = 'app/getAllCards',
}

export type Actions =
  | ReturnType<typeof changeCity>
  | ReturnType<typeof changeSortType>
  | ReturnType<typeof getAllCards>
