import DevTools from 'mobx-react-devtools'
import {Link} from 'react-router'
import Player from './Player'
import Search from './Search'
import cs from './styles/Page.css'

const NavItem = props =>
  <Link to={props.to} className={cs.link} activeClassName={cs.active}>
    {props.children}
  </Link>

const Header = () =>
  <header className={cs.header}>
    header
    <nav className={cs.links}>
      <NavItem to='/library/artists'>Artists</NavItem>
      <NavItem to='/library/albums'>Albums</NavItem>
    </nav>
    login
  </header>

const Page = props =>
  <div>
    {process.env.NODE_ENV === 'development' && <DevTools />}
    <Header />
    <main className={cs.main}>
      {props.children}
    </main>
    <Player player={props.player} />
    <Search />
  </div>

export default Page
