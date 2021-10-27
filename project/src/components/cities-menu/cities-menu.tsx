import City from '../city/city';

const CITIES_LIST = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

function CitiesMenu(): JSX.Element {

  return (
    <>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul
            className="locations__list tabs__list"
          >
            {CITIES_LIST.map((city) => (
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
