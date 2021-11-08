import { connect, ConnectedProps } from 'react-redux';
import { AuthorizationStatus } from '../../const';
import { State } from '../../types/state';
import cn from 'classnames';

const mapStateToProps = ({authorizationStatus, userEmail}: State) => ({
  authorizationStatus,
  userEmail,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentsProps = PropsFromRedux;

function UserLogin({authorizationStatus, userEmail}: ConnectedComponentsProps): JSX.Element {
  const liClass = cn('header__nav-item', {
    'user' : authorizationStatus !== AuthorizationStatus.Auth,
  });
  const aClass = cn('header__nav-link', {
    'header__nav-link--profile' : authorizationStatus !== AuthorizationStatus.Auth,
  });

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        {authorizationStatus === AuthorizationStatus.Auth ?
          <li className="header__nav-item user">
            <a className="header__nav-link header__nav-link--profile" href="/#">
              <div className="header__avatar-wrapper user__avatar-wrapper">
              </div>
              <span className="header__user-name user__name">{userEmail}</span>
            </a>
          </li>
          :
          ''}
        <li className={liClass}>
          <a className={aClass} href="/#">
            {authorizationStatus === AuthorizationStatus.Auth ?
              <span className="header__signout">Sign out</span>
              :
              <>
                <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                <span className="header__login">Sign in</span>
              </>}
          </a>
        </li>
      </ul>
    </nav>
  );
}

export {UserLogin};
export default connector(UserLogin);
