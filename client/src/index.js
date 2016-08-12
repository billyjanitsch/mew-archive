import {render} from 'react-dom'
import App from './components/App'
import Store from './store'
import './styles.css'

const store = {...new Store()}

const rootElement = document.getElementById('root') // eslint-disable-line

render(<App {...store} />, rootElement)

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./components/App', () => {
    const NextApp = require('./components/App').default

    render(<NextApp {...store} />, rootElement)
  })
}
