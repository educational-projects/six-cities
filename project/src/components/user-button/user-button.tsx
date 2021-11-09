import { AuthorizationStatus } from '../../const';
import cn from 'classnames';

type UserButtonProps = {
  authorizationStatus: AuthorizationStatus
}

function UserButton({authorizationStatus}: UserButtonProps): JSX.Element {
  const liClass = cn('header__nav-item', {
    'user' : authorizationStatus !== AuthorizationStatus.Auth,
  });
  const aClass = cn('header__nav-link', {
    'header__nav-link--profile' : authorizationStatus !== AuthorizationStatus.Auth,
  });
  const spanClass = cn('', {
    'header__login' : authorizationStatus !== AuthorizationStatus.Auth,
    'header__signout' : authorizationStatus === AuthorizationStatus.Auth,
  });
  const buttonText = authorizationStatus === AuthorizationStatus.Auth ? 'Sign out' : 'Sign in';

  return (
    <li className={liClass}>
      <a className={aClass} href="/#">
        {
          authorizationStatus !== AuthorizationStatus.Auth
         &&
          <div className="header__avatar-wrapper user__avatar-wrapper">
          </div>
        }
        <span className={spanClass}>{buttonText}</span>
      </a>
    </li>
  );
}

export default UserButton;
