import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {Provider, observer} from 'mobx-react'
import Album from './Album'
import AlbumGrid from './AlbumGrid'
import Artist from './Artist'
import ArtistGrid from './ArtistGrid'
import Library from './Library'
import NotFound from './NotFound'
import Page from './Page'

// todo: a nicer way of defining these containers?

const AlbumGridContainer = observer(['store'], props =>
  <AlbumGrid {...props} shuffle albums={props.store.albums.all} />
)

const ArtistGridContainer = observer(['store'], props =>
  <ArtistGrid {...props} artists={props.store.artists.all} />
)

const ArtistContainer = observer(['store'], props =>
  <Artist {...props} artist={props.store.artists.get(props.params.id)} />
)

const AlbumContainer = observer(['store'], props =>
  <Album {...props} album={props.store.albums.get(props.params.id)} />
)

const PageContainer = observer(['store'], props =>
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
