export default class Track {
  constructor(store, track) {
    this.store = store
    this.id = track.id
    this.title = track.title
    this.artist = track.artist
    this.album = track.album
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
