import { сitiesList } from '../../const';
import City from '../city/city';

function CitiesMenu(): JSX.Element {

  return (
    <>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul
            className="locations__list tabs__list"
          >
            {сitiesList.map((city) => (
              <City
                city={city}
                key={city}
              />
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}

export default CitiesMenu;
