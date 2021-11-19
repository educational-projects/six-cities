import { useSelector } from 'react-redux';
import { AuthorizationStatus } from '../../const';
import UserLink from '../user-link/user-link';
import ButtonLogout from '../user-button/user-button-logout';
import ButtonSignIn from '../user-button/user-button-authorization';
import { getAuthorizationStatus, getUserData } from '../../store/user/selectors';

function UserLogin(): JSX.Element {
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const userData = useSelector(getUserData);
  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        {authorizationStatus === AuthorizationStatus.Auth && (
          <UserLink
            userEmail={userData?.email}
            userAvatar={userData?.avatarUrl}
          />
        )}
        {authorizationStatus === AuthorizationStatus.Auth ? <ButtonLogout/> : <ButtonSignIn/>}
      </ul>
    </nav>
  );
}

export default UserLogin;
