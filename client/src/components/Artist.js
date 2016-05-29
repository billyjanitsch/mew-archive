import {observer} from 'mobx-react'
import {getStore} from '../utils'

const $Artist = props => {
  if (!props.artist) return <div>no such artist</div>
  return (
    <div>
      <h1>{props.artist.name}</h1>
    </div>
  )
}

const Artist = observer($Artist)

const ArtistContainer = props =>
  <Artist artist={props.store.resolveArtist(props.params.id)} />

export default getStore(ArtistContainer)
