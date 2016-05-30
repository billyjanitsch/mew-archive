import {observer} from 'mobx-react'
import {Link} from 'react-router'

const Album = props => {
  if (!props.album) return <div>No such album!</div>
  return (
    <div>
      <h1>
        {props.album.title}
        by
        <Link to={`/artist/${props.album.artist.id}`}>
          {props.album.artist.name}
        </Link>
      </h1>
    </div>
  )
}

export default observer(Album)
