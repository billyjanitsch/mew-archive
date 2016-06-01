import {computed} from 'mobx'
import {filter} from 'lodash'

export default class Artist {
  constructor(store, artist) {
    this.store = store
    this.id = artist.id
    this.name = artist.name
    this.image = artist.image
    this._genre = artist.genre
  }

  @computed get sortName() {
    return this.name.replace(/(^The |^A )/g, '')
  }

  @computed get genre() {
    return this.store.collections.genres.get(this._genre)
  }

  @computed get tracks() {
    return filter(this.store.collections.tracks.all, ['artist', this])
  }

  @computed get albums() {
    return filter(this.store.collections.albums.all, ['artist', this])
  }

  toJS() {
    return {
      id: this.id,
      name: this.name,
      image: this.image,
      genre: this._genre,
    }
  }
}
