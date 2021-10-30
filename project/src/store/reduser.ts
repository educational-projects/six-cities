import { Actions, ActionType } from '../types/action';
import { State } from '../types/state';

const DEFAULT_CYTI = 'Paris';
const DEFAULT_SORT = 'Popular';

const initialState = {
  currentCity: DEFAULT_CYTI,
  currentSortType: DEFAULT_SORT,
  cardList: [],
};

const reducer = (state: State = initialState, actions: Actions): State => {
  switch (actions.type) {
    case ActionType.ChangeCity:
      return {...state, currentCity: actions.payload};
    case ActionType.ChangeSortType:
      return {...state, currentSortType: actions.payload};
    case ActionType.GetAllCards:
      return {...state, cardList: actions.payload};
    default:
      return state;
  }
};

export {reducer};
