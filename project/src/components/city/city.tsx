import cn from 'classnames';
import { connect, ConnectedProps } from 'react-redux';
import { Dispatch } from 'redux';
import { State } from '../../types/state';
import { changeCity } from '../../store/action';
import { Actions } from '../../types/action';

type CityProps = {
  city: string;
}

const mapStateToProps = ({currentCity}: State) => ({
  currentCity,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onChangeCity(city: string) {
    dispatch(changeCity(city));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentsProps = PropsFromRedux & CityProps;

function City({city, currentCity, onChangeCity}: ConnectedComponentsProps): JSX.Element {
  const linkClasses = cn('locations__item-link tabs__item', {
    'tabs__item--active': city === currentCity,
  });

  return (
    <li
      className="locations__item"
      onClick={() => onChangeCity(city)}
    >
      <a className={linkClasses} href="/#">
        <span>{city}</span>
      </a>
    </li>
  );
}

export {City};

export default connector(City);
