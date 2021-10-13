import { CardArticleType, OfferType } from './types/const';

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Room = '/offer/:id',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
}

export const offersType: OfferType = {
  apartment: 'Apartment',
  room: 'Room',
  house: 'House',
  hotel: 'Hotel',
};

export const cardArticleType: CardArticleType = {
  cities: 'cities__place-card',
  favorite: 'favorites__card',
  near: 'near-places__card',
};
// export const cardArticleType: CardArticleType = {
//   default: 'cities__place-card',
//   favorite: 'favorites__card',
//   near: 'near-places__card',
// };
