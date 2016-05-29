import {render} from 'react-dom'
import App from './App'
import Store from './store'
import './styles.css'

const store = new Store()

const rootElement = document.getElementById('root')
render(<App store={store} />, rootElement)

if (process.env.NODE_ENV === 'development' && module.hot) {
  // hot reload components
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default
    render(<NextApp store={store} />, rootElement)
  })
}
