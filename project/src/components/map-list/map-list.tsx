import cn from 'classnames';
import { ReactNode } from 'react';

type MapListProps = {
  children: ReactNode;
  listType?: string;
}

function MapList({children, listType = ''}: MapListProps): JSX.Element {
  const listClasses = cn('map', {
    'cities__map' : listType === '',
    'property__map' : listType === 'property',
  });

  return (
    <section className={listClasses}>
      {children}
    </section>
  );
}

export default MapList;
