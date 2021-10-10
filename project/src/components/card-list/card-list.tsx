import ItemCard from '../card/card';

type CardListProps = {
  cards: number[]
}

function CardList({cards}: CardListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {cards.map((index) => <ItemCard key={index}/>)}
    </div>
  );
}

export default CardList;
