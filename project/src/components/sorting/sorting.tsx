import cn from 'classnames';
import { useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Dispatch } from 'redux';
import { SortType } from '../../const';
import { changeSortType } from '../../store/action';
import { Actions } from '../../types/action';
import { State } from '../../types/state';

const mapStateToProps = ({currentSortType}: State) => ({
  currentSortType,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onChangeSortType(sortType: string) {
    dispatch(changeSortType(sortType));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>
type ConnectedComponentsProps = PropsFromRedux

function Sorting({currentSortType, onChangeSortType}: ConnectedComponentsProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  const sortedType = Object.values(SortType);

  const listClasses = cn('places__options places__options--custom', {
    'places__options--opened' : isOpen === true,
  });

  const handleClickItem = (sortType: string) => {
    onChangeSortType(sortType);
    setIsOpen(!isOpen);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">
        Sort by
      </span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={() => setIsOpen(!isOpen)}
      >
        {currentSortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"/>
        </svg>
      </span>
      <ul className={listClasses}>
        {sortedType.map((title) => (
          <li key={title}
            className={`places__option ${currentSortType === title && 'places__option--active'}`}   //нужно как-то красивее сделать
            tabIndex={0}
            onClick={() => handleClickItem(title)}
          >
            {title}
          </li>
        ))}
      </ul>
    </form>
  );
}

export {Sorting};
export default connector(Sorting);
