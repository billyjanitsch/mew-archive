import {computed} from 'mobx'
import {filter, uniqueId} from 'lodash'

export default class Artist {
  static isArtist(artist) {
    return artist instanceof Artist
  }

  constructor(store, artist) {
    this.store = store
    this.id = artist.id || uniqueId('artist-')
    this.name = artist.name
    this.image = artist.image
  }

  @computed get sortName() {
    return this.name.replace(/(^The |^A )/g, '')
  }

  @computed get albums() {
    return filter(this.store.albums, ['artist', this])
  }

  toJS() {
    return {
      id: this.id,
      name: this.name,
      image: this.image,
    }
  }
}
