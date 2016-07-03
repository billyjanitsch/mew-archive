import {render} from 'react-dom'
import App from './components/App'
import Store from './store'
import './styles.css'

const store = new Store()
window.store = store

const rootElement = document.getElementById('root')
render(<App store={store} />, rootElement)

if (process.env.NODE_ENV === 'development' && module.hot) {
  // hot reload components
  module.hot.accept('./components/App', () => {
    const NextApp = require('./components/App').default

    render(<NextApp store={store} />, rootElement)
  })
}
