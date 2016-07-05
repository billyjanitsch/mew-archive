import {Link} from 'react-router'
import Player from './Player'
import Search from './Search'
import cs from './styles/Page.css' // eslint-disable-line

const DevTools = process.env.NODE_ENV === 'development' &&
  require('mobx-react-devtools').default

const NavItem = props =>
  <Link to={props.to} className={cs.link} activeClassName={cs.active}>
    {props.children}
  </Link>

const Header = () =>
  <header className={cs.header}>
    Mew
    <nav className={cs.links}>
      <NavItem to='/library/artists'>Artists</NavItem>
      <NavItem to='/library/albums'>Albums</NavItem>
    </nav>
    login
  </header>

const Page = props =>
  <div>
    {DevTools && <DevTools />}
    <Header />
    <main className={cs.main}>
      {props.children}
    </main>
    <Player />
    <Search />
  </div>

export default Page
