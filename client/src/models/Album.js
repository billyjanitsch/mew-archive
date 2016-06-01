import {computed} from 'mobx'
import {filter, sortBy} from 'lodash'

export default class Album {
  constructor(store, album) {
    this.store = store
    this.id = album.id
    this.title = album.title
    this.date = album.date
    this.image = album.image
    this._artist = album.artist
  }

  @computed get artist() {
    return this.store.collections.artists.get(this._artist)
  }

  @computed get tracks() {
    return sortBy(filter(this.store.collections.tracks.all, ['album', this]), 'number')
  }

  toJS() {
    return {
      id: this.id,
      title: this.title,
      date: this.date,
      image: this.image,
      artist: this.artist.id,
    }
  }
}
