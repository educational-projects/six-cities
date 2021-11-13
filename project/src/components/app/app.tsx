import { connect, ConnectedProps } from 'react-redux';
import {Router as BrowserRouter, Switch, Route} from 'react-router-dom';
import { AppRoute } from '../../const';
import Favorites from '../../pages/favorites-screen/favorites-screen';
import Login from '../../pages/login-screen/login-screen';
import Main from '../../pages/main-screen/main-screen';
import NotFound from '../../pages/not-found/not-found-screen';
import Property from '../../pages/property-screen/property-screen';
import { State } from '../../types/state';
import PrivateRoute from '../private-route/private-route';
import browserHistory from '../../browser-history';

const mapStateToProps = ({cardList}: State) => ({
  cardList,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function App({cardList}: PropsFromRedux): JSX.Element {
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <Main/>
        </Route>
        <Route exact path={AppRoute.Login}>
          <Login/>
        </Route>
        <PrivateRoute exact
          path={AppRoute.Favorites}
          render={() => <Favorites favoritesCards={cardList}/>}
        >
        </PrivateRoute>
        <Route exact path={AppRoute.Room}>
          <Property />
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
