import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import StartPage from '../../pages/start/page';
import DetailsPage from '../../pages/details/page';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={StartPage} />
    // <Route path="details" component={DetailsPage} />
    <Route path="/details/:category/:userId" component={DetailsPage} />
  </Route>
);
