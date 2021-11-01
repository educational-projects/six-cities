import cn from 'classnames';
import CitiesMenu from '../../components/cities-menu/cities-menu';
import Header from '../../components/header/header';
import OffersBoard from '../../components/offers-board/offers-board';
import { Offers } from '../../types/offer';

type MainScreenProps = {
  cards: Offers
}

function Main({cards}: MainScreenProps): JSX.Element {

  const containerClass = cn('page__main page__main--index', {
    'page__main--index-empty' : !cards.length,
  });

  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className={containerClass}>
        <CitiesMenu/>
        <OffersBoard cards={cards}/>
      </main>
    </div>
  );
}

export default Main;
