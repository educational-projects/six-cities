import { Actions, ActionType } from '../../types/action';
import { OffersState } from '../../types/state';

const initialState: OffersState = {
  cardList: [],
  offersLoading: false,
  offersError: false,
  offerLoading: false,
  offerError: false,
  offer: null,
  offersNearbyLoading: false,
  offersNearbyError: false,
  offersNearby: [],
  FavoritesOffersLoading: false,
  FavoritesOffersError: false,
  FavoritesOffers: [],
  changeFavoriteStatusLoading: false,
};

const offers = (state = initialState, actions: Actions): OffersState => {
  switch (actions.type) {
    case ActionType.LoadCardsRequest:
      return {...state, offersLoading: true};
    case ActionType.LoadCardsSuccess:
      return {
        ...state,
        cardList: actions.payload,
        offersLoading: false,
      };
    case ActionType.LoadCardsError:
      return {
        ...state,
        offersError: true,
        offersLoading: false,
      };
    case ActionType.LoadOfferRequest:
      return {...state, offerLoading: true};
    case ActionType.LoadOfferSuccess:
      return {
        ...state,
        offerLoading: false,
        offer: actions.payload,
      };
    case ActionType.LoadOfferError:
      return {
        ...state,
        offerLoading: false,
        offerError: true,

      };
    case ActionType.LoadNearbyRequest:
      return {...state, offersNearbyLoading: true};
    case ActionType.LoadNearbySuccess:
      return {
        ...state,
        offersNearbyLoading: false,
        offersNearby: actions.payload,
      };
    case ActionType.LoadNearbyError:
      return {
        ...state,
        offersNearbyLoading: false,
        offersNearbyError: true,
      };
    case ActionType.LoadFavoritesOffersRequets:
      return {
        ...state,
        FavoritesOffersLoading: true,
      };
    case ActionType.LoadFavoritesOffersSuccess:
      return {
        ...state,
        FavoritesOffersLoading: false,
        FavoritesOffers: actions.payload,
      };
    case ActionType.LoadFavoritesOffersError:
      return {
        ...state,
        FavoritesOffersLoading: false,
        FavoritesOffersError: true,
      };
    case ActionType.ChangeFavoriteStatusRequest:
      return {
        ...state,
        changeFavoriteStatusLoading: true,
      };
    case ActionType.ChangeFavoriteStatusSucces:
      return {
        ...state,
        changeFavoriteStatusLoading: false,
      };
    default:
      return state;
  }
};

export {offers};
