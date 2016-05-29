import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {AlbumGrid, Album, Page, ArtistGrid, Artist, NotFound} from './components'
import {Provider, getStore} from './utils'

// todo: a nicer way of defining these containers?

const AlbumGridContainer = getStore(({store, ...props}) =>
  <AlbumGrid albums={store.collections.albums} {...props} />
)

const ArtistGridContainer = getStore(({store, ...props}) =>
  <ArtistGrid artists={store.collections.artists} {...props} />
)

const ArtistContainer = getStore(({store, ...props}) =>
  <Artist artist={store.resolveArtist(props.params.id)} {...props} />
)

const AlbumContainer = getStore(({store, ...props}) =>
  <Album album={store.resolveAlbum(props.params.id)} {...props} />
)

const PageContainer = getStore(({store, ...props}) =>
  <Page player={store.player} {...props} />
)

const App = props =>
  <Provider store={props.store}>
    <Router history={browserHistory}>
      <Route path='/' component={PageContainer}>
        <IndexRedirect to='library/artists' />
        <Route path='library'>
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
