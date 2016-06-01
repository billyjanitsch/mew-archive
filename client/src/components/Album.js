import {observer} from 'mobx-react'
import {Link} from 'react-router'

let Track = props =>
  <p>
    {props.track.number} {props.track.title}
  </p>

Track = observer(Track)

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
      <div>
        {props.album.tracks.map(track => <Track key={track.id} track={track} />)}
      </div>
    </div>
  )
}

export default observer(Album)
