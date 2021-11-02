import { connect, ConnectedProps } from 'react-redux';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import Favorites from '../../pages/favorites-screen/favorites-screen';
import Loading from '../../pages/loading-screen/loading-screen';
import Login from '../../pages/login-screen/login-screen';
import Main from '../../pages/main-screen/main-screen';
import NotFound from '../../pages/not-found/not-found-screen';
import Property from '../../pages/property-screen/property-screen';
import { UsersComments } from '../../types/comment';
import { State } from '../../types/state';
import PrivateRoute from '../private-route/private-route';

type AppScreenProps = {
  comments: UsersComments
}

const mapStateToProps = ({currentCity, cardList, isDataLoaded}: State) => ({
  currentCity,
  cardList,
  isDataLoaded,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentsProps = PropsFromRedux & AppScreenProps;

function App({comments, currentCity, cardList, isDataLoaded}: ConnectedComponentsProps): JSX.Element {
  const filteredCards = cardList.filter((card) => card.city.name === currentCity);

  if(!isDataLoaded) {
    return (
      <Loading/>
    );
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <Main
            cards={filteredCards}
          />
        </Route>
        <Route exact path={AppRoute.Login}>
          <Login/>
        </Route>
        <PrivateRoute exact
          path={AppRoute.Favorites}
          render={() => <Favorites favoritesCards={cardList}/>}
          authorizationStatus={AuthorizationStatus.Auth}
        >
        </PrivateRoute>
        <Route exact path={AppRoute.Room}>
          <Property
            cards={cardList}
            comments={comments}
          />
        </Route>
        <Route>
          <NotFound/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export { App };

export default connector(App);
