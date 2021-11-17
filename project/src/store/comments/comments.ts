import { Actions, ActionType } from '../../types/action';
import { CommentsState } from '../../types/state';

const initialState: CommentsState = {
  commentsLoading: false,
  commentsError: false,
  comments: [],
  sendcommentsLoading: false,
};

const comments = (state = initialState, actions: Actions): CommentsState => {
  switch (actions.type) {
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
    case ActionType.SendCommentsRequest:
      return {...state, sendcommentsLoading: true};
    case ActionType.SendCommentsSuccess:
      return {...state, sendcommentsLoading: false, comments: actions.payload};
    default:
      return state;
  }
};

export {comments};
