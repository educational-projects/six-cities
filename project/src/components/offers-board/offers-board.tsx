import { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { getCurrentCity, getCurrentSortType } from '../../store/app/selectors';
import { Offers } from '../../types/offer';
import { sortMap } from '../../utils';
import CardList from '../card-list/card-list';
import Map from '../map/map';
import Sorting from '../sorting/sorting';

type OffersBoardProps = {
  cards: Offers
}

function OffersBoard({cards}: OffersBoardProps): JSX.Element {
  const currentCity = useSelector(getCurrentCity);
  const currentSortType = useSelector(getCurrentSortType);

  const [activeCard, setActivCard] = useState<number | null>(null);

  const handleActiveCard = useCallback((id: number | null) => {
    setActivCard(id);
  }, []);

  const getSortedCards = (sortType: string, cardsList: Offers) => {
    switch(sortType) {
      case sortType:
        return cardsList.slice().sort(sortMap[sortType]);
      default:
        return cardsList;
    }
  };

  const sortedCards = getSortedCards(currentSortType, cards);
  const cardsCount = sortedCards.length;

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{cardsCount} places to stay in {currentCity}</b>
          <Sorting/>
          <CardList
            cards={sortedCards}
            onActiveCard={handleActiveCard}
          />
        </section>
        <div className="cities__right-section">
          <Map
            cards={cards}
            activeCard={activeCard}
            className="cities__map"
          />
        </div>
      </div>
    </div>
  );
}

export default OffersBoard;
