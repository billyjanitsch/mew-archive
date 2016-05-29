import {observer} from 'mobx-react'
import AlbumGrid from './AlbumGrid'

const Artist = props => {
  if (!props.artist) return <div>no such artist</div>
  return (
    <div>
      <h1>{props.artist.name}</h1>
      <AlbumGrid albums={props.artist.albums} />
    </div>
  )
}

export default observer(Artist)
