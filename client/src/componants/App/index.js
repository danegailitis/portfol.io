import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import LOGIN from '../Login';
import HOME from '../Home';
import PROFILE from '../Profile'


import * as ROUTES from '../../constants/routes';

const App = () => (
  <Router>
    <div>
      <Route exact path={ROUTES.LANDING} component={HOME} />
      <Route exact path={ROUTES.LOGIN} component={LOGIN} />
      <Route exact path={ROUTES.HOME} component={HOME} />
      <Route exact path={ROUTES.PROFILE} component={PROFILE} />
    </div>
  </Router>
);

//incule under div for nav       <Navigation />
export default App;

//<Route exact path={ROUTES.LOGIN} component={LOGIN} />