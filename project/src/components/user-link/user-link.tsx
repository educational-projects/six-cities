type UserLinkProps = {
  userEmail: string
}

function UserLink({userEmail}: UserLinkProps): JSX.Element {
  return (
    <li className="header__nav-item user">
      <a className="header__nav-link header__nav-link--profile" href="/#">
        <div className="header__avatar-wrapper user__avatar-wrapper">
        </div>
        <span className="header__user-name user__name">{userEmail}</span>
      </a>
    </li>
  );
}

export default UserLink;
