import { Offers } from '../../types/offer';
import ItemCard from '../card/card';

type CardListProps = {
  cards: Offers
  onActiveCard?: (id: number | null) => void;
}

function CardList({cards, onActiveCard}: CardListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {cards.map((card) => (<ItemCard card={card} key={card.id} onActiveCard={onActiveCard}/>))}
    </div>
  );
}

export default CardList;
