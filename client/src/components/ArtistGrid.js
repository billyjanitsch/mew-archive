import {Link} from 'react-router'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import Types from '../types'
import {artistFactory} from '../selectors'
import cs from './styles/ArtistGrid'

const ArtistGrid = props =>
  <div className={cs.grid}>
    {props.artists.map(artist =>
      <Link key={artist.id} to={`/artist/${artist.id}`} className={cs.card}>
        <div className={cs.image} style={{backgroundImage: `url(${artist.image})`}} />
        <div className={cs.info}>{artist.name}</div>
      </Link>
    )}
  </div>

ArtistGrid.propTypes = {
  artists: Types.arrayOf(Types.artist),
}

const mapStateToProps = createStructuredSelector({
  artists: artistFactory(),
})

export default connect(mapStateToProps)(ArtistGrid)
