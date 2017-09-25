import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import {
  createApp,
  createContainer,
  query,
  renderApp
} from '@phenomic/preset-react-app/lib/client';

import { rehydrate } from "glamor";
import "glamor/reset";

import Home from './components/Home';
import PageError from './components/PageError';
import Admin from './components/Admin';

if (typeof window !== "undefined" && window._glam) {
  rehydrate(window._glam);
}

const HomeContainer = createContainer(Home, props => ({
  home: query({ path: 'home', limit: 1 }),
  tours: query({ path: 'tour', limit: 10 }),
  playlist : query({ path: 'playlist', limit: 10, order: "asc" }),
}))


const routes = () => (
  <Router history={browserHistory} >
    <Route path='/' component={HomeContainer} />
    <Route path='/acadians' component={HomeContainer} />
    <Route path='/admin' component={Admin} />
    <Route path='*' component={PageError} />
  </Router>
)

export default createApp(routes);

if (module.hot) {
  module.hot.accept(() => renderApp(routes))
}
