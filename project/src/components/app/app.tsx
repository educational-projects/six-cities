import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import MainScreen from '../../pages/main-screen/main-screen';
import NotFoundScreen from '../../pages/not-found/not-found-screen';
import PropertyScreen from '../../pages/property-screen/property-screen';
import PrivateRoute from '../private-route/private-route';

type AppScreenProps = {
  cards: number[]
}

function App({cards}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <MainScreen cards={cards}/>
        </Route>
        <Route exact path={AppRoute['Sign-in']}>
          <LoginScreen/>
        </Route>
        <PrivateRoute exact
          path={AppRoute.Favorites}
          render={() => <FavoritesScreen/>}
          authorizationStatus={AuthorizationStatus.NoAuth}
        >
        </PrivateRoute>
        <Route exact path={AppRoute.Room}>
          <PropertyScreen/>
        </Route>
        <Route>
          <NotFoundScreen/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
