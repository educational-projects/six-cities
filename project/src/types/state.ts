import { AuthorizationStatus } from '../const';
import { Offers } from './offer';

export type State = {
  currentCity: string;
  currentSortType: string
  userEmail: string
  cardList: Offers
  offersLoading: boolean
  offersError: boolean
  authorizationStatus: AuthorizationStatus
  authorizationStatusLoading: boolean
}
