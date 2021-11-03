import dayjs from 'dayjs';
import { SortType } from './const';
import { BackOffer, Offer } from './types/offer';

export const getRating = (rating: number): string => `${(Math.round(rating) / 5) * 100}%`;

export const getFormatDate = (date: string, format: string): string => dayjs(date).format(format);

export const sort = {
  [SortType.PRICE_DOWN]: (cardA: Offer, cardB: Offer): number => cardB.price - cardA.price,
  [SortType.PRICE_UP]: (cardA: Offer, cardB: Offer): number => cardA.price - cardB.price,
  [SortType.RATING_DOWN]: (cardA: Offer, cardB: Offer): number => cardB.rating - cardA.rating,
};

export const adaptToClient = (card: BackOffer): Offer => {
  const adaptedCard = Object.assign(
    {},
    card,
    {
      isFavorite: card.is_favorite,
      isPremium: card.is_premium,
      maxAdults: card.max_adults,
      previewImage: card.preview_image,
    },
    {
      host: {
        avatarUrl: card.host.avatar_url,
        isPro: card.host.is_pro,
      },
    },
  ) as Offer;

  delete adaptedCard.is_favorite;
  delete adaptedCard.is_premium;
  delete adaptedCard.max_adults;
  delete adaptedCard.preview_image;
  delete adaptedCard.host.avatar_url;
  delete adaptedCard.host.is_pro;

  return adaptedCard;
};
