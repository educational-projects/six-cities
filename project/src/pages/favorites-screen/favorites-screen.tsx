import cn from 'classnames';
import FavoritesBoard from '../../components/favorites-board/favorites-board';
import FavoritesEmpty from '../../components/favorites-empty/favoristes-empty';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { Offers } from '../../types/offer';

type FavoritesProps = {
  favoritesCards: Offers;
}

function Favorites({favoritesCards}: FavoritesProps): JSX.Element {
  const favoritesList = favoritesCards.filter((card) => card.isFavorite);
  const cityesList = Array.from(new Set(favoritesList.map(({city}) => city.name)));

  const pageClass = cn('page', {
    'page--favorites-empty' : !favoritesList.length,
  });
  const mainClass = cn('page__main', 'page__main--favorites', {
    'page__main--favorites-empty' : !favoritesList.length,
  });

  return (
    <div className={pageClass}>
      <Header/>

      <main className={mainClass}>
        <div className="page__favorites-container container">
          {favoritesList.length ?
            <FavoritesBoard cities={cityesList} favoritesList={favoritesList}/>
            :
            <FavoritesEmpty/> }
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default Favorites;
