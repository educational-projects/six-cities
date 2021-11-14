import { useEffect, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { useParams } from 'react-router';
import Loader from '../../pages/loading-screen/loading-screen';
import CardList from '../../components/card-list/card-list';
import CommentList from '../../components/comment-list/comment-list';
import Header from '../../components/header/header';
import HostList from '../../components/host-list/host-list';
import ImageList from '../../components/image-list/image-list';
import Map from '../../components/map/map';
import OptionList from '../../components/option-list/option-list';
import { offersType } from '../../const';
import { fetchCommentsAction, fetchOfferAction, fetchOffersNearby } from '../../store/api-actions';
import { ThunkAppDispatch } from '../../types/action';
import { State } from '../../types/state';
import NotFound from '../not-found/not-found-screen';

const mapStateToProps = (
  {offer, offerLoading, offerError, offersNearby, offersNearbyError,
    offersNearbyLoading, comments, commentsLoading, commentsError}: State,
) => ({
  offer,
  offerLoading,
  offerError,
  offersNearby,
  offersNearbyError,
  offersNearbyLoading,
  comments,
  commentsLoading,
  commentsError,
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  onLoadCard(id: string) {
    dispatch(fetchOfferAction(id));
    dispatch(fetchOffersNearby(id));
    dispatch(fetchCommentsAction(id));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function Property(
  {offer, offerLoading, offerError, offersNearby, offersNearbyError, offersNearbyLoading,
    comments, commentsLoading, commentsError, onLoadCard}: PropsFromRedux,
): JSX.Element {
  const { id } = useParams() as { id: string};

  const [activeCard, setActivCard] = useState<number | null>(null);
  const handleActiveCard = (cardId: number | null) => {
    setActivCard(cardId);
  };

  useEffect(() =>{
    onLoadCard(id);
  }, [id, onLoadCard]);

  if (offerError || offersNearbyError || commentsError) {
    return <NotFound/>;
  }

  if (offerLoading || offersNearbyLoading || commentsLoading || !offer || !offersNearby) {
    return <Loader/>;
  }

  return (
    <div className="page">
      <Header/>

      <main className="page__main page__main--property">
        <section className="property">
          <ImageList images={offer.images} type={offer.type}/>
          <div className="property__container container">
            <div className="property__wrapper">
              {offer.isPremium && (
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {offer.title}
                </h1>
                <button className={`property__bookmark-button  button ${offer.isFavorite && 'property__bookmark-button--active'}`} type="button">
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
                <span className="property__rating-value rating__value">${offer.rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {offersType[offer.type]}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {`${offer.bedrooms} Bedrooms`}
                </li>
                <li className="property__feature property__feature--adults">
                  {`Max ${offer.maxAdults} adults`}
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{offer.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <OptionList options={offer.goods}/>
              <HostList host={offer.host} description={offer.description}/>
              <CommentList/>
            </div>
          </div>
          <Map
            cards={offersNearby}
            activeCard={activeCard}
            className="property__map"
          />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <CardList
              cards={offersNearby}
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

export default connector(Property);
