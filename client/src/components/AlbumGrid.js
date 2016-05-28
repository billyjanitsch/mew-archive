import {Link} from 'react-router'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {albumFactory} from '../selectors'
import Types from '../types'
import cs from './styles/AlbumGrid'

const AlbumGrid = props =>
  <div className={cs.grid}>
    {props.albums.map(album =>
      <Link key={album.id} to={`/album/${album.id}`} className={cs.card}>
        <div className={cs.image} style={{backgroundImage: `url(${album.image})`}} />
        <div className={cs.info}>
          {album.title}
        </div>
      </Link>
    )}
  </div>

AlbumGrid.propTypes = {
  albums: Types.arrayOf(Types.album),
}

const mapStateToProps = createStructuredSelector({
  albums: albumFactory('albums'),
})

export default connect(mapStateToProps)(AlbumGrid)
