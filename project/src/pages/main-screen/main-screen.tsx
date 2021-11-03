import cn from 'classnames';
import { connect, ConnectedProps } from 'react-redux';
import CitiesMenu from '../../components/cities-menu/cities-menu';
import MainEmpty from '../../components/empty-main/empty-main';
import Header from '../../components/header/header';
import OffersBoard from '../../components/offers-board/offers-board';
import { State } from '../../types/state';

const mapStateToProps = ({currentCity, cardList}: State) => ({
  currentCity,
  cardList,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentsProps = PropsFromRedux;


function Main({currentCity, cardList}: ConnectedComponentsProps): JSX.Element {
  const cards = cardList.filter((card) => card.city.name === currentCity);

  const containerClass = cn('page__main page__main--index', {
    'page__main--index-empty' : !cards.length,
  });

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

export {Main};
export default connector(Main);
