import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {AlbumGrid, Album, Page, ArtistGrid, Artist, NotFound} from './components'
import {Provider} from './utils'

const App = props =>
  <Provider store={props.store}>
    <Router history={browserHistory}>
      <Route path='/' component={Page}>
        <IndexRedirect to='library/artists' />
        <Route path='library'>
          <Route path='artists' component={ArtistGrid} />
          <Route path='albums' component={AlbumGrid} />
        </Route>
        <Route path='artist/:id' component={Artist} />
        <Route path='album/:id' component={Album} />
        <Route path='*' component={NotFound} />
      </Route>
    </Router>
  </Provider>

export default App
