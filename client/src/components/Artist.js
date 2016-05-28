import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import Types from '../types'
import {artistFactory} from '../selectors'

const Artist = props => props.artist
  ? <div>
      <h1>{props.artist.name}</h1>
    </div>
  : <div>no such artist</div>

Artist.propTypes = {
  artist: Types.artist,
}

const mapStateToProps = createStructuredSelector({
  artist: artistFactory('params.id'),
})

export default connect(mapStateToProps)(Artist)
