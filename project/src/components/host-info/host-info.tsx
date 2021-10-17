import { Host } from '../../types/offer';

type HostListProps = {
  host: Host;
}

function HostInfo({host}: HostListProps): JSX.Element {
  const {avatarUrl, name, isPro} = host;
  return (
    <div className="property__host-user user">
      <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
        <img className="property__avatar user__avatar" src={avatarUrl} width="74" height="74" alt="Host avatar"/>
      </div>
      <span className="property__user-name">
        {name}
      </span>
      {isPro && (
        <span className="property__user-status">
              Pro
        </span>
      )}
    </div>
  );
}

export default HostInfo;
