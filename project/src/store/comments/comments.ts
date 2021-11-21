import { createReducer } from '@reduxjs/toolkit';
import { CommentsState } from '../../types/state';
import { loadCommentsError, loadCommentsRequets, loadCommentsSuccess, sendCommentsRequest, sendCommentsSuccess } from '../action';

const initialState: CommentsState = {
  commentsLoading: false,
  commentsError: false,
  comments: [],
  sendCommentsLoading: false,
};

const comments = createReducer(initialState, (builder) => {
  builder
    .addCase(loadCommentsRequets, (state) => {
      state.commentsLoading = true;
    })
    .addCase(loadCommentsSuccess, (state, action) => {
      const {usersComments} = action.payload;
      state.commentsLoading = false;
      state.comments = usersComments;
    })
    .addCase(loadCommentsError, (state) => {
      state.commentsLoading = false;
      state.commentsError = true;
    })
    .addCase(sendCommentsRequest, (state) => {
      state.sendCommentsLoading = true;
    })
    .addCase(sendCommentsSuccess, (state, action) => {
      const {userComment} = action.payload;
      state.sendCommentsLoading = false;
      state.comments = userComment;
    });
});

export {comments};
