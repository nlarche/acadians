import React from 'react'
import { Router, Route, browserHistory } from 'react-router'
import {
  createApp,
  createContainer,
  query,
  renderApp
} from '@phenomic/preset-react-app/lib/client'

import Home from './components/Home'
import BlogPost from './components/BlogPost'
import PageError from './components/PageError'
import Admin from './components/Admin'

const BlogPostContainer = createContainer(BlogPost, props => ({
  page: query({ path: 'posts', id: props.params.splat })
}))

const HomeContainer = createContainer(Home, props => ({
  posts: query({ path: 'posts', limit: 2, after: props.params.after }),
  tests: query({ path: 'tests' })
}))

const routes = () => (
  <Router history={browserHistory}>
    <Route path='/' component={HomeContainer} />
    <Route path='/after/:after' component={HomeContainer} />
    <Route path='/blog/*' component={BlogPostContainer} />
    <Route path='/admin' component={Admin} />
    <Route path='*' component={PageError} />
  </Router>
)

export default createApp(routes)

if (module.hot) {
  module.hot.accept(() => renderApp(routes))
}
