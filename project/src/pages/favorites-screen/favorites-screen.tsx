import cn from 'classnames';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FavoritesBoard from '../../components/favorites-board/favorites-board';
import FavoritesEmpty from '../../components/favorites-empty/favoristes-empty';
import Loader from '../../pages/loading-screen/loading-screen';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { fetchFavoritesOffersAction } from '../../store/api-actions';
import FallbackError from '../fallback-error/fallback-error';
import { getFavoritesOffers, getFavoritesOffersError, getFavoritesOffersLoading } from '../../store/offers/selectors';

function Favorites(): JSX.Element {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFavoritesOffersAction());
  }, [dispatch]);

  const FavoritesOffers = useSelector(getFavoritesOffers);
  const FavoritesOffersLoading = useSelector(getFavoritesOffersLoading);
  const FavoritesOffersError = useSelector(getFavoritesOffersError);

  if (FavoritesOffersLoading) {
    return <Loader/>;
  }

  if (FavoritesOffersError) {
    return <FallbackError/>;
  }

  const favoritesList = FavoritesOffers.filter((card) => card.isFavorite);
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
