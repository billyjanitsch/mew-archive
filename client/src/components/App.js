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

const AlbumGridContainer = observer(['albums'], props =>
  <AlbumGrid {...props} shuffle albums={props.albums.models} />
)

const ArtistGridContainer = observer(['artists'], props =>
  <ArtistGrid {...props} artists={props.artists.models} />
)

const ArtistContainer = observer(['artists'], props =>
  <Artist {...props} artist={props.artists.get(props.params.id)} />
)

const AlbumContainer = observer(['albums'], props =>
  <Album {...props} album={props.albums.get(props.params.id)} />
)

const App = props =>
  <Provider {...props}>
    <Router history={browserHistory}>
      <Route path='/' component={Page}>
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
