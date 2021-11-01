import dayjs from 'dayjs';
import { SortType } from './const';
import { Offer } from './types/offer';

export const getRating = (rating: number): string => `${(Math.round(rating) / 5) * 100}%`;

export const getFormatDate = (date: string, format: string): string => dayjs(date).format(format);

export const sort = {
  [SortType.PRICE_DOWN]: (cardA: Offer, cardB: Offer): number => cardB.price - cardA.price,
  [SortType.PRICE_UP]: (cardA: Offer, cardB: Offer): number => cardA.price - cardB.price,
  [SortType.RATING_DOWN]: (cardA: Offer, cardB: Offer): number => cardB.rating - cardA.rating,
};
