import { UsersComments } from '../../types/comment';
import { State } from '../../types/state';
import { NameSpace } from '../root-reducer';

export const getCommentsLoading = (state: State): boolean => state[NameSpace.Comments].commentsLoading;
export const getCommentsError = (state: State): boolean => state[NameSpace.Comments].commentsError;
export const getComments = (state: State): UsersComments => state[NameSpace.Comments].comments;
export const getSendcommentsLoading = (state: State): boolean => state[NameSpace.Comments].sendcommentsLoading;
