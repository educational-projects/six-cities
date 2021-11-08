import { AuthorizationStatus } from '../const';
import { Actions, ActionType } from '../types/action';
import { State } from '../types/state';

const DEFAULT_CITY = 'Paris';
const DEFAULT_SORT = 'Popular';

const initialState = {
  currentCity: DEFAULT_CITY,
  currentSortType: DEFAULT_SORT,
  cardList: [],
  userEmail: '',
  offersLoading: false,
  offersError: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  authorizationStatusLoading: false,
};

const reducer = (state: State = initialState, actions: Actions): State => {
  switch (actions.type) {
    case ActionType.ChangeCity:
      return {...state, currentCity: actions.payload};
    case ActionType.ChangeSortType:
      return {...state, currentSortType: actions.payload};
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
      return {...state, authorizationStatusLoading: false};
    default:
      return state;
  }
};

export {reducer};
