import CardListComponent from '../../components/card-list/card-list';
import CitiesComponent from '../../components/cities-menu/cities-menu';
import HeaderComponent from '../../components/header/header';
import SortingComponent from '../../components/sorting/sorting';

type MainScreenProps = {
  cards: number[]
}

function MainScreen({cards}: MainScreenProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <HeaderComponent/>

      <main className="page__main page__main--index">
        <CitiesComponent/>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">312 places to stay in Amsterdam</b>
              <SortingComponent/>
              <CardListComponent cards={cards}/>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map"/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
