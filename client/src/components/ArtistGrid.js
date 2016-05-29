import {Link} from 'react-router'
import {observer} from 'mobx-react'
import {getStore} from '../utils'
import cs from './styles/ArtistGrid.css'

const $ArtistCard = props =>
  <Link key={props.artist.id} to={`/artist/${props.artist.id}`} className={cs.card}>
    <div className={cs.image} style={{backgroundImage: `url(${props.artist.image})`}} />
    <div className={cs.info}>
      {props.artist.name}
    </div>
  </Link>

const ArtistCard = observer($ArtistCard)

const $ArtistGrid = props =>
  <div className={cs.grid}>
    {props.artists.map(artist => <ArtistCard key={artist.id} artist={artist} />)}
  </div>

const ArtistGrid = observer($ArtistGrid)

const ArtistGridContainer = props =>
  <ArtistGrid artists={props.store.collections.artists} />

export default getStore(ArtistGridContainer)
