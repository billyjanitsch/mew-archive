import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {render} from 'react-dom'
import {Router, browserHistory} from 'react-router'
import routes from './routes'
import reducer from './reducers'
import './styles'

const store = createStore(reducer)

const App = () =>
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>

const rootElement = document.getElementById('root')
render(<App />, rootElement)

if (process.env.NODE_ENV === 'development' && module.hot) {
  // hot reload reducers
  module.hot.accept('./reducers', () => {
    const nextReducer = require('./reducers').default
    store.replaceReducer(nextReducer)
  })

  // hot reload components
  module.hot.accept('./routes', () => {
    const nextRoutes = require('./routes').default
    const NextApp = () =>
      <Provider store={store}>
        <Router history={browserHistory} routes={nextRoutes} />
      </Provider>
    render(<NextApp />, rootElement)
  })
}
