import { Offers } from './offer';

export type State = {
  currentCity: string;
  currentSortType: string
  cardList: Offers
  offersLoading: boolean
  offersError: boolean
}
