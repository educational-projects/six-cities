import FavoriteItemList from '../../components/favorite-item-list/favorite-item-list';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { Offers } from '../../types/offer';

type FavoritesProps = {
  favoritesCards: Offers;
}

function Favorites({favoritesCards}: FavoritesProps): JSX.Element {
  const favoritesList = favoritesCards.filter((card) => card.isFavorite);
  const cityesList = Array.from(new Set(favoritesList.map(({city}) => city.name)));

  return (
    <div className="page">
      <Header/>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoriteItemList cities={cityesList} cards={favoritesList} />
          </section>
        </div>
      </main>

      <Footer/>
    </div>
  );
}

export default Favorites;
