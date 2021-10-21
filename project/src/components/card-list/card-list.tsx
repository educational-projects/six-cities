import { Offers } from '../../types/offer';
import ItemCard from '../card/card';

type CardListProps = {
  cards: Offers
  onActiveCard?: (id: number | null) => void;
  typeList?: string;
  typeCard?: string
}

const defaultClass = 'cities__places-list places__list tabs__content';
const nearClass = 'near-places__list places__list';

function CardList({cards, onActiveCard, typeList='default', typeCard}: CardListProps): JSX.Element {
  const defaultList = typeList === 'default';

  return (
    <div className={defaultList ? defaultClass : nearClass}>
      {cards.map((card) => (<ItemCard card={card} key={card.id} typeCard={typeCard} onActiveCard={onActiveCard}/>))}
    </div>
  );
}

export default CardList;


