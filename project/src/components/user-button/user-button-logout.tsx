import { connect, ConnectedProps } from 'react-redux';
import { ThunkAppDispatch } from '../../types/action';
import { logoutAction } from '../../store/api-actions';

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  onclick() {
    dispatch(logoutAction());
  },
});

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function ButtonLogout({onclick}: PropsFromRedux): JSX.Element {
  return (
    <li
      className="header__nav-item"
      onClick={onclick}
    >
      <a className="header__nav-link" href="/#">
        <span className="header__signout">Sign out</span>
      </a>
    </li>
  );
}

export {ButtonLogout};
export default connector(ButtonLogout);
