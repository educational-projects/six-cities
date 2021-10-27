import { Host } from './offer';

export type UserComment = {
  comment: string,
  date: string,
  id: number,
  rating: number,
  user: Host,
}

export type UsersComments = UserComment[]


