import { Offers } from '../../types/offer';
import ItemCard from '../card/card';

type CardListProps = {
  cards: Offers
  onActivCard?: (id: number | null) => void;
}

function CardList({cards, onActivCard}: CardListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {cards.map((card) => (<ItemCard card={card} key={card.id} onActivCard={onActivCard}/>))}
    </div>
  );
}

export default CardList;
