import { AuthorizationStatus } from '../../const';
import { Actions, ActionType } from '../../types/action';
import { UserState } from '../../types/state';

const initialState: UserState = {
  userData: null,
  authorizationStatus: AuthorizationStatus.Unknown,
  authorizationStatusLoading: false,
};

const user = (state = initialState, actions: Actions): UserState => {
  switch (actions.type) {
    case ActionType.ChangeUserData:
      return {...state, userData: actions.payload};
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

export {user};
