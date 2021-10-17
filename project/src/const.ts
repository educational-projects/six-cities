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

export const offersType: {[key: string]: string} = {
  apartment: 'Apartment',
  room: 'Room',
  house: 'House',
  hotel: 'Hotel',
};

export const cardArticleType: {[key: string]: string} = {
  cities: 'cities__place-card',
  favorites: 'favorites__card',
  near: 'near-places__card',
};
