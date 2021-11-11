import { AuthorizationStatus } from '../const';
import { Offer, Offers } from './offer';
import { User } from './user';

export type State = {
  currentCity: string;
  currentSortType: string
  userData: null | User
  cardList: Offers
  offersLoading: boolean
  offersError: boolean
  offerLoading: boolean
  offerError: boolean
  offer: null | Offer
  authorizationStatus: AuthorizationStatus
  authorizationStatusLoading: boolean
}
