import { useDispatch } from 'react-redux';
import { logoutAction } from '../../store/api-actions';

function ButtonLogout(): JSX.Element {
  const dispatch = useDispatch();

  return (
    <li
      className="header__nav-item"
      onClick={() => dispatch(logoutAction())}
    >
      <a className="header__nav-link" href="/#">
        <span className="header__signout">Sign out</span>
      </a>
    </li>
  );
}

export default ButtonLogout;
