import {computed} from 'mobx'
import {uniqueId} from 'lodash'

export default class Artist {
  constructor(store, artist) {
    this.store = store
    this.id = artist.id || uniqueId('artist-')
    this.name = artist.name
    this.image = artist.image
  }

  @computed get albums() {
    return this.store.albums.find(album => album.artist === this)
  }
}
