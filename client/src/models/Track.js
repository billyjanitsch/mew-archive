import {computed} from 'mobx'

export default class Track {
  constructor(store, track) {
    this.store = store
    this.id = track.id
    this.title = track.title
    this._artist = track.artist
    this._album = track.album
  }

  @computed get artist() {
    return this.store.collections.artists.get(this._artist)
  }

  @computed get album() {
    return this.store.collections.albums.get(this._album)
  }

  toJS() {
    return {
      id: this.id,
      title: this.title,
      artist: this.artist.id,
      album: this.album.id,
    }
  }
}
