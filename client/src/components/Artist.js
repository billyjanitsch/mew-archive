import {PropTypes} from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {getArtistFactory} from '../selectors'

const Artist = props =>
  <main>
    <section>
      <h1>{props.artist.name}</h1>
    </section>
  </main>

Artist.propTypes = {
  artist: PropTypes.object,
}

const mapStateToProps = createStructuredSelector({
  artist: getArtistFactory('id'),
})

export default connect(mapStateToProps)(Artist)
