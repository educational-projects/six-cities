import { AuthorizationStatus } from '../const';
import { UsersComments } from './comment';
import { Offer, Offers } from './offer';
import { User } from './user';

export type State = {
  currentCity: string;
  currentSortType: string;
  userData: null | User;
  cardList: Offers;
  offersLoading: boolean;
  offersError: boolean;
  offerLoading: boolean;
  offerError: boolean;
  offer: null | Offer;
  offersNearbyLoading: boolean;
  offersNearbyError: boolean;
  offersNearby: Offers;
  FavoritesOffersLoading: boolean;
  FavoritesOffersError: boolean
  FavoritesOffers: Offers;
  changeFavoriteStatusLoading: boolean;
  commentsLoading: boolean;
  commentsError: boolean;
  comments: UsersComments;
  sendcommentsLoading: boolean,
  authorizationStatus: AuthorizationStatus;
  authorizationStatusLoading: boolean;
}
