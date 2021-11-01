import { APIRoute } from '../const';
import { ThunkActionResult } from '../types/action';
import { Offers } from '../types/offer';
import { loadCards } from './action';

export const fetchCardsAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<Offers>(APIRoute.Cards);
    dispatch(loadCards(data));
  };
