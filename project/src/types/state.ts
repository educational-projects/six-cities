import { AuthorizationStatus } from '../const';
import { Offer, Offers } from './offer';

export type State = {
  currentCity: string;
  currentSortType: string
  userEmail: string
  cardList: Offers
  offersLoading: boolean
  offersError: boolean
  offerLoading: boolean
  offerError: boolean
  offer: null | Offer
  authorizationStatus: AuthorizationStatus
  authorizationStatusLoading: boolean
}
