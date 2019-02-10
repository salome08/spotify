import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router'
import { Switch, Route } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import App from './App'
import NotFoundPage from './containers/NotFound'
import DemoPage from './containers/DemoPage'
import SearchPage from './containers/SearchPage'
import ArtistPage from './containers/ArtistPage'
import AlbumPage from './containers/AlbumPage'

const history = createBrowserHistory()

ReactDOM.render(
  <Router history={history}>
    <App>
      <Switch>
        <Route exact path="/" component={DemoPage} />
        <Route path="/search" component={SearchPage} />
        <Route path="/artist/:id" component={ArtistPage} />
        <Route path="/album/:id" component={AlbumPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </App>
  </Router>,
  document.getElementById('root')
)
