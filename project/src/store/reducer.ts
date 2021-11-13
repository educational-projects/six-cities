import { AuthorizationStatus } from '../const';
import { Actions, ActionType } from '../types/action';
import { State } from '../types/state';

const DEFAULT_CITY = 'Paris';
const DEFAULT_SORT = 'Popular';

const initialState = {
  currentCity: DEFAULT_CITY,
  currentSortType: DEFAULT_SORT,
  cardList: [],
  userData: null,
  offersLoading: false,
  offersError: false,
  offerLoading: false,
  offerError: false,
  offer: null,
  offersNearbyLoading: false,
  offersNearbyError: false,
  offersNearby: [],
  commentsLoading: false,
  commentsError: false,
  comments: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  authorizationStatusLoading: false,
};

const reducer = (state: State = initialState, actions: Actions): State => {
  switch (actions.type) {
    case ActionType.ChangeCity:
      return {...state, currentCity: actions.payload};
    case ActionType.ChangeSortType:
      return {...state, currentSortType: actions.payload};
    case ActionType.ChangeUserData:
      return {...state, userData: actions.payload};
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
        offersLoading: false,
        offersError: true,
      };
    case ActionType.LoadCommentsRequets:
      return {...state, commentsLoading: true};
    case ActionType.LoadCommentsSuccess:
      return {
        ...state,
        commentsLoading: false,
        comments: actions.payload,
      };
    case ActionType.LoadCommentsError:
      return {
        ...state,
        commentsLoading: false,
        commentsError: true,
      };
    case ActionType.RequireAuthorizationRequest:
      return {...state, authorizationStatusLoading: true};
    case ActionType.RequireAuthorizationSucces:
      return {
        ...state,
        authorizationStatus: actions.payload,
        authorizationStatusLoading: false,
      };
    case ActionType.RequireLogoutRequest:
      return {...state, authorizationStatusLoading: true};
    case ActionType.RequireLogoutSucces:
      return {
        ...state,
        authorizationStatusLoading: false,
        userData: null,
      };
    default:
      return state;
  }
};

export {reducer};
