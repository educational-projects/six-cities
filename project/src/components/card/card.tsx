import { Link } from 'react-router-dom';
import { offersType } from '../../const';
import { Offer } from '../../types/offer';

type ItemCardProps = {
  card: Offer,
}

function ItemCard({card}: ItemCardProps): JSX.Element {
  const {isPremium, isFavorite, previewImage, price, type, rating, title} = card;
  const offerRating = `${Math.round(rating) * 20}%`;
  return (
    <article className="cities__place-card place-card">
      {isPremium &&
            <div className="place-card__mark">
              <span>Premium</span>
            </div>}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to="/">
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Apartament"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button button ${isFavorite && 'place-card__bookmark-button--active'}`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: offerRating}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to="/">{title}</Link>
        </h2>
        <p className="place-card__type">{offersType[type]}</p>
      </div>
    </article>
  );
}

export default ItemCard;
