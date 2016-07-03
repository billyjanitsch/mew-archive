import {Link} from 'react-router'
import {sortBy, take, sampleSize} from 'lodash'
import {observer} from 'mobx-react'
import cs from './styles/AlbumGrid.css'

let AlbumCard = props =>
  <Link key={props.album.id} to={`/album/${props.album.id}`} className={cs.card}>
    <div className={cs.image} style={{backgroundImage: `url(${props.album.image})`}} />
    <div className={cs.info}>
      {props.album.title} ({props.album.date})
    </div>
  </Link>

AlbumCard = observer(AlbumCard)

const AlbumGrid = props =>
  <div className={cs.grid}>
    {(props.shuffle ? sampleSize(props.albums, 50) : take(sortBy(props.albums, 'date'), 50))
      .map(album => <AlbumCard key={album.id} album={album} />)
    }
  </div>

export default observer(AlbumGrid)
