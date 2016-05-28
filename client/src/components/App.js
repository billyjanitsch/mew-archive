import {Link} from 'react-router'
import Types from '../types'
import Player from './Player'
import cs from './styles/App'

const NavItem = props =>
  <Link to={props.to} className={cs.link} activeClassName={cs.active}>
    {props.children}
  </Link>

NavItem.propTypes = {
  to: Types.string.isRequired,
  children: Types.node.isRequired,
}

const Header = () =>
  <header className={cs.header}>
    header
    <nav className={cs.links}>
      <NavItem to='/library/artists'>Artists</NavItem>
      <NavItem to='/library/albums'>Albums</NavItem>
    </nav>
    login
  </header>

const App = props =>
  <div>
    <Header />
    <main className={cs.main}>
      {props.children}
    </main>
    <Player />
  </div>

App.propTypes = {
  children: Types.element.isRequired,
}

export default App
