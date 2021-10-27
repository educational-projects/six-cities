import { Actions, ActionType } from '../types/action';
import { State } from '../types/state';

const initialState = {
  currentCity: 'Paris',
  cardList: [],
};

const reducer = (state: State = initialState, actions: Actions): State => {
  switch (actions.type) {
    case ActionType.ChangeCity:
      return {...state, currentCity: actions.payload};
    case ActionType.GetAllCards:
      return {...state, cardList: actions.payload};
    default:
      return state;
  }
};

export {reducer};
