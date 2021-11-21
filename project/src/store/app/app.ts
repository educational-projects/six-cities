import { createReducer } from '@reduxjs/toolkit';
import { AppState } from '../../types/state';
import { changeCity, changeSortType } from '../action';

const DEFAULT_CITY = 'Paris';
const DEFAULT_SORT = 'Popular';

const initialState: AppState = {
  currentCity: DEFAULT_CITY,
  currentSortType: DEFAULT_SORT,
};

const app = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      const {city} = action.payload;
      state.currentCity = city;
    })
    .addCase(changeSortType, (state, action) => {
      const {sortType} = action.payload;
      state.currentSortType = sortType;
    });
});

export {app};
