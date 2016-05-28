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

render(<App />, document.getElementById('root'))
