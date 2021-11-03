import { APIRoute } from '../const';
import { ThunkActionResult } from '../types/action';
import { BackOffers } from '../types/offer';
import { adaptToClient } from '../utils';
import { loadCardsError, loadCardsRequest, loadCardsSuccess } from './action';

export const fetchCardsAction = (): ThunkActionResult => (
  async (dispatch, _getState, api): Promise<void> => {
    dispatch(loadCardsRequest());
    try {
      const {data} = await api.get<BackOffers>(APIRoute.Cards);
      dispatch(loadCardsSuccess(data.map(adaptToClient)));
    } catch {
      dispatch(loadCardsError());
    }
  }
);
