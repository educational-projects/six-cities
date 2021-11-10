import { AppRoute, AuthorizationStatus } from '../const';
import { ActionType } from '../types/action';
import { Offers } from '../types/offer';

export const changeCity = (city: string) => ({
  type: ActionType.ChangeCity,
  payload: city,
} as const);

export const changeSortType = (sortType: string) => ({
  type: ActionType.ChangeSortType,
  payload: sortType,
} as const);

export const changeUserEmail = (userEmail: string) => ({
  type: ActionType.ChangeUserEmail,
  payload: userEmail,
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


