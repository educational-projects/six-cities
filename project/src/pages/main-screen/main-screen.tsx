import cn from 'classnames';
import { useSelector } from 'react-redux';
import CitiesMenu from '../../components/cities-menu/cities-menu';
import MainEmpty from '../../components/empty-main/empty-main';
import Header from '../../components/header/header';
import OffersBoard from '../../components/offers-board/offers-board';
import { getCurrentCity } from '../../store/app/selectors';
import { getCardList, getOffersError, getOffersLoading } from '../../store/offers/selectors';
import FallbackError from '../fallback-error/fallback-error';
import Loader from '../loading-screen/loading-screen';

function Main(): JSX.Element {
  const currentCity = useSelector(getCurrentCity);
  const cardList = useSelector(getCardList);
  const offersLoading = useSelector(getOffersLoading);
  const offersError = useSelector(getOffersError);

  const cards = cardList.filter((card) => card.city.name === currentCity);

  const containerClass = cn('page__main page__main--index', {
    'page__main--index-empty' : !cards.length,
  });

  if (offersLoading) {
    return <Loader/>;
  }

  if (offersError) {
    return <FallbackError/>;
  }

  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className={containerClass}>
        <CitiesMenu/>
        {
          cards.length ?
            <OffersBoard cards={cards}/>
            :
            <MainEmpty currentCity={currentCity}/>
        }
      </main>
    </div>
  );
}

export default Main;
