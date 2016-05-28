import {PropTypes} from 'react'
import Player from './Player'
import cs from '../styles'

const Header = () =>
  <header className={cs.Header}>
    header
  </header>

const App = props =>
  <div>
    <Header />
    {props.children}
    <Player />
  </div>

App.propTypes = {
  children: PropTypes.element,
}

export default App
