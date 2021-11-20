import { createAction } from '@reduxjs/toolkit';
import { AppRoute, AuthorizationStatus } from '../const';
import { ActionType } from '../types/action';
import { UsersComments } from '../types/comment';
import { Offer, Offers } from '../types/offer';
import { User } from '../types/user';

export const changeCity = createAction(
  ActionType.ChangeCity,
  (city: string) => ({
    payload: {
      city,
    },
  }),
);

export const changeSortType = createAction(
  ActionType.ChangeSortType,
  (sortType: string) => ({
    payload: {
      sortType,
    },
  }),
);

export const changeUserData = createAction(
  ActionType.ChangeUserData,
  (userData: User) => ({
    payload: {
      userData,
    },
  }),
);

export const loadCardsRequest = createAction(ActionType.LoadCardsRequest);

export const loadCardsSuccess = createAction(
  ActionType.LoadCardsSuccess,
  (cards: Offers) => ({
    payload: {
      cards,
    },
  }),
);

export const loadCardsError = createAction(ActionType.LoadCardsError);

export const loadOfferRequest = createAction(ActionType.LoadOfferRequest);

export const loadOfferSuccess = createAction(
  ActionType.LoadOfferSuccess,
  (offer: Offer) => ({
    payload: {
      offer,
    },
  }),
);

export const loadOfferError = createAction(ActionType.LoadOfferError);

export const loadNearbyRequest = createAction(ActionType.LoadNearbyRequest);

export const loadNearbySuccess = createAction(
  ActionType.LoadNearbySuccess,
  (nearOffers: Offers) => ({
    payload: {
      nearOffers,
    },
  }),
);

export const loadNearbyError = createAction(ActionType.LoadNearbyError);

export const loadCommentsRequets = createAction(ActionType.LoadCommentsRequets);

export const loadCommentsSuccess = createAction(
  ActionType.LoadCommentsSuccess,
  (usersComments: UsersComments) => ({
    payload: {
      usersComments,
    },
  }),
);

export const loadCommentsError = createAction(ActionType.LoadCommentsError);

export const loadFavoritesOffersRequets = createAction(ActionType.LoadFavoritesOffersRequets);

export const loadFavoritesOffersSuccess = createAction(
  ActionType.LoadFavoritesOffersSuccess,
  (favoritesOffers: Offers) => ({
    payload: {
      favoritesOffers,
    },
  }),
);

export const loadFavoritesOffersError = createAction(ActionType.LoadFavoritesOffersError);

export const changeFavoriteStatusRequest = createAction(ActionType.ChangeFavoriteStatusRequest);

export const changeFavoriteStatusSucces = createAction(ActionType.ChangeFavoriteStatusSucces);

export const sendCommentsRequest = createAction(ActionType.SendCommentsRequest);

export const resetOfferError = createAction(ActionType.ResetOfferError);

export const sendCommentsSuccess = createAction(
  ActionType.SendCommentsSuccess,
  (userComment: UsersComments) => ({
    payload: {
      userComment,
    },
  }),
);

export const requireAuthorizationRequest = createAction(ActionType.RequireAuthorizationRequest);

export const requireAuthorizationSucces = createAction(
  ActionType.RequireAuthorizationSucces,
  (authStatus: AuthorizationStatus) => ({
    payload: {
      authStatus,
    },
  }),
);

export const requireAuthorizationError = createAction(
  ActionType.RequireAuthorizationError,
  (authStatus: AuthorizationStatus) => ({
    payload: authStatus,
  }),
);

export const requireLogoutRequest = createAction(ActionType.RequireLogoutRequest);

export const requireLogoutSucces = createAction(ActionType.RequireLogoutSucces);

export const requireLogoutError = createAction(ActionType.RequireLogoutError);

export const redirectToRoute = createAction(
  ActionType.RedirectToRoute,
  (url: AppRoute) => ({
    payload: url,
  }),
);

export const redirectToBack = createAction(ActionType.RedirectToBack);


