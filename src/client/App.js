import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import PublicRoutes from './routes/PublicRoutes';
import PrivateRoutes from './routes/PrivateRoutes';
import history from './util/history';
import '../../public/assets/style.css';
import '../../public/assets/index.css';
import 'react-widgets/dist/css/react-widgets.css';

const authentication = () =>
  JSON.parse(localStorage.getItem('roles')) ? (
    <Redirect to='/app' />
  ) : (
    <PublicRoutes />
  );

const App = () => {
  return (
    <div>
      <div>
        <Router history={history}>
          <Switch>
            <Route path='/app' component={PrivateRoutes} />
            <Route path='' render={authentication} />
          </Switch>
        </Router>
      </div>
    </div>
  );
};

export default App;
