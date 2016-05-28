import {Route, IndexRedirect} from 'react-router'
import {AlbumGrid, Album, App, ArtistGrid, Artist, NotFound} from './components'

export default (
  <Route path='/' component={App}>
    <IndexRedirect to='library/artists' />
    <Route path='library'>
      <Route path='artists' component={ArtistGrid} />
      <Route path='albums' component={AlbumGrid} />
    </Route>
    <Route path='artist/:id' component={Artist} />
    <Route path='album/:id' component={Album} />
    <Route path='*' component={NotFound} />
  </Route>
)
