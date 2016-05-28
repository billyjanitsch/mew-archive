import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import Types from '../types'
import {albumFactory} from '../selectors'

const Album = props => props.album
  ? <div>
      <h1>{props.album.title} by {props.artist && props.artist.name}</h1>
    </div>
  : <div>no such album</div>

Album.propTypes = {
  album: Types.album,
  artist: Types.artist,
}

const mapStateToProps = createStructuredSelector({
  album: albumFactory('params.id'),
  // artist: artistOfAlbumFactory('params.id'),
})

export default connect(mapStateToProps)(Album)
