import { Actions, ActionType } from '../types/action';
import { State } from '../types/state';

const DEFAULT_CITY = 'Paris';
const DEFAULT_SORT = 'Popular';

const initialState = {
  currentCity: DEFAULT_CITY,
  currentSortType: DEFAULT_SORT,
  cardList: [],
  offersLoading: false,
  offersError: false,
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
    default:
      return state;
  }
};

export {reducer};

// const reducer = (state: State = initialState, actions: Actions): State => {
//   switch (actions.type) {
//     case ActionType.ChangeCity:
//       return {...state, currentCity: actions.payload};
//     case ActionType.ChangeSortType:
//       return {...state, currentSortType: actions.payload};
//     case ActionType.LoadCards:
//       return {
//         ...state,
//         cardList: actions.payload,
//       };
//     default:
//       return state;
//   }
// };
