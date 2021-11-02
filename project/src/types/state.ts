import { Offers } from './offer';

export type State = {
  currentCity: string;
  currentSortType: string
  cardList: Offers
  isDataLoaded: boolean
}
