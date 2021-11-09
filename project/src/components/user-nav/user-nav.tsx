import { connect, ConnectedProps } from 'react-redux';
import { AuthorizationStatus } from '../../const';
import { State } from '../../types/state';
import UserLink from '../user-link/user-link';
import UserButton from '../user-button/user-button';

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
        <UserButton authorizationStatus={authorizationStatus}/>
      </ul>
    </nav>
  );
}

export {UserLogin};
export default connector(UserLogin);
