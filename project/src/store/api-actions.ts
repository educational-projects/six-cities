import { APIRoute, AuthorizationStatus } from '../const';
import { ThunkActionResult } from '../types/action';
import { BackOffers } from '../types/offer';
import { adaptToClient } from '../utils';
import { loadCardsError, loadCardsRequest, loadCardsSuccess, requireAuthorizationRequest, requireAuthorizationSucces } from './action';

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

export const checkAuthAction = (): ThunkActionResult => (
  async (dispatch, _getState, api) => {
    dispatch(requireAuthorizationRequest());
    await api.get(APIRoute.Login)
      .then(() => {
        dispatch(requireAuthorizationSucces(AuthorizationStatus.Auth));
      });
  }
);
