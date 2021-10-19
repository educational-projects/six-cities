import { useState } from 'react';
import CardList from '../../components/card-list/card-list';
import CitiesMenu from '../../components/cities-menu/cities-menu';
import Header from '../../components/header/header';
import Map from '../../components/map/map';
import Sorting from '../../components/sorting/sorting';
import { Offers } from '../../types/offer';

type MainScreenProps = {
  cards: Offers
}

function Main({cards}: MainScreenProps): JSX.Element {
  const [activCard, setActivCard] = useState<number | null>(null);
  const handleActivCard = (id: number | null) => {
    setActivCard(id);
  };

  return (
    <div className="page page--gray page--main">
      <Header/>

      <main className="page__main page__main--index">
        <CitiesMenu/>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">312 places to stay in Amsterdam</b>
              <Sorting/>
              <CardList cards={cards} onActivCard={handleActivCard}/>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map cards={cards} activCard={activCard}/>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
