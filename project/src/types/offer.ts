export type City = {
  location: {
    latitude: number,
    longitude: number,
    zoom: number,
  },
  name: string,
}

export type Host = {
  avatarUrl: string,
  'avatar_url'?: string
  id: number,
  isPro: boolean,
  'is_pro'?: boolean
  name: string,
}

export type Location = {
  latitude: number,
  longitude: number,
  zoom: number,
}

export type Offer = {
  bedrooms: number,
  city: City,
  description: string,
  goods: string[],
  host: Host,
  id: number,
  images: string[],
  isFavorite: boolean,
  ['is_favorite']?: boolean,
  isPremium: boolean,
  ['is_premium']?: boolean,
  location: Location,
  maxAdults: number,
  ['max_adults']?: number
  previewImage: string,
  ['preview_image']?: string
  price: number,
  rating: number,
  title: string,
  type: string,
}

export type Offers = Offer[]

export type BackOffer = {
  bedrooms: number,
  city: {
    location: {
      latitude: number,
      longitude: number,
      zoom: number
    },
    name: string
  },
  description: string,
  goods: string[],
  host: {
    'avatar_url': string,
    id: number,
    'is_pro': boolean,
    name: string
  },
  id: number,
  images: string[],
  'is_favorite': boolean,
  'is_premium': boolean,
  location: {
    latitude: number,
    longitude: number,
    zoom: number
  },
  'max_adults': number,
  'preview_image': string,
  price: number,
  rating: number,
  title: string,
  type: string
}

export type BackOffers = BackOffer[]
