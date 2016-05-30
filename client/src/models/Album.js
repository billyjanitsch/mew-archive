import {uniqueId} from 'lodash'

export default class Album {
  constructor(store, album) {
    this.store = store
    this.id = album.id || uniqueId('album-')
    this.title = album.title
    this.image = album.image
    this.artist = store.resolveArtist(album.artist)
  }

  toJS() {
    return {
      id: this.id,
      title: this.title,
      image: this.image,
      artist: this.artist.id,
    }
  }
}
