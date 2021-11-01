import cn from 'classnames';
import BulletinBoard from '../../components/bulletin-board/bulletin-board';
import CitiesMenu from '../../components/cities-menu/cities-menu';
import Header from '../../components/header/header';
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
        <BulletinBoard cards={cards}/>
      </main>
    </div>
  );
}

export default Main;
