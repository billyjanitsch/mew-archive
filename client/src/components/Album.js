import {observer} from 'mobx-react'
import {Link} from 'react-router'

const Album = props => props.album
  ? <div>
      <h1>
        {props.album.title}
        by
        <Link to={`/artist/${props.album.artist.id}`}>
          {props.album.artist.name}
        </Link>
      </h1>
    </div>
  : <div>no such album</div>

export default observer(Album)
