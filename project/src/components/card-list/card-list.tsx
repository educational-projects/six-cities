import { useState } from 'react';
import { Offers } from '../../types/offer';
import ItemCard from '../card/card';

type CardListProps = {
  cards: Offers
}

function CardList({cards}: CardListProps): JSX.Element {
  const [, setActivCard] = useState<number | null>(null);

  const handleActivCard = (id: number | null) => {
    setActivCard(id);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {cards.map((card) => <ItemCard card={card} key={card.id} onActivCard={handleActivCard}/>)}
    </div>
  );
}

export default CardList;
