import { Offers } from '../../types/offer';
import FavoriteItem from '../favorite-item/favorite-item';

type test = {
  citys: string[],
  cards: Offers,
}

function FavoriteItemList({citys, cards}: test): JSX.Element {
  return (
    <ul className="favorites__list">
      {citys.map((city) => <FavoriteItem city={city} cards={cards} key={city}/>)}
    </ul>
  );
}

export default FavoriteItemList;
