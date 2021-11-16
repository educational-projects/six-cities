import { AppRoute, AuthorizationStatus } from '../const';
import { ActionType } from '../types/action';
import { UsersComments } from '../types/comment';
import { Offer, Offers } from '../types/offer';
import { User } from '../types/user';

export const changeCity = (city: string) => ({
  type: ActionType.ChangeCity,
  payload: city,
} as const);

export const changeSortType = (sortType: string) => ({
  type: ActionType.ChangeSortType,
  payload: sortType,
} as const);

export const changeUserData = (userData: User) => ({
  type: ActionType.ChangeUserData,
  payload: userData,
} as const);

export const loadCardsRequest = () => ({
  type: ActionType.LoadCardsRequest,
} as const);

export const loadCardsSuccess = (cards: Offers) => ({
  type: ActionType.LoadCardsSuccess,
  payload: cards,
} as const);

export const loadCardsError = () => ({
  type: ActionType.LoadCardsError,
} as const);

export const loadOfferRequest = () => ({
  type: ActionType.LoadOfferRequest,
} as const);

export const loadOfferSuccess = (offer: Offer) => ({
  type: ActionType.LoadOfferSuccess,
  payload: offer,
} as const);

export const loadOfferError = () => ({
  type: ActionType.LoadOfferError,
} as const);

export const loadNearbyRequest = () => ({
  type: ActionType.LoadNearbyRequest,
} as const);

export const loadNearbySuccess = (nearOffers: Offers) => ({
  type: ActionType.LoadNearbySuccess,
  payload: nearOffers,
} as const);

export const loadNearbyError = () => ({
  type: ActionType.LoadNearbyError,
} as const);

export const loadCommentsRequets = () => ({
  type: ActionType.LoadCommentsRequets,
} as const);

export const loadCommentsSuccess = (comments: UsersComments) => ({
  type: ActionType.LoadCommentsSuccess,
  payload: comments,
} as const);

export const loadCommentsError = () => ({
  type: ActionType.LoadCommentsError,
} as const);

export const loadFavoritesOffersRequets = () => ({
  type: ActionType.LoadFavoritesOffersRequets,
} as const);

export const loadFavoritesOffersSuccess = (offers: Offers) => ({
  type: ActionType.LoadFavoritesOffersSuccess,
  payload: offers,
} as const);

export const loadFavoritesOffersError = () => ({
  type: ActionType.LoadFavoritesOffersError,
} as const);

export const changeFavoriteStatusRequest = () => ({
  type: ActionType.ChangeFavoriteStatusRequest,
} as const);

export const changeFavoriteStatusSucces = () => ({
  type: ActionType.ChangeFavoriteStatusSucces,
} as const);

export const sendCommentsRequest = () => ({
  type: ActionType.SendCommentsRequest,
} as const);

export const sendCommentsSuccess = (comments: UsersComments) => ({
  type: ActionType.SendCommentsSuccess,
  payload: comments,
} as const);

export const requireAuthorizationRequest = () => ({
  type: ActionType.RequireAuthorizationRequest,
} as const);

export const requireAuthorizationSucces = (authStatus: AuthorizationStatus) => ({
  type: ActionType.RequireAuthorizationSucces,
  payload: authStatus,
} as const);

export const requireAuthorizationError = (authStatus: AuthorizationStatus) => ({
  type: ActionType.RequireAuthorizationError,
  payload: authStatus,
} as const);

export const requireLogoutRequest = () => ({
  type: ActionType.RequireLogoutRequest,
} as const);

export const requireLogoutSucces = () => ({
  type: ActionType.RequireLogoutSucces,
} as const);

export const requireLogoutError = () => ({
  type: ActionType.RequireLogoutError,
} as const);

export const redirectToRoute = (url: AppRoute) => ({
  type: ActionType.RedirectToRoute,
  payload: url,
}) as const;

export const redirectToBack = () => ({
  type: ActionType.RedirectToBack,
}) as const;


