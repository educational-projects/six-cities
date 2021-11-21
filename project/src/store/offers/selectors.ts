import { Offer, Offers } from '../../types/offer';
import { State } from '../../types/state';
import { NameSpace } from '../root-reducer';

export const getCardList = (state: State): Offers => state[NameSpace.Offers].cardList;
export const getOffersLoading = (state: State): boolean => state[NameSpace.Offers].offersLoading;
export const getOffersError = (state: State): boolean => state[NameSpace.Offers].offersError;
export const getOfferLoading = (state: State): boolean => state[NameSpace.Offers].offerLoading;
export const getOfferError = (state: State): boolean => state[NameSpace.Offers].offerError;
export const getOffer = (state: State): Offer | null => state[NameSpace.Offers].offer;
export const getOffersNearbyLoading = (state: State): boolean => state[NameSpace.Offers].offersNearbyLoading;
export const getOffersNearbyError = (state: State): boolean => state[NameSpace.Offers].offersNearbyError;
export const getOffersNearby = (state: State): Offers => state[NameSpace.Offers].offersNearby;
export const getFavoritesOffersLoading = (state: State): boolean => state[NameSpace.Offers].favoritesOffersLoading;
export const getFavoritesOffersError = (state: State): boolean => state[NameSpace.Offers].favoritesOffersError;
export const getFavoritesOffers = (state: State): Offers => state[NameSpace.Offers].favoritesOffers;
export const getChangeFavoriteStatusLoading = (state: State): boolean => state[NameSpace.Offers].changeFavoriteStatusLoading;
