import { Actions, ActionType } from '../../types/action';
import { AppState } from '../../types/state';

const DEFAULT_CITY = 'Paris';
const DEFAULT_SORT = 'Popular';

const initialState: AppState = {
  currentCity: DEFAULT_CITY,
  currentSortType: DEFAULT_SORT,
};

const app = (state = initialState, actions: Actions): AppState => {
  switch (actions.type) {
    case ActionType.ChangeCity:
      return {...state, currentCity: actions.payload};
    case ActionType.ChangeSortType:
      return {...state, currentSortType: actions.payload};
    default:
      return state;
  }
};

export {app};
