import { connect, ConnectedProps } from 'react-redux';
import { AuthorizationStatus } from '../../const';
import { State } from '../../types/state';
import UserLink from '../user-link/user-link';
import ButtonLogout from '../user-button/user-button-logout';
import ButtonSignIn from '../user-button/user-button-authorization';

const mapStateToProps = ({authorizationStatus, userEmail}: State) => ({
  authorizationStatus,
  userEmail,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function UserLogin({authorizationStatus, userEmail}: PropsFromRedux): JSX.Element {
  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        {
          authorizationStatus === AuthorizationStatus.Auth
          &&
          <UserLink userEmail={userEmail}/>
        }
        {
          authorizationStatus === AuthorizationStatus.Auth
            ?
            <ButtonLogout/>
            :
            <ButtonSignIn/>
        }
      </ul>
    </nav>
  );
}

export {UserLogin};
export default connector(UserLogin);
