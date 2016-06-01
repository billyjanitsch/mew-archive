import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import Album from './Album'
import AlbumGrid from './AlbumGrid'
import Artist from './Artist'
import ArtistGrid from './ArtistGrid'
import Library from './Library'
import NotFound from './NotFound'
import Page from './Page'
import {Provider, getStore} from '../utils'

// todo: a nicer way of defining these containers?

const AlbumGridContainer = getStore(props =>
  <AlbumGrid {...props} albums={props.store.albums.all} />
)

const ArtistGridContainer = getStore(props =>
  <ArtistGrid {...props} artists={props.store.artists.all} />
)

const ArtistContainer = getStore(props =>
  <Artist {...props} artist={props.store.artists.get(props.params.id)} />
)

const AlbumContainer = getStore(props =>
  <Album {...props} album={props.store.albums.get(props.params.id)} />
)

const PageContainer = getStore(props =>
  <Page {...props} player={props.store.player} />
)

const App = props =>
  <Provider store={props.store}>
    <Router history={browserHistory}>
      <Route path='/' component={PageContainer}>
        <IndexRedirect to='library/artists' />
        <Route path='library' component={Library}>
          <Route path='artists' component={ArtistGridContainer} />
          <Route path='albums' component={AlbumGridContainer} />
        </Route>
        <Route path='artist/:id' component={ArtistContainer} />
        <Route path='album/:id' component={AlbumContainer} />
        <Route path='*' component={NotFound} />
      </Route>
    </Router>
  </Provider>

export default App
