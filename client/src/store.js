import {Albums, Artists, Genres, Tracks} from './collections'
import {Player} from './models'

export default class Store {
  albums = new Albums(null, {store: this})
  artists = new Artists(null, {store: this})
  genres = new Genres(null, {store: this})
  tracks = new Tracks(null, {store: this})
  player = new Player

  constructor() {
    this.albums.fetch()
    this.artists.fetch()
    // this.genres.fetch()
    this.tracks.fetch()
  }
}
