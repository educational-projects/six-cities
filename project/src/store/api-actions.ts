import { APIRoute } from '../const';
import { ThunkActionResult } from '../types/action';
import { BackOffer, BackOffers, Offer } from '../types/offer';
import { loadCards } from './action';

export const fetchCardsAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<BackOffers>(APIRoute.Cards);
    dispatch(loadCards(data.map((card) => adaptToClient(card)))); //ДОВОЛЬНА СЛОЖНАЯ СТРОЧКА НА МОЙ ВЗГЛЯД
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
