import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import Favorites from '../../pages/favorites-screen/favorites-screen';
import Login from '../../pages/login-screen/login-screen';
import Main from '../../pages/main-screen/main-screen';
import NotFound from '../../pages/not-found/not-found-screen';
import Property from '../../pages/property-screen/property-screen';
import { UsersComments } from '../../types/comment';
import { Offers } from '../../types/offer';
import PrivateRoute from '../private-route/private-route';

type AppScreenProps = {
  cards: Offers
  comments: UsersComments
}

function App({cards, comments}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <Main cards={cards}/>
        </Route>
        <Route exact path={AppRoute.Login}>
          <Login/>
        </Route>
        <PrivateRoute exact
          path={AppRoute.Favorites}
          render={() => <Favorites favoritesCards={cards}/>}
          authorizationStatus={AuthorizationStatus.Auth}
        >
        </PrivateRoute>
        <Route exact path={AppRoute.Room}>
          <Property
            cards={cards}
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

export default App;
