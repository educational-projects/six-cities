import { useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import MainEmptyScreen from '../../pages/main-screen/main-empty-screen';
import { Offers } from '../../types/offer';
import { State } from '../../types/state';
import { sort } from '../../utils';
import CardList from '../card-list/card-list';
import MapList from '../map-list/map-list';
import Map from '../map/map';
import Sorting from '../sorting/sorting';

type OffersBoardProps = {
  cards: Offers
}

const mapStateToProps = ({currentCity, currentSortType}: State) => ({
  currentCity,
  currentSortType,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentsProps = PropsFromRedux & OffersBoardProps;


function OffersBoard({cards, currentCity, currentSortType}: ConnectedComponentsProps): JSX.Element {
  const [activeCard, setActivCard] = useState<number | null>(null);

  const handleActiveCard = (id: number | null) => {
    setActivCard(id);
  };

  const getSortedCards = (sortType: string, cardsList: Offers) => {
    switch(sortType) {
      case sortType:
        return cardsList.slice().sort(sort[sortType]);
      default:
        return cardsList;
    }
  };

  const sortedCards = getSortedCards(currentSortType, cards);
  const cardsCount = sortedCards.length;

  if (!cards.length) {
    return <MainEmptyScreen currentCity={currentCity}/>;
  }

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
          <MapList className={'cities__map'}>
            <Map
              cards={cards}
              activeCard={activeCard}
            />
          </MapList>
        </div>
      </div>
    </div>
  );
}

export {OffersBoard};
export default connector(OffersBoard);
