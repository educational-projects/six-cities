import { useState } from 'react';
import CardList from '../../components/card-list/card-list';
import CitiesMenu from '../../components/cities-menu/cities-menu';
import Header from '../../components/header/header';
import MapList from '../../components/map-list/map-list';
import Map from '../../components/map/map';
import Sorting from '../../components/sorting/sorting';
import { Offers } from '../../types/offer';
import { sort } from '../../utils';

type MainScreenProps = {
  cards: Offers
  currentSortType: string
}

function Main({cards, currentSortType}: MainScreenProps): JSX.Element {
  const cityName = cards[0].city.name;

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

  return (
    <div className="page page--gray page--main">
      <Header/>

      <main className="page__main page__main--index">
        <CitiesMenu/>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{cards.length} 312 places to stay in {cityName}</b>
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
      </main>
    </div>
  );
}


export default Main;
