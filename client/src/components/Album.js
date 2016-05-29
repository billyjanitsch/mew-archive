import {observer} from 'mobx-react'

const Album = props => props.album
  ? <div>
      <h1>{props.album.title} by {props.album.artist.name}</h1>
    </div>
  : <div>no such album</div>

export default observer(Album)
