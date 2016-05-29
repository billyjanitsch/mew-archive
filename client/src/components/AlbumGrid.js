import {Link} from 'react-router'
import {observer} from 'mobx-react'
import {getStore} from '../utils'
import cs from './styles/AlbumGrid.css'

const $AlbumCard = props =>
  <Link key={props.album.id} to={`/album/${props.album.id}`} className={cs.card}>
    <div className={cs.image} style={{backgroundImage: `url(${props.album.image})`}} />
    <div className={cs.info}>
      {props.album.title}
    </div>
  </Link>

const AlbumCard = observer($AlbumCard)

const $AlbumGrid = props =>
  <div className={cs.grid}>
    {props.albums.map(album => <AlbumCard key={album.id} album={album} />)}
  </div>

const AlbumGrid = observer($AlbumGrid)

const AlbumGridContainer = props =>
  <AlbumGrid albums={props.store.collections.albums} />

export default getStore(AlbumGridContainer)
