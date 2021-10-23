import { useState } from 'react';
import { Redirect, useParams } from 'react-router';
import CardList from '../../components/card-list/card-list';
import CommentList from '../../components/comment-list/comment-list';
import Header from '../../components/header/header';
import HostList from '../../components/host-list/host-list';
import ImageList from '../../components/image-list/image-list';
import Map from '../../components/map/map';
import OptionList from '../../components/option-list/option-list';
import { offersType } from '../../const';
import { UsersComments } from '../../types/comment';
import { Offers } from '../../types/offer';

type PropertyProps = {
  cards: Offers;
  comments: UsersComments
}

function Property({cards, comments}: PropertyProps): JSX.Element {
  const { id } = useParams() as { id: string};

  const [activeCard, setActivCard] = useState<number | null>(null);
  const handleActiveCard = (cardId: number | null) => {
    setActivCard(cardId);
  };

  const currentCard = cards.find((card) => card.id === Number(id));
  const otherCards = cards.slice(0,3);

  if (!currentCard) {
    return <Redirect to="/"/>;
  }

  return (
    <div className="page">
      <Header/>

      <main className="page__main page__main--property">
        <section className="property">
          <ImageList images={currentCard?.images} type={currentCard?.type}/>
          <div className="property__container container">
            <div className="property__wrapper">
              {currentCard?.isPremium && (
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {currentCard?.title}
                </h1>
                <button className={`property__bookmark-button  button ${currentCard?.isFavorite && 'property__bookmark-button--active'}`} type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: '80%'}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">${currentCard?.rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {offersType[currentCard?.type]}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {`${currentCard?.bedrooms} Bedrooms`}
                </li>
                <li className="property__feature property__feature--adults">
                  {`Max ${currentCard?.maxAdults} adults`}
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{currentCard?.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <OptionList options={currentCard?.goods}/>
              <HostList host={currentCard?.host} description={currentCard?.description}/>
              <CommentList comments={comments}/>
            </div>
          </div>
          <section className="property__map map">
            <Map cards={otherCards} activeCard={activeCard}/>
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <CardList
              cards={otherCards}
              listType={'near'}
              cardType={'near'}
              onActiveCard={handleActiveCard}
            />
          </section>
        </div>
      </main>
    </div>
  );
}

export default Property;
