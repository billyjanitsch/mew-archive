import {Route, IndexRedirect} from 'react-router'
import {App, Artists, Artist, NotFound} from './components'

export default (
  <Route path='/' component={App}>
    <IndexRedirect to='artists' />
    <Route path='artists' component={Artists}>
      <Route path=':artist' component={Artist} />
    </Route>
    <Route path='*' component={NotFound} />
  </Route>
)
