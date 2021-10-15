// import { CardArticleType, OfferType } from './types/const';

export type ObjectStrings = {
  [key: string]: string
}

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

export const offersType: ObjectStrings = {
  apartment: 'Apartment',
  room: 'Room',
  house: 'House',
  hotel: 'Hotel',
};

export const cardArticleType: ObjectStrings = {
  cities: 'cities__place-card',
  favorites: 'favorites__card',
  near: 'near-places__card',
};
