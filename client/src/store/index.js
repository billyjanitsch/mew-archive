import GenreStore from './GenreStore'
import ArtistStore from './ArtistStore'
import AlbumStore from './AlbumStore'
import TrackStore from './TrackStore'
import {Player} from '../models'

export default class Store {
  player = new Player()
  genres = new GenreStore(this)
  artists = new ArtistStore(this)
  albums = new AlbumStore(this)
  tracks = new TrackStore(this)
}
