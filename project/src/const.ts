export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Room = '/offer/:id',
  NotFound = ''
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

export enum APIRoute  {
  Cards = '/hotels',
  Login = '/login',
  Logout = '/logout',
  Nearby = '/nearby',
  Comments = '/comments',
  Favorites = '/favorite'
}

export const offersType: {[key: string]: string} = {
  apartment: 'Apartment',
  room: 'Room',
  house: 'House',
  hotel: 'Hotel',
} as const;

export const ratingStarSetting: {[key: string]: string} = {
  1: 'terribly',
  2: 'badly',
  3: 'not bad',
  4: 'good',
  5: 'perfect',
} as const;

export const SortType = {
  POPULAR: 'Popular',
  PRICE_UP: 'Price: low to high',
  PRICE_DOWN: 'Price: high to low',
  RATING_DOWN: 'Top rated first',
} as const;

export const сitiesList = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];
