// import { useState } from 'react';
import { Offers } from '../../types/offer';
import ItemCard from '../card/card';

type CardListProps = {
  cards: Offers
}

function CardList({cards}: CardListProps): JSX.Element {
  // const [focusCard, setFocusCard] = useState(cards[0].id);

  return (
    <div className="cities__places-list places__list tabs__content">
      {cards.map((card) => <ItemCard card={card} key={card.id}/>)}
    </div>
  );
}

export default CardList;
