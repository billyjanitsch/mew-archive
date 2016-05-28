import {Link} from 'react-router'
import {PropTypes} from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {artistFactory} from '../selectors'

const Artists = props =>
  <main>
    {props.artists.map(artist =>
      <Link to={`artists/${artist.id}`}>
        artist: {artist.name}
      </Link>
    )}
  </main>

Artists.propTypes = {
  artists: PropTypes.array,
}

const mapStateToProps = createStructuredSelector({
  artists: artistFactory(),
})

export default connect(mapStateToProps)(Artists)
