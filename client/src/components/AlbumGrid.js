import {Link} from 'react-router'
import {sortBy, take} from 'lodash'
import {observer} from 'mobx-react'
import cs from './styles/AlbumGrid.css'

const $AlbumCard = props =>
  <Link key={props.album.id} to={`/album/${props.album.id}`} className={cs.card}>
    <div className={cs.image} style={{backgroundImage: `url(${props.album.image})`}} />
    <div className={cs.info}>
      {props.album.title} ({props.album.date})
    </div>
  </Link>

const AlbumCard = observer($AlbumCard)

const AlbumGrid = props =>
  <div className={cs.grid}>
    {take(sortBy(props.albums, 'date'), 50)
      .map(album => <AlbumCard key={album.id} album={album} />)
    }
  </div>

export default observer(AlbumGrid)
